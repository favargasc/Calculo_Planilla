-- docker run --name=mysql-dev -e MYSQL_ROOT_PASSWORD=2664 -e MYSQL_USER=admin -e MYSQL_PASSWORD=2664 -e MYSQL_DATABASE=dev -p 3306:3306 -d mysql:latest
USE dev;
-- categoria de las deducciones => { obrero, patronal }
DROP TABLE income_tax;
DROP TABLE deduction;
DROP TABLE employee;
DROP TABLE deduction_category;
DROP TABLE deduction_status;
DROP TABLE period;
DROP TABLE job_title;
DROP TABLE employee_status;
DROP TABLE sex;
-- categoria de las deducciones => { obrero, patronal }
CREATE TABLE deduction_category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);
-- estado de la deduccion => { activo, inactivo, etc.}
CREATE TABLE deduction_status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);
-- periodo de relacion de pagos por deducciones, etc.
CREATE TABLE period (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);
-- tabla de deducciones
CREATE TABLE deduction (
    category_id INT NOT NULL,
    period_id INT NOT NULL,
    status_id INT NOT NULL,

    id INT AUTO_INCREMENT PRIMARY KEY,
    concept VARCHAR(30),
    percentage DECIMAL(4,2) CHECK (percentage >= 0 AND percentage <= 100),
    effective_date DATE,
    expiration_date DATE,

    CONSTRAINT fk_category_id_deduction
        FOREIGN KEY (category_id)
        REFERENCES deduction_category(id),

    CONSTRAINT fk_period_id_deduction
        FOREIGN KEY (period_id)
        REFERENCES period(id),

    CONSTRAINT fk_status_id_deduction
        FOREIGN KEY (status_id)
        REFERENCES deduction_status(id)
);
-- cargo dentro de la empresa

-- estado de los empleados => { activo, inactivo, incapacitado, etc.}
CREATE TABLE employee_status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(20)
);
-- sexo del empleado
CREATE TABLE sex (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(20)
);

CREATE TABLE job_title (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(35),
    salary_range DOUBLE
);
-- tabla de empleados
CREATE TABLE employee (
    sex_id INT NOT NULL,
    jod_title_id INT NOT NULL,
    status_id int NOT NULL,

    id NVARCHAR(20) PRIMARY KEY,
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    phone VARCHAR(20),
    email VARCHAR(35),
    dbo DATE,
    esd DATE,
    ssn VARCHAR(20),
    iban VARCHAR(30),

    CONSTRAINT fk_sex_id_employee
        FOREIGN KEY (sex_id)
        REFERENCES sex(id),

    CONSTRAINT fk_job_title_id_employee
        FOREIGN KEY (jod_title_id)
        REFERENCES job_title(id),

    CONSTRAINT fk_status_id_employee
        FOREIGN KEY (status_id)
        REFERENCES employee_status(id)
);
-- tabla de tarifas de rebajos
create table income_tax(
    period_id INT NOT NULL,

    id INT PRIMARY KEY AUTO_INCREMENT,
    effective_date DATE,
    expiration_date DATE,
    lower_bound DOUBLE,
    upper_bound DOUBLE,
    exemption_percentage DECIMAL(4,2) CHECK (exemption_percentage >= 0 AND exemption_percentage <= 100),
    is_max BOOLEAN,
    
    CONSTRAINT fk_period_id_income_tax
    FOREIGN KEY (period_id)
    REFERENCES period(id)
);

