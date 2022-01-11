// CarrrouselContainer will fetch images from DataBase and render Carrousel

import { useEffect, useState } from 'react';
import {APIDOMAIN} from '../../../helpers/helpers'
import Spinning from '../../../loaders/Spinning';
import Carrousel from '../Carrousel/Carrousel';
import './CarrouselContainer.css'

function CarrouselContainer() {
    const [carrousel, setCarrousel] = useState(null)    
    const [loading, setLoading] = useState(true)
    
    useEffect( ()=> {
        
        
        fetch(`${APIDOMAIN}/images/categories/1`)
            .then(response => response.json())
            .then(dbInfo => {
                setCarrousel(dbInfo.data.info)
                setLoading(false)
            })
            .catch(error => console.log(error))        


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