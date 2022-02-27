
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