package main

import (
	"p1/employees"

	"p1/deductions"

	"p1/income_tax"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
		AllowMethods: "GET, POST, PUT, DELETE",
	}))

	app.Get("/employees", employees.GetAllEmployees)

	app.Get("/employee_deductions", deductions.GetAllEmployeeDeductions)

	app.Get("/employer_deductions", deductions.GetAllEmployerDeductions)

	app.Get("/employee_deductions/:salary", deductions.CalculateEmployeeDeduction)

	app.Get("/employer_deductions/:salary", deductions.CalculateEmployerDeduction)

	app.Get("/income_tax/:salary", income_tax.CalculateIncomeTax)

	app.Listen(":3000")
}
