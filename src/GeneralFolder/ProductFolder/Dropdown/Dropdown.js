// Filter will render filters with function/event from parent

import { useEffect, useRef, useState } from 'react';
import { useAvail } from '../../../context/AvailContext';
import './Dropdown.css'


function Dropdown({showing, list, productPicker}) {
    const [dropView, setDropView] = useState(false)

    const ref = useRef(null)

    const toggleDrop = ()=>{
        setDropView( () => !dropView )
    }

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            // console.log(dropView);
            if (dropView && ref.current && !ref.current.contains(event.target)) {
                setDropView(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, dropView]);

    const {setQuery} = useAvail()
    return (  
         <>
        
        <div className='dropdown-active' onClick={toggleDrop}>
            <p>{showing}</p>
            <i className={`fas fa-angle-down dropdownIcon ${!dropView ? 'show' : 'no-show'}`}/>
            <i className={`fas fa-angle-up dropdownIcon ${dropView ? 'show' : 'no-show'}`}/>
        </div>
        <div ref={ref} className={`Dropdown ${dropView ? 'show' : 'no-show'}`}>
            {list.map(e => <p key={e.id}
                                onClick={()=>{ 
                                    productPicker(e.id)
                                    setQuery((query)=>{return{...query, status:null}})
                                    toggleDrop()}} 
                                className='dropdown-content'>
    
                                        <span>{e.name}</span>
    
                            </p>
            )}
        </div>

        </>           

            
    
    );
}



export default Dropdown;