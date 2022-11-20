import React, { useEffect, useState } from 'react';
import { Calendar, luxonLocalizer,  Views } from 'react-big-calendar'
import { DateTime } from "luxon";
import 'react-big-calendar/lib/css/react-big-calendar.css';


export default function Calendarpage() {

  const localizer = luxonLocalizer(DateTime, { firstDayOfWeek: 1 })

    const [trainings, setTrainings] = useState([]);
    
    useEffect( () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err));
    }, []);

    const events = trainings.map((training) => (
        {
          title: `${training.activity} / ${training.customer.lastname} ${training.customer.firstname}`,
          start: new Date(training.date),
          end: new Date(new Date(training.date).getTime() + (training.duration*60000))
        }
        
    ))

    return (
          <div style={{height: 600}}>
          <Calendar
            defaultView={Views.WEEK}
            events={events}
            localizer={localizer}
            popup
            scrollToTime={DateTime.local().toJSDate()}
          />
        </div>

    )
    

}