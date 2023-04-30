import GetEmployeesDataApi from '../../routes/GetEmployeesData.api'

const transformData = (data) => {
  const array = []
  data.map((employee) => {
    array.push(employee)
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
