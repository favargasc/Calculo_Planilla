package employees

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"

	"github.com/gofiber/fiber/v2"
)

type Employee struct {
	ID        string  `db:"id"` // documento de identificacion
	FirstName string  `db:"firstName"`
	LastName  string  `db:"lastName"`
	Phone     string  `db:"phone"`
	Email     string  `db:"email"`
	Sex       string  `db:"gerder"`
	JobTitle  string  `db:"job_title"` // puesto de trabajo
	Salary    float32 `db:"salary"`
	Status    string  `db:"status"` // activo, inactivo, incapacitado
	DOB       string  `db:"dob"`    // date of birth
	SSN       string  `db:"ssn"`    // numero de seguridad social
	ESD       string  `db:"esd"`    // employment start date
	IBAN      string  `db:"iban"`   // international Bank Account Number
}

func GetAllEmployees(c *fiber.Ctx) error {
	db, err := sql.Open("mysql", "root:2664@tcp(35.235.115.113:3306)/dev")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	rows, err := db.Query("SELECT * FROM get_employees;")

	if err != nil {
		panic(err.Error())
	}

	employees := []Employee{}

	for rows.Next() {
		var employee Employee

		err = rows.Scan(
			&employee.ID,
			&employee.FirstName,
			&employee.LastName,
			&employee.Phone,
			&employee.Email,
			&employee.Sex,
			&employee.JobTitle,
			&employee.Salary,
			&employee.Status,
			&employee.DOB,
			&employee.SSN,
			&employee.ESD,
			&employee.IBAN,
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
