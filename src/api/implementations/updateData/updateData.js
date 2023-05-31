import UpdateDataApi from "../../routes/UpdateData.api"

const updateData = async({ setLoading, getDate }) => {
  await UpdateDataApi.put()
    .then(
      response => {
        setLoading(false)
        getDate()
        console.log('end update')
      }
    )
    .catch(
      error => {
        setLoading(false)
        console.error(error)
        console.log('end update')
      }
    )
}

export default updateData
