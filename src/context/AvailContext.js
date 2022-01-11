import {createContext, useContext, useState} from 'react'
import { APIDOMAIN } from '../helpers/helpers';


const AvailContext = createContext();

export const useAvail = () => useContext(AvailContext);

const today = new Date()

const dateToUse1 = today.getFullYear() + '-' + (today.getMonth()<=8 ? `0${today.getMonth()+1}`:(today.getMonth()+1)) +'-' + (today.getDate() <=9 ? `0${today.getDate()}` : today.getDate())
const dateToUse2 = today.getFullYear() + '-' + (today.getMonth()<=8 ? `0${today.getMonth()+1}`:(today.getMonth()+1)) +'-' + (today.getDate() <=8 ? `0${today.getDate()+1}` : today.getDate()+1)

export const AvailProvider = ( {children} ) => {
    const [availInfo, setAvailInfo] = useState(null)

    const [dateToBook, setDateToBook] = useState([dateToUse1,dateToUse2])
    
    const [formErrors, setFormErrors] = useState({
        startDate: {status: false, msg: ''},
        endDate: {status: false, msg: ''},
        adults: {status: false, msg: ''},
        kids: {status: false, msg: ''},
        pets: {status: false, msg: ''}
    })

    const cleanFormErrors = () => setFormErrors({
        startDate: {status: false, msg: ''},
        endDate: {status: false, msg: ''},
        adults: {status: false, msg: ''},
        kids: {status: false, msg: ''},
        pets: {status: false, msg: ''}
    })

    const [query, setQuery] = useState({
        cabinID: null,
        startDate: dateToUse1,
        endDate: dateToUse2,
        status: null,
        adults: 1,
        kids:0,
        pets:0
      })

    
    const cleanQuery = () => setQuery({
        startDate: dateToUse1,
        endDate: dateToUse2,
        adults: 0,
        kids:0,
        pets:0
      })

    const cleanAvailInfo = () => setAvailInfo(null)

    const pickAvail = (dateIn, dateOut, status,cabinID)=>{
        setDateToBook([dateIn,dateOut])
        setQuery({...query, cabinID:cabinID, status:status ,startDate:dateIn, endDate:dateOut})
        // console.log('newDates to Book ->', dateToBook);
    }
    
    const logInfo = ()=>{
        console.log('query ->', query);
        console.log('availInfo ->', availInfo);
        console.log('Date to Book->', dateToBook);
    }

    // updates query with user info and fetches avail data from DB and sets AvailInfo state for the components to use
    const checkAvail = (userSearch = query) =>{
        setQuery({...userSearch, status:null})

        fetch(`${APIDOMAIN}/avail/form?startDate=${userSearch.startDate}&endDate=${userSearch.endDate}&adults=${userSearch.adults}&kids=${userSearch.kids}&pets=${userSearch.pets}`)
                .then(response => response.json())
                .then(dbInfo => {
                    if(dbInfo.meta.status === 'error'){
                        cleanFormErrors()
                        setFormErrors( (errors) => ({...errors,...dbInfo.errors}))
                        cleanAvailInfo()
                        

                    }else{
                        cleanFormErrors()
                        setAvailInfo(dbInfo.data)
                    
                    }
                })
                .catch(error => console.log(error))    
    }



    return(

        <AvailContext.Provider value={ {
                query, cleanQuery,setQuery,
                formErrors,
                availInfo, checkAvail,
                dateToBook, pickAvail,  cleanAvailInfo,
                logInfo} }>
            {children}
        </AvailContext.Provider>
    )

} 
