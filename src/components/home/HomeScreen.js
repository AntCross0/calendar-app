import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages_Es } from '../../helpers/calendar-language-es';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';








moment.locale('es'); // change the global locale to Spanish

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Mi tarea #1',
    start: moment().toDate(),
    end: moment().add(1, 'hours').toDate(),
    user: {
        _id: 1234,
        name: 'Anthony'
    }
}
];


const HomeScreen = () => {

    let [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');


    const onDoubleClick = (e) => {
        console.log(e);
    }

    const onSelectEvent = (e) => {
        console.log(e);
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e)
    }


    const eventStyleGetter = (event, start, end, isSelected) => {
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
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal />
        </div>
    )
}

export default HomeScreen
