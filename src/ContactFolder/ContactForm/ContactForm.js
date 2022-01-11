import { useState, useRef, useEffect } from 'react';
import { isEmail, isEmpty } from '../../helpers/formValidations';
import { APIDOMAIN } from '../../helpers/helpers';
import './ContactForm.css'


function ContactForm({setSending, setDelivered}) {
    const name = useRef(null)
    useEffect(()=>name.current.focus(),[])
    const [inputControl, setInputControl] = useState({
        name:'',
        mail: '',
        info: '',
    })
    const [formErrors, setFormErrors] = useState({
        name: {status: true, msg: ''},
        mail: {status: true, msg: ''},
        info: {status: true, msg: ''},
    })
    
    const changeHandler = (e) => {
        setInputControl((inputs)=>{ return {...inputs, [e.target.name]:e.target.value}})

        isEmpty(e.target.value) && setFormErrors((errors)=>{ return {...errors, [e.target.name]:{status:true, msg:`Completar ${e.target.name==='name' ? 'su nombre':'su consulta'}`}}})
        !isEmpty(e.target.value) && setFormErrors((errors)=>{ return {...errors, [e.target.name]:{status:false, msg:e.target.value}}})
    
        
        if(e.target.name === 'mail'){
            !isEmail(e.target.value) && setFormErrors((errors)=>{ return {...errors, mail:{status:true, msg:'Completar mail válido'}}})            
            isEmail(e.target.value) && setFormErrors((errors)=>{ return {...errors, mail:{status:false, msg:e.target.value}}})           
        }

    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        if(!formErrors.name.status && !formErrors.mail.status && !formErrors.info.status){
            
            setSending({status:true,channel:'mail'})
            
            fetch(`${APIDOMAIN}/contactUs`,{
                headers:{'Content-Type':'application/json'},
                method:'POST',
                body:JSON.stringify({
                    name: inputControl.name,
                    mail: inputControl.mail,
                    info: inputControl.info.replace(/\n/g, '<br>')
                })
            })
            .then(response => response.json())
            .then(dbInfo => {

                if(dbInfo.meta.status === 'error'){
                    
                    setFormErrors( dbInfo.errors)
                    setSending({status:false,channel:'mail'})

                }else{
                    // console.log(dbInfo)
                    setDelivered(true)
                    setInputControl({
                        name: '',
                        mail: '',
                        info: ''
                    })                
                }
                
            })

        }

    }

    return (  
        
        <form className='ContactForm' onSubmit={submitHandler}>
            <h4 className='title contactForm-title'>Escribinos tu consulta!</h4>
            <label name='fullname' className='contactForm-label labelName'>
                <p className='contactFormLabel-title'>Nombre</p>
                <input ref={name} value={inputControl.name} name='name' type='text' className='contactForm-input contactInput-name' onBlur={changeHandler} onChange={changeHandler}/>
                <span className={`formError  contactErrorName ${formErrors.name.status ? 'show':'no-show'}`}>{formErrors.name.msg}</span>
            </label>        

            <label className='contactForm-label labelEmail' name='mail'>
                <p className='contactFormLabel-title'>Mail</p>
                <input value={inputControl.mail}  type='email' name='mail' className='contactForm-input contactInput-mail' onBlur={changeHandler} onChange={changeHandler}/>
                <span className={`formError  contactErrorEmail ${formErrors.mail.status ? 'show':'no-show'}`}>{formErrors.mail.msg}</span>
            </label>

            <label className='contactForm-label labelInfo' >
                <p className='contactFormLabel-title'>Consulta</p>
                <textarea  value={inputControl.info} type='text' name='info' className='contactForm-input contactInput-info' onBlur={changeHandler} onChange={changeHandler}/>
                <span className={`formError  contactErrorInfo ${formErrors.info.status ? 'show':'no-show'}`}>{formErrors.info.msg}</span>
            </label>

            <button id='contactFormCTA' className={formErrors.name.status || formErrors.mail.status || formErrors.info.status ? 'CTA-inactive':'CTA-active'} type='submit'>Enviar</button>
        </form>




    );
}



export default ContactForm;