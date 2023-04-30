package organization

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"

	"github.com/gofiber/fiber/v2"
)

type Organization struct {
	Id   string `db:"id"`
	Name string `db:"name"`
}

func GetOrganizations(c *fiber.Ctx) error {
	db, err := sql.Open("mysql", "root:2664@tcp(35.235.115.113:3306)/dev")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	rows, err := db.Query("SELECT * FROM organization")

	if err != nil {
		panic(err.Error())
	}

	organizations := []Organization{}

	for rows.Next() {
		var organization Organization

		err = rows.Scan(
			&organization.Id,
			&organization.Name,
		)

		if err != nil {
			panic(err.Error())
		}

		organizations = append(organizations, organization)
	}

	if err := rows.Err(); err != nil {
		panic(err.Error())
	}

	return c.Status(fiber.StatusOK).JSON(organizations)
}
