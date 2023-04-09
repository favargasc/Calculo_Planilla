CREATE VIEW get_employees AS
SELECT
    e.id,
    e.firstname,
    e.lastname,
    e.phone,
    e.email,
    s.name AS sex,
    jt.name AS job_title,
    (SELECT
        ROUND(jt.salary_range * POW(1 + 0.04,
            (SELECT TIMESTAMPDIFF(YEAR, employee.esd, CURDATE())
             FROM employee
             WHERE id = e.id)
        ), 2)
    ) AS salary,
    st.name AS status,
    e.dbo,
    e.ssn,
    e.esd,
    e.iban
FROM
    employee e
    INNER JOIN job_title jt 
        ON e.jod_title_id = jt.id
    INNER JOIN sex s 
        ON e.sex_id = s.id
    INNER JOIN employee_status st 
        ON e.status_id = st.id
;