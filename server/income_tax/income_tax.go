package income_tax

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"

	"github.com/gofiber/fiber/v2"
)

func CalculateIncomeTax(c *fiber.Ctx) error {
	salary := c.Params("salary")

	db, err := sql.Open("mysql", "root:UxCZMbuwmazK5eNnyLo9@tcp(containers-us-west-152.railway.app:7612)/railway")
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
