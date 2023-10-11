import { isValid } from 'date-fns'

const isDate = dateValue => {
  if (!dateValue) return false

  const date = isValid(new Date(dateValue)) // retorna true o false

  return date
}

export default isDate
