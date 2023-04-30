import GetEmployeeDeductionApi from '../../routes/GetEmployeeDeductions.api'

const transformData = (data) => {
  const array = []
  data.map((deduction) => {
    array.push(
      deduction.Concept + ': ' + deduction.Percentage + '%'
    )
  })
  return array
}

const getEmployeeDeduction = async ({ setData }) => {
  await GetEmployeeDeductionApi.get()
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

export default getEmployeeDeduction
