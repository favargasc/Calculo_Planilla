import GetEmployeerDeductionsApi from '../../routes/GetEmployeerDeductions.api'

const transformData = (data) => {
  const array = []
  data.map((deduction) => {
    array.push(
      deduction.Concept + ': ' + deduction.Percentage + '%'
    )
  })
  return array
}

const getEmployeerDeductions = async ({ setData }) => {
    await GetEmployeerDeductionsApi.get()
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
  
  export default getEmployeerDeductions
  