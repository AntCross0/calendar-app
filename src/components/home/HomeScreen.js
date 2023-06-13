import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages_Es } from '../../helpers/calendar-language-es';








moment.locale('es'); // change the global locale to Spanish

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Mi tarea #1',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
}
];


const HomeScreen = () => {

    const eventStyleGetter = (event, start, end, isSelected) => {
        console.log(event, start, end, isSelected);
        const style = {
            backgroundColor: '#2563EB',
            color: 'White',
            borderRadius: '3px',
            opacitiy: 0.4,
        }
        return {
            style
        }
    }





    return (
        <div className=' h-[95vh] w-full'>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages_Es}
                eventPropGetter={eventStyleGetter}
            />
        </div>
    )
}

export default HomeScreen
