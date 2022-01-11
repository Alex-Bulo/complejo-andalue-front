// test view
import { useEffect, useState } from 'react';
import './Test.css'
import {APIDOMAIN} from '../helpers/helpers'

function Test() {
    const [images, setImages] = useState(null)    
    
    useEffect( ()=> {
        
        fetch(`${APIDOMAIN}/images`)
            .then(response => response.json())
            .then(dbInfo => {
                setImages(dbInfo.data)
            })
            .catch(error => console.log(error))        
        
    }
        ,[])


    
    
    return (  
        
        <main className='TEST'>
            <table className='TABLA'>
                <tr className='TITULOS'>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Categoría Asociadas</th>
                    <th>Cabañas Asociadas</th>
                    <th>Imágen Principal de Cabaña</th>
                    <th>Features Asociados</th>
                </tr>

                {images && images.map(image => {
                    return(
                        <tr className='DATA'>
                            <td className='IMAGENID'>{image.imageID}</td>
                            <td className='IMAGEN'><a href={image.name} target='_blank' rel="noopener noreferrer"><img src={image.name} alt='imagen' className='IMAGEN' /></a></td>
                            <td className='CATEGORIAS'>{image.categories.map(category => {
                                return (
                                    <>
                                    {category + ';'}
                                    <br/>
                                    </>
                                )
                            })}
                            </td>
                            <td className='CABANAS'>{image.cabins.map(cabin => {
                                return(
                                    <>
                                    {cabin.id + ': ' + cabin.name+';'}
                                    <br/>
                                    </>
                                )
                            })}
                            </td>
                            <td className='MAINIMAGE'>{image.mainImage.map(cabin=>cabin.id + ': ' + cabin.name+';  ')}</td>
                            <td className='FEATURES'>
                                {image.features.map(feature=>{
                                    return(
                                        <>
                                        {feature.title + ': ' + feature.description + '; '}
                                        <br/>
                                        </>
                                        )
                                })}
                                
                            </td>
                        </tr>


                    )
                })}




                </table>



        </main>


    );
}



export default Test;