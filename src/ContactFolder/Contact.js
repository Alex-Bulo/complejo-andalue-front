import AvailDetailContainer from '../GeneralFolder/AvailDetailContainer/AvailDetailContainer';
import AvailFormContainer from '../GeneralFolder/AvailFormFolder/AvailFormContainer/AvailFormContainer';
import ContactContainer from './ContactContainer/ContactContainer';
import './Contact.css'


function Contact() {    
    
    return (  
        
        <main className='Contact'>

                <ContactContainer/>
                <AvailFormContainer />
                <AvailDetailContainer />

        
        </main>


    );
}



export default Contact;