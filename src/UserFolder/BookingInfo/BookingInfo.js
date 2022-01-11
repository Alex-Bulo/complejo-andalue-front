
import './BookingInfo.css'
import moment from 'moment'
import {getDaysFromToday} from '../../helpers/dateHelper'

function BookingInfo({booking}) {
  
    return (
        <>
        
          <header className={`countdown ${getDaysFromToday(booking.startDate)>=1 ? 'show':'no-show' }`}>
            <h4>Sólo <span>{getDaysFromToday(booking.startDate)}</span> dias para disfrutar Andalue</h4>
          </header>
          
            <article className='bookingInfo-title'>
              <img src={booking.cabinImage} alt={`Foto principal de la cabaña ${booking.cabin} reservada en Andalue`} className='cabinPic'/>
              <h5 id='bookingInfoTitle' className='title'> Tu reserva en {booking.cabin}</h5>
            </article>
            
            <section className='tablesContainer'>

              <table className='table-dates'>
                  <tbody>

                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-home tableIcon"/> Cabaña</th>
                        <td className='tableData'>{booking.cabin}</td>
                    </tr>

                    <tr className='tableRows'>
                      <th className='tableHeaders'><i className="fas fa-door-open tableIcon"/>Fecha de Ingreso</th>
                      <td className='tableData'>{moment(booking.startDate).format('DD/MM/YY')}</td>
                    </tr>

                    <tr className='tableRows'>
                      <th className='tableHeaders'><i className="fas fa-door-open tableIcon"/>Fecha de Egreso</th>
                      <td className='tableData'>{moment(booking.endDate).format('DD/MM/YY')}</td>
                    </tr>
                  
                  </tbody>
              </table>
              
              <table className='table-qty'>
                <tbody>
                    <tr className='tableRows'>
                        <th className='tableHeaders'><i id='usersIcon' className='fas fa-users tableIcon'/>Adultos</th>
                        <td className='tableData'>{booking.adults}</td>
                    </tr>

                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className='fas fa-child tableIcon'/>Niños</th>
                        <td className='tableData'>{booking.kids}</td>
                    </tr>

                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className='fas fa-paw tableIcon'/>Mascotas</th>
                        <td className='tableData'>{booking.pets}</td>
                    </tr>
                </tbody>
              </table>

              <table className='table-user'>
                <tbody>
                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className='fas fa-user tableIcon'/>Reserva de</th>
                        <td className='tableData'>{booking.userName}</td>
                    </tr>

                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-at tableIcon"></i>Email</th>
                        <td className='tableData'>{booking.userEmail}</td>
                    </tr>

                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-phone tableIcon"></i>Teléfono</th>
                        <td className='tableData'>{booking.userPhone}</td>
                    </tr>
                </tbody>
              </table>

              <table className='table-andalue'>
                <tbody>
                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-clock tableIcon"/>Horario Check In</th>
                        <td className='tableData'>Desde 12am</td>
                    </tr>
                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-clock tableIcon"/>Horario Check Out</th>
                        <td className='tableData'>Hasta 9am</td>
                    </tr>

                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-info tableIcon infoIcon"/>Griselda</th>
                        <td className='tableData'>+54040402013213</td>
                    </tr>

                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-info tableIcon infoIcon"/>Dueños</th>
                        <td className='tableData'>+54114445555 (Diego)<br/>+54114445555 (Sonia) </td>
                    </tr>
                </tbody>
              </table>
          </section>
        
        </>


    );
}



export default BookingInfo;