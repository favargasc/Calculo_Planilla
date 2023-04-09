INSERT INTO deduction_category (name)
VALUES 
  ('employer deductions'), 
  ('employee deductions')
;

INSERT INTO deduction_status (name)
VALUES 
  ('active'), 
  ('inactive')
;

INSERT INTO period (name)
VALUES 
  ('weekly'), 
  ('biweekly'), 
  ('monthly'), 
  ('yearly')
;

INSERT INTO deduction (
  category_id,
  period_id,
  status_id,
  concept,
  percentage,
  effective_date,
  expiration_date
)
VALUES
  (2, 3, 1, 'CCSS', 9.67, '2022-01-01', '2023-12-31'),
  (2, 3, 1, 'Banco Popular', 1, '2022-01-01', '2023-12-31'),
  (2, 3, 1, 'Asoc. Solidarista', 5, '2022-01-01', '2023-12-31'),
  (1, 3, 1, 'Aguinaldo', 8.33, '2022-01-01', '2023-12-31'),
  (1, 3, 1, 'Cesantía', 6.33, '2022-01-01', '2023-12-31'),
  (1, 3, 1, 'Vacaciones', 4.16, '2022-01-01', '2023-12-31'),
  (1, 3, 1, 'INS', 1.5, '2022-01-01', '2023-12-31'),
  (1, 3, 1, 'CCSS', 24, '2022-01-01', '2023-12-31')
;

INSERT INTO job_title (name, salary_range) 
VALUES
  ('Software Engineer', 700000),
  ('QA', 450000),
  ('DevOps', 550000),
  ('DBA', 600000),
  ('System administrator', 750000),
  ('UI/UX Designer', 600000),
  ('Game Developer', 650000),
  ('Embedded Systems Engineer', 750000),
  ('Cloud Solutions Architect', 800000),
  ('Data Analyst', 650000),
  ('Machine Learning Engineer', 900000),
  ('Blockchain Developer', 800000),
  ('Cybersecurity Analyst', 850000),
  ('Network Engineer', 700000)
;

INSERT INTO employee_status (name) 
VALUES
  ('active'),
  ('suspended'),
  ('incapacitated')
;

INSERT INTO sex (name) 
VALUES
  ('male'),
  ('female'),
  ('other')
;

INSERT INTO employee (
  sex_id,
  jod_title_id,
  status_id,
  id,
  firstname,
  lastname,
  phone,
  email,
  dbo,
  esd,
  ssn,
  iban
)
VALUES
  (1, 1, 1, '7 3658 5491', 'Juan', 'Hernandez', '+506 87654321', 'juan.hernandez@estudiantec.cr', '2004-01-15', '2022-02-05', '123-45-6789', 'CR05001234567891234'),
  (1, 7, 1, '5 4831 0997', 'Ana', 'Garcia', '+506 83576954', 'ana.garcia@estudiantec.cr', '2003-05-23', '2021-11-19', '456-78-9012', 'CR05012345678901234'),
  (2, 9, 1, '1 7739 6303', 'Maria', 'Lopez', '+506 88012233', 'maria.lopez@estudiantec.cr', '2000-12-03', '2021-05-10', '789-01-2345', 'CR05023456789012345'),
  (1, 2, 1, '9 8478 1125', 'Pedro', 'Gonzalez', '+506 88234567', 'pedro.gonzalez@estudiantec.cr', '2002-09-07', '2023-02-28', '901-23-4567', 'CR05034567890123456'),
  (1, 13, 1, '2 0866 1091', 'Luis', 'Jimenez', '+506 86010203', 'luis.jimenez@estudiantec.cr', '1999-11-11', '2022-12-01', '234-56-7890', 'CR05045678901234567'),
  (2, 6, 1, '8 5505 4596', 'Carla', 'Perez', '+506 89562345', 'carla.perez@estudiantec.cr', '2000-04-18', '2021-07-20', '567-89-0123', 'CR05056789012345678'),
  (1, 3, 1, '6 0389 2678', 'Javier', 'Castillo', '+506 85554256', 'javier.castillo@estudiantec.cr', '2003-08-22', '2021-10-14', '890-12-3456', 'CR05067890123456789'),
  (1, 11, 1, '3 7592 1012', 'Fernanda', 'Ramirez', '+506 87895678', 'fernanda.ramirez@estudiantec.cr', '2001-06-30', '2022-04-02', '123-45-6780', 'CR05078901234567890'),
  (2, 12, 1, '1 2666 1207','Diana', 'Herrera', '+506 83002345', 'diana.herrera@estudiantec.cr', '2002-01-11', '2022-05-30', '456-78-9012', 'CR05089012345678901'),
  (1, 8, 1, '5 5059 3696','Diego', 'Alvarez', '+506 86123456', 'diego.alvarez@estudiantec.cr', '2000-07-08', '2023-01-12', '789-01-2345', 'CR05090123456789012'),
  (2, 14, 1, '9 0907 6925','David', 'Torres', '+506 87111234', 'david.torres@estudiantec.cr', '2001-12-02', '2022-06-25', '345-67-8901', 'CR05012345678901234'),
  (1, 5, 1, '7 8237 2580','Gabriela', 'Sanchez', '+506 85556677', 'gabriela.sanchez@estudiantec.cr', '2000-10-10', '2022-08-15', '678-90-1234', 'CR05023456789012345'),
  (1, 4, 1, '8 3791 0336', 'Mateo', 'Rodriguez', '+506 89900011', 'mateo.rodriguez@estudiantec.cr', '2002-03-07', '2023-04-01', '901-23-4567', 'CR05034567890123456'),
  (2, 1, 1, '3 8809 0392','Valentina', 'Morales', '+506 88996633', 'valentina.morales@estudiantec.cr', '2001-07-14', '2021-09-19', '234-56-7890', 'CR05045678901234567'),
  (1, 10, 1,  '2 7281 4813', 'Eduardo', 'Gomez', '+506 86723213', 'eduardo.gomez@estudiantec.cr', '2003-02-01', '2023-03-02', '567-89-0123', 'CR05056789012345678'),
  (2, 7, 1, '4 3398 3287', 'Isabella', 'Martinez', '+506 84445566', 'isabella.martinez@estudiantec.cr', '2000-05-23', '2022-11-12', '890-12-3456', 'CR05067890123456789'),
  (1, 9, 1,  '6 5421 1739', 'Manuel', 'Castro', '+506 89990011', 'manuel.castro@estudiantec.cr', '2001-04-10', '2023-02-05', '123-45-6789', 'CR05078901234567890'),
  (1, 2, 1, '9 3214 6744', 'Sofia', 'Chaves', '+506 88887777', 'sofia.chaves@estudiantec.cr', '2002-09-19', '2022-12-07', '456-78-9012', 'CR05089012345678901'),
  (2, 5, 1, '1 3084 2564', 'Andres', 'Vargas', '+506 89910011', 'andres.vargas@estudiantec.cr', '2000-11-28', '2021-08-08', '789-01-2345', 'CR05090123456789012'),
  (1, 1, 1, '8 8344 1816', 'Carolina', 'Fernandez', '+506 86663322', 'carolina.fernandez@estudiantec.cr', '2003-01-22', '2023-05-28', '012-34-5678', 'CR05001234567890123'),
  (2, 4, 1, '8 8467 3698','Sebastian', 'Jimenez', '+506 84443322', 'sebastian.jimenez@estudiantec.cr', '2001-02-27', '2022-07-09', '345-67-8901', 'CR05012345678901234')
;

INSERT INTO income_tax (
    period_id,
    effective_date,
    expiration_date,
    exemption_percentage,
    lower_bound,
    upper_bound,
    is_max
)
VALUES
    (3,'2022-01-01', '2023-12-31', 0, 941000, NULL, 0),
    (3,'2022-01-01', '2023-12-31', 10, 941000, 1381000, 0),
    (3,'2022-01-01', '2023-12-31', 15, 1381000, 2423000, 0),
    (3,'2022-01-01', '2023-12-31', 20, 2423000, 4845000, 0),
    (3,'2022-01-01', '2023-12-31', 25, 4845000, NULL, 1)
;
