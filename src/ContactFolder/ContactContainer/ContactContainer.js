import { useState } from 'react';
import { useInfo } from '../../context/InfoContext';
import BookingMsg from '../../GeneralFolder/Booking/BookingMsg';
import ContactForm from '../ContactForm/ContactForm';
import './ContactContainer.css'


function ContactContainer() {
    const [sending, setSending] = useState({status:null,channel:null})
    const [delivered, setDelivered] = useState(null)

    const {info} = useInfo()
    
    const wppHandler = () => {
        
        setSending({status:true,channel:'wpp'})
        setDelivered(true)
        
    }

    return (  
        
        <section className='ContactContainer'>
            <ContactForm setSending={setSending} setDelivered={setDelivered}/>                
            <article className='wppChoiceContainer'>
            <a onClick={wppHandler} href={`https://api.whatsapp.com/send?phone=${info.contactCell}`} target='_blank' rel="noopener noreferrer" className='wppChoice'><button className='CTAsecondary-active wppChoice' >Preferis Whatsapp?</button></a>
            </article>
            {sending.status && <BookingMsg setPopUpDisplay={setSending} delivered={delivered} setDelivered={setDelivered} channel={sending.channel}/>}                
        </section>



    );
}



export default ContactContainer;