package employees

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"

	"github.com/gofiber/fiber/v2"
)

type Employee struct {
	Cedula            string  `db:"cedula"` // documento de identificacion
	Nombre            string  `db:"nombre"`
	Apellido1         string  `db:"apellido1"`
	Apellido2         string  `db:"apellido2"`
	Salario           float64 `db:"salario"`
	FechaNacimiento   string  `db:"fecha_nacimiento"`
	OrganizacionId    int     `db:"organizacion_id"`    // puesto de trabajo
	Organizacion      string  `db:"organizacion"`       // puesto de trabajo
	Departamento      string  `db:"departamento"`       // puesto de trabajo
	DepartamentoId    int     `db:"departamento_id"`    // puesto de trabajo
	DeduccionPatronal float64 `db:"deduccion_patronal"` // puesto de trabajo
	DeduccionObrera   float64 `db:"deduccion_obrera"`   // puesto de trabajo
	Renta             float64 `db:"renta"`              // puesto de trabajo
}

func GetAllEmployees(c *fiber.Ctx) error {
	db, err := sql.Open("mysql", "root:2664@tcp(35.235.115.113:3306)/dev")

	organization := c.Params("organization")
	department := c.Params("department")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	rows, err := db.Query(`
	SELECT
		t.cedula,
		t.nombre,
		t.apellido1,
		t.apellido2,
		t.salario,
		t.fecha_nacimiento,
		o.id AS organizacion_id,
		o.name AS organizacion,
		d.id AS departamento_id,
		d.name AS departamento,
		t.employer_deduction,
		t.employee_deduction,
		t.income_tax
	FROM total t
	INNER JOIN organization o ON o.id = t.Organizacion
	INNER JOIN department d ON d.id = t.Departamento
	WHERE t.Organizacion = ? AND t.Departamento = ?`,
		organization, department)

	if err != nil {
		panic(err.Error())
	}

	employees := []Employee{}

	for rows.Next() {
		var employee Employee

		err = rows.Scan(
			&employee.Cedula,
			&employee.Nombre,
			&employee.Apellido1,
			&employee.Apellido2,
			&employee.Salario,
			&employee.FechaNacimiento,
			&employee.OrganizacionId,
			&employee.Organizacion,
			&employee.DepartamentoId,
			&employee.Departamento,
			&employee.DeduccionPatronal,
			&employee.DeduccionObrera,
			&employee.Renta,
		)

		if err != nil {
			panic(err.Error())
		}

		employees = append(employees, employee)
	}

	if err := rows.Err(); err != nil {
		panic(err.Error())
	}

	return c.Status(fiber.StatusOK).JSON(employees)
}

func UpdateTotal(c *fiber.Ctx) error {
	db, err := sql.Open("mysql", "root:2664@tcp(35.235.115.113:3306)/dev")
	if err != nil {
		return err
	}

	defer db.Close()

	_, err = db.Exec("CALL updateTotal()");

	if err != nil {
		return err
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{"status": "OK"})
}