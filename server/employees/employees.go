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
	Organizacion      string  `db:"organizacion"`       // puesto de trabajo
	Departamento      string  `db:"departamento"`       // puesto de trabajo
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

	rows, err := db.Query("SELECT * FROM total WHERE Organizacion = ? AND Departamento = ?", organization, department)

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
			&employee.Organizacion,
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
