CREATE view get_employee_deductions AS
SELECT
    p.name,
    d.status_id,
    d.id,
    d.concept,
    d.percentage,
    d.effective_date,
    d.expiration_date
FROM
    period p
INNER JOIN
        deduction d
ON
    p.id = d.period_id
WHERE
    d.category_id = 2;