import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { isEmail, isEmpty } from '../../../helpers/formValidations';
import Spinning from '../../../loaders/Spinning';

import './LoginContainer.css'


function LoginContainer({showLogin}) {
    const [loading,setLoading] = useState(null)
    const {logIn, user} = useAuth()
    const [inputControl, setInputControl] = useState({
        mail:'',
        code:'XXXX-XXXX-XXXX'
    })

    const [formErrors, setFormErrors] = useState({
        mail: {status: true, msg: ''},
        code: {status: true, msg: ''},
    })

    const history = useHistory()

    const loginHandler = (e) => {
        e.preventDefault()
        
        if(!formErrors.mail.status && !formErrors.code.status){
        
            // console.log('me envio');
            setLoading(true)
            
            logIn(inputControl.mail, inputControl.code,{setFormErrors,setLoading})
            
        }
    }
    useEffect(()=>{
        
        user && history.push(`/profile/${user.id}/${user.accessCode}`)
        user && showLogin(false)
    
    },[user])

    const changeHandler = (e) => {
        
        setInputControl((inputs)=>{ return {...inputs, [e.target.name]:e.target.value}})
        
        isEmpty(e.target.value) && setFormErrors((errors)=>{ return {...errors, [e.target.name]:{status:true, msg:`Información requerida`}}})
        !isEmpty(e.target.value) && setFormErrors((errors)=>{ return {...errors, [e.target.name]:{status:false, msg:e.target.value}}})
    
        
        if(e.target.name === 'mail'){
            !isEmail(e.target.value) && setFormErrors((errors)=>{ return {...errors, mail:{status:true, msg:'Completar mail válido'}}})            
            isEmail(e.target.value) && setFormErrors((errors)=>{ return {...errors, mail:{status:false, msg:e.target.value}}})           
        }

    }

    return (
        
        <div className='LoginContainer' onClick={()=>showLogin(false)} >
            
         
            <div className='popUpContainer login' onClick={(e)=>e.stopPropagation()}>
                <i className="far fa-times-circle closeBox" onClick={() => showLogin(false)}></i>
                <h4 className='title login-title'>Ya reservaste?</h4>
                {loading && <Spinning/>}
                <p className='loginDescription'>Ingresá tu mail y código de reserva para acceder a información exclusiva de tu estadía en <span>Andalue</span></p>

                <form onSubmit={loginHandler} className='loginForm'>
                    <label name='mail' className='loginForm-label'>
                        <p className='label-title'>Mail</p>
                        <input value={inputControl.mail} type='text' name='mail' className='loginForm-input' onChange={changeHandler}/>
                    </label>
                        <span id='loginErrorMail' className={`formError ${formErrors.mail.status ? 'show':'no-show'}`}>{formErrors.mail.msg}</span>
                    <label name='code' className='loginForm-label'>
                        <p className='label-title'>Código de reserva</p>
                        <input value={inputControl.code} type='text' name='code' className='loginForm-input' onChange={changeHandler}/>
                    </label>
                        <span id='loginErrorCode' className={`formError ${formErrors.code.status ? 'show':'no-show'}`}>{formErrors.code.msg}</span>
                    <button type='submit' className={`${formErrors.code.status || formErrors.mail.status ? 'CTA-inactive' : 'CTA-active pointerClass'} loginForm-CTA`}>Acceder</button>
                </form>

            </div>
        
        
        </div>
    );
  
}

  export default LoginContainer;
  