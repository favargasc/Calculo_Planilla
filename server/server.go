package main

import (
	"p1/deductions"
	department "p1/departments"
	"p1/employees"
	"p1/income_tax"
	organization "p1/organizations"

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

	app.Get("/employees/:organization/:department", employees.GetAllEmployees)

	app.Get("/employee_deductions_list", deductions.GetAllEmployeeDeductions)

	app.Get("/employer_deductions_list", deductions.GetAllEmployerDeductions)

	app.Get("/total_employee_deductions/:organization/:department", deductions.CalculateTotalEmployeeDeductions)

	app.Get("/total_employer_deductions/:organization/:department", deductions.CalculateTotalEmployerDeductions)

	app.Get("/employee_deductions/:salary", deductions.CalculateEmployeeDeduction)

	app.Get("/employer_deductions/:salary", deductions.CalculateEmployerDeduction)

	app.Get("/income_tax/:salary", income_tax.CalculateIncomeTax)

	app.Get("/total_income_tax/:organization/:department", income_tax.CalculateTotalIncomeTax)

	app.Get("/departments", department.GetDepartments)

	app.Get("/organizations", organization.GetOrganizations)

	app.Listen(":4000")
}
