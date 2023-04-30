package income_tax

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"

	"github.com/gofiber/fiber/v2"
)

func CalculateIncomeTax(c *fiber.Ctx) error {
	salary := c.Params("salary")

	db, err := sql.Open("mysql", "root:2664@tcp(35.235.115.113:3306)/dev")
	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	var incomeTax float64

	err = db.QueryRow("SELECT calculate_income_tax(?);", salary).Scan(&incomeTax)

	if err != nil {
		panic(err.Error())
	}

	return c.Status(fiber.StatusOK).JSON(
		fiber.Map{
			"income_tax": incomeTax,
		})
}

func CalculateTotalIncomeTax(c *fiber.Ctx) error {
	db, err := sql.Open("mysql", "root:2664@tcp(35.235.115.113:3306)/dev")
	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	var incomeTax float64

	err = db.QueryRow("SELECT calculate_total_income_tax();").Scan(&incomeTax)

	if err != nil {
		panic(err.Error())
	}

	return c.Status(fiber.StatusOK).JSON(
		fiber.Map{
			"income_tax": incomeTax,
		})
}
