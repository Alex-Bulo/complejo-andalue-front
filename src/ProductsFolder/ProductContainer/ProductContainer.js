// ProductContainer will just show the info of the selected product. Will render PicSection, AvailContainer and DescriptionList (may also have popUp)

import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Description from './Description/Description';
import './ProductContainer.css'


function ProductContainer({cabin}) {
    // console.log('Cabin->', cabin);
    const [startImage, setStartImage] = useState(0)

    const pickerHandler = (chosenImages)=>{
        
        let foundImage = 0
        
        chosenImages.forEach(chosenImage => {
            if(cabin.images.indexOf(chosenImage) !== -1){
                foundImage = cabin.images.indexOf(chosenImage)
            }
        })
        
        setStartImage(foundImage)

    }
    
    return (  
        
        <section className='ProductContainer'>
            <Carousel selectedItem={startImage} autoPlay={false} showIndicators={false} showStatus={false}>
                {cabin.images.map( (image,i) => {

                    return(

                        <div className='cabin-imageContainer' key={i}  >
                            <img className='cabin-image' src={image} alt={`Foto de la cabaña ${cabin.name} de Complejo Andalue`} />
                            {/* <p className="legend">{startImage}</p> */}
                        </div>

                    )
                })}
            </Carousel>

            <Description cabin={cabin} pickImage={pickerHandler}/>

        </section>
    

    );
}



export default ProductContainer;