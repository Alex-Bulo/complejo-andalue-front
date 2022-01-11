// Description will render the info icon/pic and info (may render a popUp)


import { useState } from 'react';
import './Description.css'


function Description({cabin, pickImage}) {
    // console.log('Description Cabin ->', cabin);
    const [display, setDisplay] = useState(false)
    
     const hoverInHandler = ()=>{
        setDisplay( true)
     }
     
     const hoverOutHandler = ()=>{
        setDisplay(false)
     }

    return (  
        
        <main className='Description'>
            <header className='cabin-header'>
                    <h4 className='cabin-name'>{cabin.name}</h4>
                    
                    <div className='cabin-capacityContainer' onMouseEnter={hoverInHandler} onMouseLeave={hoverOutHandler}>
                        {
                            [...Array(cabin.adults)].map((user,i) => <i key={i} className='fas fa-user iconCapacity-adults'/>)
                        }
                        {
                            [...Array(cabin.kids)].map((user,i) => <i key={i} className='fas fa-child iconCapacity-kids'/>)
                        }
                        <div className={`hoverBox cabin-capacityInfoContainer ${display? 'show' : 'no-show'}`}>
                            <p className='cabin-capacityInfo capacity-adults'> <span>Adultos: </span> {cabin.adults}</p>
                            <p className='cabin-capacityInfo capacity-kids'><span>Niños: </span>{cabin.kids}</p>
                        </div>

                    </div>
                    <div className='cabin-featIconContainer'>
                        {
                            cabin.features.map((feature,i) => <i key={i} className={`${feature.icon} cabin-featIcon`}/>)
                        }
                    </div>
            </header>
            <section className='cabin-detailContainer'>
                
                <article className='cabin-description'>{cabin.description}</article>
                
                <article className='cabin-features'>
                    
                    {cabin.features.map((feature,i) => {
                        return(
                            <div key={i} className={`featureContainer ${feature.images.length === 0 ? '' : 'pointerClass'}`} onClick={()=> feature.images.length === 0 ? '' : pickImage(feature.images) }>
                                <i className={`${feature.icon} cabin-featureIcon`}/>
                                <div className='cabin-featureInfo'>
                                    <h5 className='cabin-featureTitle'>{feature.name}</h5>
                                    <p className='cabin-featureDescription'>{feature.description}</p>
                                </div>
                            </div>
                        )
                    })}

                </article>
            </section>
        </main>  
    

    );
}



export default Description;