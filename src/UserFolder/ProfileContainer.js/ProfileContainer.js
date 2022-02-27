import { useEffect, useState } from 'react';
import { APIDOMAIN } from '../../helpers/helpers';
import { useParams } from 'react-router-dom';
import { isAfter } from '../../helpers/dateHelper';
import BookingInfoContainer from '../BookingInfo/BookingInfoContainer';
import ProfileFiltersContainer from './ProfileFilters/ProfileFiltersContainer';
import DirectionsContainer from '../DirectionsFolder/DirectionsContainer';
import BookingFeedbackContainer from '../FeedbackFolder/BookingFeedbackContainer/BookingFeedbackContainer';
import ProductContainer from '../../ProductsFolder/ProductContainer/ProductContainer';
import Extras from '../Extras/Extras';
import './ProfileContainer.css'
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';


function ProfileContainer() {
    const history = useHistory()
    const {user} = useAuth()
    const {code} = useParams()
    
    const [bookedCabin, setBookedCabin] = useState(null)
    
    
    const [displayAll, setDisplayAll] = useState(false)

    
    const [filters, setFilters] = useState([
        { status: true, name: 'info', description: 'Detalle' }, 
        { status: false, name: 'cabin', description: 'Cabaña' },
        { status: false, name: 'feedback', description: 'Valorar' }, 
        { status: false, name: 'directions', description: 'Cómo llego?'},
        { status: false, name: 'extras', description: 'San Rafael'}
    ])

    const handleFilterChange = (newfilter) => {
        
        setFilters((oldFilters) => {
            return oldFilters.map(filter => {
                return filter.name === newfilter.name ? newfilter : {...filter, status:false}
            })
        
        })
        
       
    }
    
    useEffect( ()=> {
        
        setFilters([
            { status: true, name: 'info', description: 'Detalle' }, 
            { status: false, name: 'cabin', description: 'Cabaña' },
            { status: false, name: 'feedback', description: 'Valorar' }, 
            { status: false, name: 'directions', description: 'Cómo llego?'},
            { status: false, name: 'extras', description: 'San Rafael'}
        ])

        const cabin = user.bookings.filter(booking => booking.code === code)
        
        const isLastDateFuture = isAfter(undefined,cabin[0].endDate)
        
        setDisplayAll(isLastDateFuture)

        
        fetch(`${APIDOMAIN}/products/${cabin[0].cabinId}`)
            .then(response => {
                if(response.ok){
                    return response.json() 
                }else{
                    throw new Error (response.status)
                }
            })
            .then(dbInfo => {
                // console.log(dbInfo);
                setBookedCabin(dbInfo.data[0])
            })
            .catch(error => {
                history.push('/404')
            })        
    },[code,user.bookings])        

        

    return (
        <main className='ProfileContainer'>
            
            <ProfileFiltersContainer isInCabin={filters[1].status} filters={displayAll ? filters : filters.slice(0,3)} pickFilter={handleFilterChange}/>

            { filters[0].status && <BookingInfoContainer /> }
            { filters[1].status && <ProductContainer cabin={bookedCabin} /> }
            { filters[2].status && <BookingFeedbackContainer /> }
            { filters[3].status && <DirectionsContainer /> }
            { filters[4].status && <Extras /> }
            
        </main>


    );
}



export default ProfileContainer;