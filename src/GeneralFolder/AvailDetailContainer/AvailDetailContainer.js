// AvailDetailContainer will fetch AvailContext info and will render AvailDetail depending on AvailInfo

import {useAvail} from '../../context/AvailContext'
import './AvailDetailContainer.css'
import AvailDetail from '../AvailDetail/AvailDetail';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function AvailDetailContainer() {
    const [displayMain, setDisplayMain] = useState(false)
    const [displaySec, setDisplaySec] = useState(false)
    
    const {availInfo} = useAvail()
    
    const where = useLocation().pathname

    useEffect(()=>{
        if(where === '/'){  setDisplayMain(true) }
    },[availInfo, where])
    
    return (  
        availInfo && 
        <section className={`AvailDetailContainer`}>
            <div className='avail-sectionTitle mainBtn pointerClass' onClick={ () => {
                setDisplayMain( () => !displayMain )
                setDisplaySec( () => false )
                } }>    
                <p>Disponibilidad</p>
                <i className={displayMain ? 'fas fa-angle-up' :'fas fa-angle-down' } />
            </div>
            <main className={`mainAvailContainer ${displayMain ? 'show' : 'no-show'}`}>
                {availInfo.main.map(data => <AvailDetail key={data.cabinID} detail={data}/>)}
            </main>

            <div className='avail-sectionTitle secBtn pointerClass' onClick={ () => setDisplaySec( () => !displaySec ) }>
                <p>Sugerencias</p>
                <i className={displaySec ? 'fas fa-angle-up' : 'fas fa-angle-down'} />
            </div>

            <article className={`suggestedAvailContainer ${displaySec ? 'show' : 'no-show'}`}>
                {availInfo.suggested.map(data => <AvailDetail key={data.cabinID} detail={data}/>)}
            </article>
        </section>


    );
}



export default AvailDetailContainer;