// ProductsContainer will fetch info on all products and sends it to Filters, ProductContainer (to show just one) and Galery (to show all).
// Will send functions to update own states

import './ProductsContainer.css'
import {APIDOMAIN} from '../../helpers/helpers'
import { useEffect, useState } from 'react'
import { useAvail } from '../../context/AvailContext'
import ProductContainer from '../ProductContainer/ProductContainer'
import DropdownContainer from '../../GeneralFolder/ProductFolder/DropdownContainer/DropdownContainer'
import BookingContainer from '../../GeneralFolder/BookingContainer/BookingContainer'    
import { useParams } from 'react-router-dom'
import Spinning from '../../loaders/Spinning'

function ProductsContainer() {

    const {id} = useParams()
    
    const [products, setProducts] = useState(null)    
    const [productsNames, setProductsNames] = useState(null)    
    const [selected, setSelected] = useState(null)

    const {query} = useAvail()

    const [loading, setLoading] = useState(true)
    
    useEffect( ()=> {
        fetch(`${APIDOMAIN}/products`)
            .then(response => response.json())
            .then(dbInfo => {
                // console.log(dbInfo.meta);
                setProducts(dbInfo.data)
            })
            .catch(error => console.log(error))        
    },[])
    
    useEffect(()=>{
        if(products){
            const cabinNames = []
            let toShow = products[0]
    
            products.forEach(product => { 
                
                cabinNames.push({id: product.id, name:product.name})
    
                if(product.id === Number(id)){
                    toShow = product
                }
            })
    
            setSelected(toShow)
                
            setProductsNames(cabinNames)
    
            setLoading(false)
        }

    },[products, id])


    const pickProduct = (newId) => {

        const newCabin = products.filter( product => product.id === newId)

        setSelected(newCabin[0])
    }


    return (  
        loading ? <Spinning/> :
        <main className='ProductsContainer'>
            
            <h2 className='title productsContainer-title'>Nuestras cabañas</h2>
            <DropdownContainer filtersList={productsNames} showing={selected.name} productPicker={pickProduct}/>
            <ProductContainer cabin={selected}/>

            <BookingContainer 
                loader={{loading:loading, setLoading:setLoading}} 
                prod={{bookIn: query.startDate, bookOut: query.endDate, cabin: selected, status: query.cabinID === selected.id ? query.status : null}}
            />


        </main>
    

    );
}



export default ProductsContainer;