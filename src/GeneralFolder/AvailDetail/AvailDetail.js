
import moment from 'moment'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAvail } from '../../context/AvailContext';
import BookingContainer from '../BookingContainer/BookingContainer';
import './AvailDetail.css'

function AvailDetail({detail}) {
    const [loading, setLoading] = useState( true )
    const {pickAvail} = useAvail()

    return (  
        
        <article className={`AvailDetail ${detail.status? '' : 'notAvail' }`}>

            <div className='cabinContainer'>
                <Link to={ `/casas/${detail.cabinID}`} className='availCabin' onClick={ () => pickAvail(detail.startDate, detail.endDate, detail.status, detail.cabinID)}> <img src={detail.cabinImage} alt={`Foto principal de cabaña ${detail.cabinID}`} className='snippet'/></Link>
                <span className='cabintitle'>Cabaña</span>            
                {detail.status ?  <Link to={ `/casas/${detail.cabinID}/avail?status=${detail.status}`} className='availCabin' id='cabinName'>{detail.cabin}</Link> : <p className='availCabin' id='cabinName'>{detail.cabin}</p>}
            </div>
            
            <div className='dateContainer'>
                <p className='availDate avail-startDate'><span>Desde</span>{moment(detail.startDate).format('DD/MM/YY')}</p>            
                <p className='availDate avail-endDate'><span>Hasta</span>{moment(detail.endDate).format('DD/MM/YY')}</p>    
                <p className={`availDate notAvail-msg ${!detail.status || detail.msg ? 'show':'no-show'}`}>{!detail.status ? 'No Disponible' : detail.msg}</p>  
                        
            </div>
            

            <div className='availCTAContainer'>
                {!loading && <Link to={ `/casas/${detail.cabinID}`} className='CTAsecondary-active moreInfoBtn' onClick={ () => pickAvail(detail.startDate, detail.endDate, detail.status, detail.cabinID)}> Ver más</Link>}
                
                <BookingContainer 
                        loader={{loading: loading, setLoading: setLoading}} 
                        avail={{bookIn: detail.startDate, bookOut: detail.endDate, status: detail.status, cabinID: detail.cabinID}}
                />
            </div>

        </article>

    );
}



export default AvailDetail;