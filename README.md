# Especificaciones
## Database

Contiene todos los archivos SQL utilizados para montar la base de datos alojada en Rails (se realizaron algunas modificaciones a la base de datos creada a partir del diagrama del diseño) entre ellos:.

- ### tables
Contiene la definición de las tablas y las relaciones entre ellas.
- ### Inserts
Contiene datos de prueba y mockups para todas las tablas.  
- ### get_employees
Es una view que genera la lista de empleados y obtiene datos importantes de otras tablas.    
- ### calculate_income_tax
Es una función que se encarga del cálculo de las deducciones a partir de las tarifas.
- ### calculate_deductions
Es una función que se encarga del cálculo de las deducciones obreras y patronales.

## Server
Se ejecuta mediante el comando `npm run server`. Este establece un servidor de Go en el `localhost:3000` mediante un archivo ejecutable `server` construido a partir del archivo principal del servidor `server.go` ubicado en el directorio `server/`. No es necesario instalar Go para ejecutarlo, a menos que desee modificar el servidor, ya que necesitará generar el ejecutable mediante el comando `go build server.go`. Este servidor establece cuatro endpoints:
- ### /employees
Retorna una lista con todos los empleados almacenados en la base de datos.
- ### /employee_deductions/:salary
Retorna el valor de la deducción obrera a partir de un salario obrero enviado por parámetro. 
- ### /employer_deductions/:salary
Retorna el valor de la deducción patronal a partir de un salario obrero enviado por parámetro.
- ### /income_tax/:salary
Retorna el valor obtenido a partir de la aplicación de los tramos de renta y tarifas actuales a un salario obrero enviado por parámetro.

## Electron
Al ejecutar el comando  `npm run app`, la aplicación para desktop creada mediante la librería electron escuchará en `localhost:5173` un frontend React. El archivo `main.cjs` es el encargado de establecer esta conexión. Esta ya se encuentra conectada al frontend React establecido en el directorio `src/`. Debe considerar que debe estar activo React antes de ejecutar Electron. Una vez finalizada la construcción del frontend, deberá hacer un build de este mediante la librería Vite ya instalada y deberá cambiar el comando `window.loadURL("http://localhost:5173")` por `window.loadFile(<ruta al archivo build>)`. De esta manera, ya no debemos tener corriendo React para arrancar Electron. Una vez finalizado todo, crearemos un archivo ejecutable que se encargue de arrancar la aplicación junto al servidor.

## React
Al ejecutar el comando `npm run dev`. se ejecutará un servidor de React en `http://localhost:5173` que mostrará el frontend localizado en el directorio `src/`. Se pretende crear una ventana que muestre el total de las deducciones obreras, patronales y tarifas. Para ello, es necesario recorrer todos los empleados y calcular la sumatoria de los salarios de los empleados para cada una de las tres tipos de deducciones.

Algunos ejemplos de UI:
- https://dribbble.com/shots/15477306-Transactions-Old-Draft : la tabla con algunos valores importantes de los empleados y las tarjetas con los montos totales.
- https://dribbble.com/shots/20829759-Profile-Information-Popup : colores y temas evitando contrastes altos.
