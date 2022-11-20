import React, { useEffect, useState, Fragment, useMemo } from 'react';
import { Calendar, momentLocalizer,  Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';


export default function Calendarpage(props, dayLayoutAlgorithm = 'no-overlap') {

    const localizer = momentLocalizer(moment)

    const [trainings, setTrainings] = useState([]);
    
    useEffect( () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err));
    });

    const { defaultDate, scrollToTime } = useMemo(
        () => ({
          defaultDate: new Date(2015, 3, 12),
          scrollToTime: new Date(1970, 1, 1, 6),
        }),
        []
      )

    return (
        <Fragment>
          <div className="height600">
          <Calendar
            dayLayoutAlgorithm={dayLayoutAlgorithm}
            defaultView={Views.WEEK}
            events={trainings}
            localizer={localizer}
            selectable
            defaultDate={defaultDate}
            scrollToTime={scrollToTime}
          />
        </div>
      </Fragment>
    )
    

}