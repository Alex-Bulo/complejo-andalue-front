// AvailFormContainer will fetch info from DB (depending where it is), will create events to pass as props and render AvailForm

import {useAvail} from '../../../context/AvailContext'
import './AvailFormContainer.css'
import AvailForm from '../AvailForm/AvailForm';

function AvailFormContainer() {
    const {query, checkAvail} = useAvail()
     
    const handleSubmit= (formFields)=>{

        checkAvail(formFields)
    }

    return (  
        
        <article className={`AvailFormContainer`}>
            <AvailForm handleSubmit={handleSubmit} query={query}/>
        </article>

    );
}



export default AvailFormContainer;