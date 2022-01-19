
import './BookingInfo.css'
import moment from 'moment'
import {getDaysFromToday} from '../../helpers/dateHelper'
import { useInfo } from '../../context/InfoContext';

function BookingInfo({booking}) {

  const {info} = useInfo()
  
    return (
        <>
        
          <header className={`countdown ${getDaysFromToday(booking.startDate)>=1 ? 'show':'no-show' }`}>
            <h4>Sólo <span>{getDaysFromToday(booking.startDate)}</span> dias para disfrutar Andalue</h4>
          </header>
          
            <article className='bookingInfo-title'>
              <img src={booking.cabinImage} alt={`Foto principal de la cabaña ${booking.cabin} reservada en ${info.placeShortname}`} className='cabinPic'/>
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
                        <th className='tableHeaders'><i className='fas fa-user tableIcon'/>Huesped</th>
                        <td className='tableData'>{booking.userName} {booking.userLastName}</td>
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

              <table className='table-price'>
                <tbody>
                <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-dollar-sign tableIcon"></i>Precio</th>
                        <td className='tableData'>$ {Intl.NumberFormat(undefined,{style:'currency',currency:'ARS'}).format(Number(booking.price))}</td>
                    </tr>

                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-coins tableIcon"></i>Monto al reservar</th>
                        <td className='tableData'>$ {Intl.NumberFormat(undefined,{style:'currency',currency:'ARS'}).format(Number(booking.firstPayment))}</td>
                    </tr>

                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-calendar-check tableIcon"></i>Primer Pago</th>
                        <td className='tableData' style={booking.firstPaymentDate ? {color:'darkgreen'} : {color:'darkred'} }>
                          {booking.firstPaymentDate && moment(booking.firstPaymentDate).format('DD/MM/YY')}
                          {!booking.firstPaymentDate && 'Abonar Monto Al Reservar'}
                        </td>
                    </tr>

                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-coins tableIcon"></i>Monto al arribar</th>
                        <td className='tableData'>$ {Intl.NumberFormat(undefined,{style:'currency',currency:'ARS'}).format(Number(booking.secondPayment))}</td>
                    </tr>

                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-calendar-check tableIcon"></i>Segundo Pago</th>
                        <td className='tableData' style={booking.secondPaymentDate ? {color:'green'} : {color:'darkred'} }>
                          {booking.secondPaymentDate && moment(booking.secondPaymentDate).format('DD/MM/YY')}
                          {!booking.secondPaymentDate && 'Abonar Monto Al Arribar'}
                        </td>
                    </tr>
                </tbody>
              </table>

              <table className='table-andalue'>
                <tbody>
                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-clock tableIcon"/>Horario Check In</th>
                        <td className='tableData'>{info.checkIn}</td>
                    </tr>
                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-clock tableIcon"/>Horario Check Out</th>
                        <td className='tableData'>{info.checkOut}</td>
                    </tr>

                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-info tableIcon infoIcon"/>Atención</th>
                        <td className='tableData'dangerouslySetInnerHTML={{__html: info.contactExtra}}/>
                    </tr>

                    <tr className='tableRows'>
                        <th className='tableHeaders'><i className="fas fa-info tableIcon infoIcon"/>Encargados</th>
                        <td className='tableData'dangerouslySetInnerHTML={{__html: info.contactOwners}}/>
                    </tr>
                </tbody>
              </table>
          </section>
        
        </>


    );
}



export default BookingInfo;