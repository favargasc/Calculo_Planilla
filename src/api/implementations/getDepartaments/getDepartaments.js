import GetDepartmentsApi from "../../routes/GetDepartments.api"

const transformData = (data) => {
  const array = []
  data.map((departament) => {
    array.push(departament)
  })
  return array
}

const getDepartaments = async ({ setDepartaments }) => {
  await GetDepartmentsApi.get()
    .then(
      response => {
        console.log(response)
        setDepartaments(transformData(response))
      }
    )
    .catch(
      error => {
        console.error(error)
      }
    )
}

export default getDepartaments
