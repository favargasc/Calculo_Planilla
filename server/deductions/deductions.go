package deductions

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"

	"github.com/gofiber/fiber/v2"
)

type Deduction struct {
	Period         string  `db:"period"`
	Status         bool    `db:"status"`
	Id             int     `db:"id"`
	Concept        string  `db:"concept"`
	Percentage     float32 `db:"percentage"`
	EffectiveDate  string  `db:"effective_date"`
	ExpirationDate string  `db:"expiration_date"`
}

func CalculateEmployerDeduction(c *fiber.Ctx) error {
	salary := c.Params("salary")

	db, err := sql.Open("mysql", "root:2664@tcp(35.235.115.113:3306)/dev")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	var deduction float64

	err = db.QueryRow("SELECT calculate_deductions(?, ?);", 1, salary).Scan(&deduction)

	if err != nil {
		panic(err.Error())
	}

	return c.Status(fiber.StatusOK).JSON(
		fiber.Map{
			"deduction": deduction,
		})
}

func CalculateEmployeeDeduction(c *fiber.Ctx) error {
	salary := c.Params("salary")

	db, err := sql.Open("mysql", "root:2664@tcp(35.235.115.113:3306)/dev")
	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	var deduction float64

	err = db.QueryRow("SELECT calculate_deductions(?, ?);", 2, salary).Scan(&deduction)

	if err != nil {
		panic(err.Error())
	}

	return c.Status(fiber.StatusOK).JSON(
		fiber.Map{
			"deduction": deduction,
		})
}

func GetAllEmployeeDeductions(c *fiber.Ctx) error {
	db, err := sql.Open("mysql", "root:2664@tcp(35.235.115.113:3306)/dev")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	rows, err := db.Query("SELECT * FROM get_employee_deductions;")

	if err != nil {
		panic(err.Error())
	}

	deductions := []Deduction{}

	for rows.Next() {
		var deduction Deduction

		err = rows.Scan(
			&deduction.Period,
			&deduction.Status,
			&deduction.Id,
			&deduction.Concept,
			&deduction.Percentage,
			&deduction.EffectiveDate,
			&deduction.ExpirationDate,
		)

		if err != nil {
			panic(err.Error())
		}

		deductions = append(deductions, deduction)
	}

	if err := rows.Err(); err != nil {
		panic(err.Error())
	}

	return c.Status(fiber.StatusOK).JSON(deductions)
}

func GetAllEmployerDeductions(c *fiber.Ctx) error {
	db, err := sql.Open("mysql", "root:2664@tcp(35.235.115.113:3306)/dev")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	rows, err := db.Query("SELECT * FROM get_employer_deductions;")

	if err != nil {
		panic(err.Error())
	}

	deductions := []Deduction{}

	for rows.Next() {
		var deduction Deduction

		err = rows.Scan(
			&deduction.Period,
			&deduction.Status,
			&deduction.Id,
			&deduction.Concept,
			&deduction.Percentage,
			&deduction.EffectiveDate,
			&deduction.ExpirationDate,
		)

		if err != nil {
			panic(err.Error())
		}

		deductions = append(deductions, deduction)
	}

	if err := rows.Err(); err != nil {
		panic(err.Error())
	}

	return c.Status(fiber.StatusOK).JSON(deductions)
}
