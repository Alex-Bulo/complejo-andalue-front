import moment from 'moment'
import 'moment/locale/es-mx'
moment.updateLocale('es-mx')

export const getFullDate = (value) => {
    return moment(value).format('LL') 
}
export const isAfter = (from, to) =>{
    const startDate = moment(from)
    const endDate = moment(to)  
  
    return moment(endDate).isAfter(startDate)
}
  
export const getDaysFromToday = (date) =>{
    const today = moment()
    const bookingDate = moment(date)
    
    if (today.isSame(bookingDate,'day')){
        return 0
    }
    
    return bookingDate.diff(today,'days') + 1
}
  
export const getLastDate = (values) => {
    return values.reduce( (ac,value) => isAfter(ac,value) ? value : ac)
}