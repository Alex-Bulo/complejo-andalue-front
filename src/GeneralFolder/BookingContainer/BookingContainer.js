
import { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import NotBooking from '../Booking/NotBooking';
import {APIDOMAIN} from '../../helpers/helpers'
import './BookingContainer.css'
import { useAvail } from '../../context/AvailContext';


function BookingContainer({avail, prod, loader}) {

    // const [loading, setLoading] = useState( true )
    const [newCabin, setNewCabin] = useState(null)
    
    const [dates, setDates] = useState( [] )

    const {query} = useAvail()

    const [newStatus, setNewStatus] = useState( null )
    

    useEffect(()=>{

        if(avail){
            fetch(`${APIDOMAIN}/products/${avail.cabinID}`)
                .then(response => response.json())
                .then(dbInfo => {
                    setNewCabin(dbInfo.data[0])
                    setDates([avail.bookIn,avail.bookOut])
                    setNewStatus(avail.status)
                    loader.setLoading(false)
                })
                .catch(error => console.log(error))    
        }else{
            setNewCabin(prod.cabin)
            setDates([query.startDate,query.endDate])
            setNewStatus(prod.status)
            loader.setLoading(false)
        }



    },[avail, prod, loader, query])
    // 'loader', 'prod.cabin', 'prod.status', 'query.endDate', and 'query.startDate'

        return(
            <>
                {(newStatus && newCabin && !loader.loading) && 
                    <Booking cabin={newCabin} bookDates={dates}  />
                }

                {(!newStatus && !loader.loading) && <NotBooking bookDates={dates} status={newStatus} />}
            </>
        )
        

    
}



export default BookingContainer;