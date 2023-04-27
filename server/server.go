package main

import (
	"p1/employees"

	"p1/deductions"

	"p1/income_tax"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/employees", employees.GetAllEmployees)

	app.Get("/employee_deductions/:salary", deductions.CalculateEmployeeDeduction)

	app.Get("/employer_deductions/:salary", deductions.CalculateEmployerDeduction)

	app.Get("/income_tax/:salary", income_tax.CalculateIncomeTax)

	app.Listen(":3000")
}
