-- deducciones
CREATE FUNCTION calculate_deductions(category INT, salary DOUBLE) 
    RETURNS DOUBLE DETERMINISTIC 
BEGIN
    DECLARE result DOUBLE DEFAULT 0;

    SET result = (SELECT SUM(salary * (percentage / 100)) FROM deduction WHERE category_id = category AND status_id = 1);

    RETURN result;
END;