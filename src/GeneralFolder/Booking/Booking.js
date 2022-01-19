import moment from 'moment'
import 'moment/locale/es-mx'
import { useEffect, useRef, useState } from 'react';
import { useAvail } from '../../context/AvailContext';
import { useInfo } from '../../context/InfoContext';
import { getFullDate } from '../../helpers/dateHelper';
import { isEmail, isEmpty } from '../../helpers/formValidations';
import { APIDOMAIN, getWppMsg } from '../../helpers/helpers';
import './Booking.css'
import BookingMsg from './BookingMsg';


function Booking({cabin, bookDates}) {
    const [popUp, setPopUp] = useState(false)
    const [mailFormDisplay, setMailFormDisplay] = useState(false)
    const [mailEndDisplay, setMailEndDisplay] = useState(false)
    const [mailEndMsg, setMailEndMsg] = useState(null)
    const [channel, setChannel] = useState(null)

    const [mailFormErrors, setMailFormErrors] = useState({name:null,mail:null,send:false})
    const [wppMsg, setWppMsg] = useState(null)
    
    const userName = useRef(null)
    const userMail = useRef(null)
    
    const {info} = useInfo()
    const {query} = useAvail()
    moment.updateLocale('es-mx')

    useEffect(()=>{
            if(popUp){
                
                const newMsg = getWppMsg(cabin.name, bookDates[0], bookDates[1], query.adults, query.kids, query.pets)
                setWppMsg(newMsg)

            }
        
    },[popUp, cabin.name, bookDates, query])

    useEffect(()=>{
        // console.log(mailFormErrors);
        setMailFormErrors({name:null,mail:null,send:false})
        
        if(userName.current){
            userName.current.value = ''
            userName.current.focus()
        }

    },[mailFormDisplay])

    const wppHandler = () => {
        setMailEndMsg('success')
        setChannel('wpp')
        setMailEndDisplay(true)

    }

    const emailHandler = (e) => {
        e.preventDefault()

        // if(false){
        if(mailFormErrors.name || mailFormErrors.mail){
            setMailFormErrors({...mailFormErrors, send:false})
            // console.log('no me envio');
        }else{
            setMailFormDisplay(false)
            setMailEndDisplay(true)
            setChannel('mail')

            fetch(`${APIDOMAIN}/bookingMail`,{
                headers:{'Content-Type':'application/json'},
                method:'POST',
                body:JSON.stringify({
                    cabin: cabin.name,
                    startDate: bookDates[0], endDate:bookDates[1],
                    adults:query.adults, kids:query.kids, pets:query.pets,
                    userName: userName.current.value, userMail: userMail.current.value
                })
            })
            .then(response => response.json())
            .then(dbInfo => {
                // console.log(dbInfo)
                
                if(dbInfo.meta.status === 'error'){
                    const errorName = dbInfo.errors.name.status ? dbInfo.errors.name.msg : undefined
                    const errorMail = dbInfo.errors.mail.status ? dbInfo.errors.mail.msg : undefined
                    setMailFormErrors({name:errorName, mail:errorMail,send:false})
                    setMailFormDisplay(true)
                }else{
                    setMailEndMsg('Success')
                }


            })

        }

    }

    const blurHandler = (e) => {
        if(e.target.name === 'name'){
            isEmpty(e.target.value) && setMailFormErrors((errors)=>{ return {...errors, name:'Completar su nombre', send: false}})
            !isEmpty(e.target.value) && setMailFormErrors((errors)=>{ return {...errors, name:null, send: errors.mail ? false : true}})
        }
        
        if(e.target.name === 'mail'){
            !isEmail(e.target.value) && setMailFormErrors((errors)=>{ return {...errors, mail:'Completar mail válido', send: false}})            
            isEmail(e.target.value) && setMailFormErrors((errors)=>{ return {...errors, mail:null, send: errors.name ? false : true}})
            
        }
        
        
    }


    return (

        <>
        
            <button className='bookBtn CTA-active' onClick={() => setPopUp( () => !popUp ) }> Reservar </button>
            { (popUp && cabin) &&
            <div className={popUp ? 'show popUpBackground' : 'no-show'} onClick={() => setPopUp(false)}>
                <div 
                    className='popUpContainer' 
                    onClick={(e)=> e.stopPropagation()}
                    style={mailFormDisplay ? {overflow:'hidden'}:{}}
                    >
                    
                    <i className="far fa-times-circle closeBox" onClick={() => setPopUp(false)}></i>
                    
                    <h4>Estás consultando por {cabin.name}</h4>
                    
                    <main className='popUpInfoContainer'>
                        <section className='name-dates'>
                            <p>Ingreso: <span>{getFullDate(bookDates[0])} - {info.checkIn}</span></p>
                            <p>Egreso: <span>{getFullDate(bookDates[1])} - {info.checkOut} </span></p>
                            <p>Adultos: <span>{query.adults} </span></p>
                            <p>Niños: <span>{query.kids} </span></p>
                            {query.pets>0 ? <p>Mascotas: <span>{query.pets} </span></p> : ''}
                        </section>

                        <section className='pagos'>
                            <p> La reserva queda confirmada al abonar el 50% del valor de la estadía.</p>
                            <p> El pago se realiza via transferencia bancaria, los datos de la misma se compartirán via whatsapp o mail.</p>
                            <p>El 50% restante se puede abonar presencialmente en las cabañas o también via transferencia.</p>
                        </section>
                        
                        <section className='detalles'>
                            <p>
                                La cabaña {cabin.name} cuenta con las siguientes comodidades y servicios
                            </p>

                            <ul>
                                {cabin.features.map((feature,i) => {
                                    return(
                                        <li key={i} className='popUpFeature'> 
                                            <i className={feature.icon}/>
                                            <h4>{feature.name}</h4>
                                            <p>{feature.description}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>

                    </main>
                    <div className='Wpp-MailContainer'>
                        <img id='mailImg' src='/Gmail_Color.svg' alt='Enviar consulta para reservar' onClick={()=>setMailFormDisplay(true)}/>
                        <a id='wppIcn' href={`https://api.whatsapp.com/send?phone=${info.contactCell}&text=${wppMsg}`} target='_blank' rel="noopener noreferrer"><img id='wppImg' src='/Whatsapp_Green.svg' alt='Enviar Whatsapp a Complejo Andalue'/></a>
                    </div>
                    
                    <a  onClick={wppHandler} href={`https://api.whatsapp.com/send?phone=${info.contactCell}&text=${wppMsg}`} target='_blank' rel="noopener noreferrer"><button id='popUpCTA' className='CTA-active'>Contactar</button></a>
                    {/* MAIL POPUP */}
                    <div className={`mailFormBackground ${mailFormDisplay ? 'show' :'no-show'}`} onClick={()=>setMailFormDisplay(false)}>

                        <form id='mailForm' onSubmit={emailHandler} className={`popUpContainer `} onClick={(e)=>e.stopPropagation()}>
                            <h4 className='mailForm-title title'>Completa tus datos para comunicarnos</h4>
                            <label className='mailForm-label mailLabel-name' name='name'> 
                                <p>Nombre</p>
                                <input  ref={userName} onBlur={blurHandler} 
                                        type='text' name='name' className='mailForm-input input-name'/>
                                <span className={`formError error-mailFormName ${mailFormErrors.name ? 'show' : 'no-show'}`}>{mailFormErrors.name}</span>
                            </label>

                            <label className='mailForm-label mailLabel-mail' name='mail'>
                                <p>Mail</p>
                                <input  ref={userMail} onBlur={blurHandler} 
                                        type='email' name='mail' className='mailForm-input input-mail'/>
                                <span className={`formError error-mailFormMail ${mailFormErrors.mail ? 'show' : 'no-show'}`}>{mailFormErrors.mail}</span>
                            </label>

                            <button id='mailFormCTA' className={mailFormErrors.send ? 'CTA-active' : 'CTA-inactive'} type='submit'>Enviar</button>
                        </form>                     
                    </div>

                    {mailEndDisplay && <BookingMsg setPopUpDisplay={setMailEndDisplay} delivered={mailEndMsg} setDelivered={setMailEndMsg} channel={channel}/>}

                </div> 
            </div>        
            }
            
        </>

    );
}



export default Booking;