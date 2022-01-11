// FiltersContainer will receive info from parent (Feature or Product) and prepare to render Filters

import { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './DropdownContainer.css'


function DropdownContainer({filtersList, showing, productPicker}) {
    const [list, setList] = useState(null)
    

    useEffect(()=>{
        const newList = filtersList.filter( e => e.name !== showing)
        setList(newList)
    }, [showing, filtersList])


    return (  
        
        list && <div className='DropdownContainer'>            
            <Dropdown productPicker={productPicker} showing={showing} list={list}/>
        </div>
    
    );
}



export default DropdownContainer;