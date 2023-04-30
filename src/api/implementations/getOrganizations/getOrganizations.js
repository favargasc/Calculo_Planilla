import GetOrganizationsApi from "../../routes/GetOrganizations.api"

const transformData = (data) => {
  const array = []
  data.map((departament) => {
    array.push(departament)
  })
  return array
}

const getOrganizations = async ({ setOrganizations }) => {
  await GetOrganizationsApi.get()
    .then(
      response => {
        setOrganizations(transformData(response))
      }
    )
    .catch(
      error => {
        console.error(error)
      }
    )
}

export default getOrganizations
