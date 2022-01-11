import { useEffect } from 'react';
import Spinning from '../../loaders/Spinning';
import './BookingMsg.css'


function BookingMsg({setPopUpDisplay, delivered, setDelivered, channel}) {
    useEffect(()=>{
        return () => setDelivered(null)
    },[setDelivered])

    return (
        <div className='BookingMsgBackground' onClick={()=>setPopUpDisplay(false)}>
                    {!delivered && <Spinning/>}
                    {delivered && 
                    <section id='mailEndMsg' className='popUpContainer' onClick={(e) => e.stopPropagation()}>
                        <i className="far fa-times-circle closeBox" onClick={() => setPopUpDisplay(false)}></i>
                        <h4 className='mailEnd-title title'>Consulta enviada</h4>
                        <p className='mailEnd-msg'>Gracias por contactarte con nosotros.<br/><br/>Recibimos tu consulta y te estaremos contestando {channel==='mail' ? 'por mail' : 'por whatsapp'} para confirmar la reserva</p>
                    </section>}

        </div>


    );
}



export default BookingMsg;