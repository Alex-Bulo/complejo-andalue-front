
import { useEffect, useState } from 'react';
import ProfileFilter from './ProfileFilter';
import './ProfileFiltersContainer.css'


function ProfileFiltersContainer({isInCabin, filters, pickFilter}) {
    const [filterDisplay, setFilterDisplay] = useState(false)
    const [cabinPage, setCabinPage] = useState(false)
    
    useEffect(()=>{

        if (isInCabin){
            setCabinPage(true)
        }else{
            setCabinPage(false)
        }
    },[isInCabin])

    return (
        <>
            <i id={cabinPage ? 'filter-menuCabin' : 'filter-menuNoCabin' } className={`fas fa-bars filter-menu ${filterDisplay ? 'no-show' : 'show'}`} onClick={() => setFilterDisplay(!filterDisplay)}/>
            <section id={cabinPage ? 'filters-backgroundCabin' : 'filters-backgroundNoCabin' } className={`filters-background ${filterDisplay ? 'show' : 'no-show'}`} onClick={() => setFilterDisplay(false)}>
                <div className='ProfileFiltersContainer' onClick={(e)=>e.stopPropagation()}>
                    { 
                        filters.map((filter,i) =>  <ProfileFilter key={i} filter={filter} pickFilter={pickFilter}/>) 
                    }
                </div>
                    
            </section>
        </>


    );
}



export default ProfileFiltersContainer;