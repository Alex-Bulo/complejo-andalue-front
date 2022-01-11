// Products will just render the correct Components for Product page: ProductsContainer

import AvailDetailContainer from '../GeneralFolder/AvailDetailContainer/AvailDetailContainer';
import AvailFormContainer from '../GeneralFolder/AvailFormFolder/AvailFormContainer/AvailFormContainer';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import './Products.css'


function Products() {
    

    return (  
        
        <div className='Products'>
            <AvailFormContainer />
            <AvailDetailContainer />

            <ProductsContainer />
            
        </div>
    

    );
}



export default Products;