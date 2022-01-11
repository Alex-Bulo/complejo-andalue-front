// FeatureDescription will render the Feature (icon+name)

import { useState } from 'react';
import './FeatureDescription.css'

function FeatureDescription({feature}) {
     const [display, setDisplay] = useState(false)
    
     const hoverInHandler = ()=>{
        setDisplay( true)
     }
     
     const hoverOutHandler = ()=>{
        setDisplay(false)
     }

    return (       
    
        <article className='FeatureDescription' key={`${feature.name}`} onMouseEnter={hoverInHandler} onMouseLeave={hoverOutHandler}>

            <i className={`feature-icon ${feature.icon}`}/>
            <h4 className='feature-name'>{feature.name}</h4>
            <p className={`hoverBox feature-msg ${display? 'show' : 'no-show'}`}>{feature.description}</p>
                    
        </article>
            

    );
}



export default FeatureDescription;