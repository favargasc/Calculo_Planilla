import GetEmployeesDataApi from '../../routes/GetEmployeesData.api'

const getCurrencyCRC = (currency) => {
  return currency.toLocaleString('es-CR', {
    style: 'currency',
    currency: 'CRC',
  })
}

const capitalizeText = (text) => {
  let words = text.toLowerCase().split(' ')
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }
  return words.join(' ')
}

const transformData = (data) => {
  const array = []
  data.map((employee) => {
    employee.Nombre = capitalizeText(employee.Nombre.replace(/\\/g, 'ñ'))
    employee.Apellido1 = capitalizeText(employee.Apellido1.replace(/\\/g, 'ñ'))
    employee.Apellido2 = capitalizeText(employee.Apellido2.replace(/\\/g, 'ñ'))
    employee.Salario = getCurrencyCRC(employee.Salario) 
    employee.DeduccionPatronal = getCurrencyCRC(employee.DeduccionPatronal) 
    employee.DeduccionObrera = getCurrencyCRC(employee.DeduccionObrera) 
    employee.Renta = getCurrencyCRC(employee.Renta) 

    array.push({
      "Cedula": employee.Cedula,
      "Nombre": employee.Nombre,
      "Apellido1": employee.Apellido1,
      "Apellido2": employee.Apellido2,
      "Salario": employee.Salario,
      "FechaNacimiento": employee.FechaNacimiento,
      "Organizacion": employee.Organizacion,
      "Departamento": employee.Departamento,
      "DeduccionPatronal": employee.DeduccionPatronal,
      "DeduccionObrera": employee.DeduccionObrera,
      "Renta": employee.Renta
    })

  })
  return array
}

const getEmployeesData = async ({ numDto, numOrg, setData }) => {
  const params = numOrg + '/' + numDto
  await GetEmployeesDataApi.get(params)
    .then(
      response => {
        setData(transformData(response))
      }
    )
    .catch(
      error => {
        console.error(error)
      }
    )
}

export default getEmployeesData
