import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages_Es } from '../../helpers/calendar-language-es';








moment().locale('es'); // change the global locale to Spanish

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Mi tarea #1',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
}
];


const HomeScreen = () => {

    return (
        <div className=' h-[95vh] w-full'>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages_Es}
            />
        </div>
    )
}

export default HomeScreen
