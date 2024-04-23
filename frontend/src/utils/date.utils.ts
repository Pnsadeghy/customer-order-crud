import dayjs from 'dayjs'

export const dateFormat = (date: string, format: string = 'DD/MM/YYYY HH:mm') => {
  return dayjs(date).format(format)
}
