
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getFullDate } from '../helpers/dateHelper';

import './Profile.css'


function Profile() {
    const {user} = useAuth()
    
    return (
        <main className='Profile'>
            <h4 id='Profile-title' className='title'>Gracias por elegirnos, <span>{user.name}</span>!</h4>
            <section className='descriptionContainer'>
                <p className='description'>Aquí podrás acceder a <span>información exclusiva</span> sobre tu estadía en Andalue.</p>
                <p className='description'>Entra al link de tu reserva para ver el <span>detalle</span>, las <span>fotos</span> de la cabaña alquilada, <span>valorar</span> tu estadía, instrucciones para llegar y mucho más...</p>
                <p className='description'>Esta información estará disponible <span>antes y durante</span> tu estadía, y podrás valorar y dejarnos tus comentarios en cualquier momento.</p>
                
            </section>
            {
                user.bookings.map((booking,i) => {
                    return(
                        <Link key={booking.id+"-"+i} 
                            className='CTAsecondary-active bookingLink'        
                            to={`/profile/${user.id}/${booking.code}`}                              
                            >
   
                            <p>Reserva<br/><span>{booking.cabin}</span></p>
                            <p>{getFullDate(booking.startDate)}</p>
   
                        </Link>  
                    )
                })
            }
            
                   
        </main>


    );
}



export default Profile;