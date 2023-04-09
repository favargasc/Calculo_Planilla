-- tarifas 
CREATE FUNCTION calculate_income_tax(salary DOUBLE) 
    RETURNS DOUBLE DETERMINISTIC
BEGIN
    DECLARE result DOUBLE DEFAULT 0;

    SELECT SUM(
        CASE
            WHEN (is_max AND salary >= lower_bound) THEN (salary - lower_bound) * (exemption_percentage / 100)
            WHEN salary > upper_bound THEN (upper_bound - lower_bound) * (exemption_percentage / 100)
            WHEN (salary <= upper_bound AND salary >= lower_bound) THEN (salary - lower_bound) * (exemption_percentage / 100)
            ELSE 0
        END
        
    ) INTO result
    FROM income_tax;
    
    RETURN result;
END;
