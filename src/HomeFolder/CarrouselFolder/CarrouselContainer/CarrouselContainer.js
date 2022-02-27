// CarrrouselContainer will fetch images from DataBase and render Carrousel

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {APIDOMAIN} from '../../../helpers/helpers'
import Spinning from '../../../loaders/Spinning';
import Carrousel from '../Carrousel/Carrousel';
import './CarrouselContainer.css'

function CarrouselContainer() {
    const history = useHistory()
    
    const [carrousel, setCarrousel] = useState(null)    
    const [loading, setLoading] = useState(true)
    
    useEffect( ()=> {
        
        
        fetch(`${APIDOMAIN}/images/categories/1`)
        .then(response => {
            if(response.ok){
                return response.json() 
            }else{
                throw new Error (response.status)
            }
        })
            .then(dbInfo => {
                setCarrousel(dbInfo.data.info)
                setLoading(false)
            })
            .catch(error => {
                history.push('/404')
            })       


    } ,[])
    
    return ( 
        loading ? 
                <Spinning/> : (

                <section className='CarrouselContainer'>
                    {carrousel && <Carrousel homeImages={carrousel}/>}
                </section>      
                ) 


    );
}



export default CarrouselContainer;