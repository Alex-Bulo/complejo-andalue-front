// FeatureSectionContainer will fetch features from database and render FeatureDescriptionList
import { useEffect, useState } from 'react';
import './FeatureSectionContainer.css'
import {APIDOMAIN} from '../../../helpers/helpers'
import FeatureDescriptionList from '../FeatureDescriptionList/FeatureDescriptionList';
import Spinning from '../../../loaders/Spinning';
import { useHistory } from 'react-router-dom';

function FeatureSectionContainer() {
    const history = useHistory()
    
    const [features, setFeatures] = useState(null)    
    const [loading, setLoading] = useState(true)
    
    useEffect( ()=> {
   
        fetch(`${APIDOMAIN}/features/categories/2`)
            .then(response => {
                if(response.ok){
                    return response.json() 
                }else{
                    throw new Error (response.status)
                }
            })
            .then(dbInfo => {
                // console.log(dbInfo.meta);
                
                const info = dbInfo.data.map(feature => {
                    return(
                        {name: feature.title, description: feature.description, icon: feature.icon}
                    )
                })
                setFeatures(info)
                setLoading(false)

            })
            .catch(error => {
                history.push('/404')
            })     
        
    }
        ,[])
    
    
    return (  
        loading ? <Spinning/> : 
            <section className='FeatureSectionContainer'>
                <header className='title'>Te ofrecemos...</header>
                {features && <FeatureDescriptionList features={features} />}
            </section>


    );
}



export default FeatureSectionContainer;