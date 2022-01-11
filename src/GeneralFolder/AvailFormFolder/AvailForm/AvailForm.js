// AvailForm willrender the inputs and button

import { useState } from 'react';
import { useAvail } from '../../../context/AvailContext';
import './AvailForm.css'


function AvailForm({handleSubmit, query}) {
    const {formErrors} = useAvail()
    const [formFields, setFormFields] = useState({...query});
    
    function handleChange(e) {
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }

    
    return (  
        
        <form onSubmit={(e)=> e.preventDefault()} className={`AvailForm`}>
            <label className='availLabel ingresoL'> Ingreso
                <input name='startDate' className='availInput ingresoI' type='date' value={formFields.startDate} onChange={handleChange}/>
                <span className={`formError error-startDate ${formErrors.startDate.status ? 'show' : 'no-show'}`}>{formErrors.startDate.msg}</span>
            </label>
            <label className='availLabel egresoL'> Egreso
                <input name='endDate' className='availInput egresoI' type='date' value={formFields.endDate} onChange={handleChange}/>
                <span className={`formError error-endDate ${formErrors.endDate.status ? 'show' : 'no-show'}`}>{formErrors.endDate.msg}</span>
            </label>
            <label className='availLabel adultsL'> Adultos
                <input name='adults' className='availInput adultsI' type='number' value={formFields.adults} onChange={handleChange}/>
                <i className='fas fa-user inputIcon'/>
                <span className={`formError error-adults ${formErrors.adults.status ? 'show' : 'no-show'}`}>{formErrors.adults.msg}</span>
            </label>
            <label className='availLabel kidsL'> Niños
                <input name='kids' className='availInput kidsI' type='number' value={formFields.kids} onChange={handleChange}/>
                <i className='fas fa-user inputIcon'/>
                <span className={`formError error-kids ${formErrors.kids.status ? 'show' : 'no-show'}`}>{formErrors.kids.msg}</span>
            </label>
            <label className='availLabel petsL'> Mascotas
            <input name='pets' className='availInput petsI' type='number' value={formFields.pets} onChange={handleChange}/>
                <i className='fas fa-paw inputIcon'/>
                <span className={`formError error-pets ${formErrors.pets.status ? 'show' : 'no-show'}`}>{formErrors.pets.msg}</span>
            </label>
            <input className='CTA CTA-active' type='submit' value='VER DISPONIBILIDAD' onClick={ () => handleSubmit(formFields)}/>
        </form>

    );
}



export default AvailForm;