
import {APIDOMAIN} from '../../helpers/helpers'    
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinning from '../../loaders/Spinning'
import BookingInfo from './BookingInfo';
import './BookingInfoContainer.css'


function BookingInfoContainer() {
    const {code} = useParams()
    const [loading, setLoading] = useState(true)
    const [booking, setBooking] = useState(null)


    useEffect( ()=> {

   
        fetch(`${APIDOMAIN}/bookings/code/${code}`)
            .then(response => response.json())
            .then(dbInfo => {
                // console.log(dbInfo);
                
                if(dbInfo.meta.status === 'error'){
                
                    // console.log(dbInfo);                 

                }else{
                    setBooking(dbInfo.data[0])
                    setLoading(false)
                }

            })
            .catch(error => console.log(error))        
        
    }
        ,[code])
    
    return (
        <main className='BookingInfoContainer'>
            { loading && <Spinning /> } 
            { !loading && <BookingInfo booking={booking}/> }
                
        </main>


    );
}



export default BookingInfoContainer;