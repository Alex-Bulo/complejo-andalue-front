// Carrousel will render the carrousel

import { Carousel } from 'react-responsive-carousel';
import './Carrousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carrousel({homeImages}) {
     
    
    return (  

        homeImages && 
            <Carousel showThumbs={false} autoPlay={true} showStatus={false}>
                {homeImages.map( image => {

                    return(

                        <div className='carrousel-imageContainer' key={image.imageID}  >
                            <img className='carrousel-image' src={image.name} alt={`Foto de Portada del Complejo Andalue - ${image.cabins.name}`} />
                            {/* <p className="legend">HOLA</p> */}
                        </div>

                    )
                })}
            </Carousel>


        // <article className='Carrousel'>



        //     {homeImages.map(image => <img src={image.name} key={image.imageID} alt={`Foto de Portada del Complejo Andalue - ${image.cabins.name}`}/>)}
        // </article>

    );
}



export default Carrousel;