
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import './Test2.css'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from 'react';
import { APIDOMAIN } from '../helpers/helpers';
import { useParams } from 'react-router-dom';

const localizer = momentLocalizer(moment) // or globalizeLocalizer


function Test2() {
    const {id} = useParams()

    const [events,setEvents] = useState(null)
    

    const eventStyleGetter = (event, start, end, isSelected) => {
        // console.log(event);
        let backgroundColor 
        if(event.cabin === 'Cerro Sosneado'){
            backgroundColor = '#09AB86'
        }else if(event.cabin === 'Río Atuel'){
            backgroundColor = '#A011AB'
        }
        
        const style = {
            backgroundColor: backgroundColor,
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black',
            border: '0px',
            display: 'block'
        };
        return {
            style: style
        };
    }
    useEffect(()=>{
        fetch(`${APIDOMAIN}/avail/product`)
        .then(response => response.json())
        .then(dbInfo =>{


            const newInfo = dbInfo.data.map(cabin=>{
                return cabin.bookings.map( booking => {
                    return { start:booking.startDate, end: booking.endDate, title:`${booking.user.name} - ${cabin.name}`, cabin:cabin.name}
                    })
                })



                // console.log(newInfo.flat());
            setEvents(newInfo.flat())
        
        })
    },[])    
    return (  
        events &&        
        <div className='Test2'>
            <Calendar
                events={events}
                defaultView='month'

                // views={allViews}
                // step={60}
                // showMultiDayTimes
                // max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
                // defaultDate={new Date(2015, 3, 1)}
                // components={{
                // timeSlotWrapper: ColoredDateCellWrapper,
                // }}

                style = {{height:'100vh', width:'95vw'}}
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                eventPropGetter={eventStyleGetter}
            />
            
        </div>


    );
}


export default Test2;