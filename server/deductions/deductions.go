package deductions

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"

	"github.com/gofiber/fiber/v2"
)

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
