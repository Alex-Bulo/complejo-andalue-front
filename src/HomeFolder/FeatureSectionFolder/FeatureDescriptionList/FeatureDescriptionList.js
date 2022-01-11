// FeatureDescriptionList will map the props and render the Feature (icon+name)

import FeatureDescription from '../FeatureDescription/FeatureDescription';
import './FeatureDescriptionList.css'

function FeatureDescriptionList({features}) {
     
    
    return (  
        
        <div className='FeatureDescriptionList'>
            
            { features && features.map( (feature,i) => <FeatureDescription key={`${feature.name}-${i}`} feature={feature}/>) }

        </div>

    );
}



export default FeatureDescriptionList;