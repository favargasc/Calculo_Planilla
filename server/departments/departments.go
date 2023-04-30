package department

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"

	"github.com/gofiber/fiber/v2"
)

type Department struct {
	Id   string `db:"id"`
	Name string `db:"name"`
}

func GetDepartments(c *fiber.Ctx) error {
	db, err := sql.Open("mysql", "root:2664@tcp(35.235.115.113:3306)/dev")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	rows, err := db.Query("SELECT * FROM department")

	if err != nil {
		panic(err.Error())
	}

	departments := []Department{}

	for rows.Next() {
		var department Department

		err = rows.Scan(
			&department.Id,
			&department.Name,
		)

		if err != nil {
			panic(err.Error())
		}

		departments = append(departments, department)
	}

	if err := rows.Err(); err != nil {
		panic(err.Error())
	}

	return c.Status(fiber.StatusOK).JSON(departments)
}
