import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages_Es } from '../../helpers/calendar-language-es';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventsetActive, setActive } from '../../actions/events';
import { types } from '../../types/types';








moment.locale('es'); // change the global locale to Spanish

const localizer = momentLocalizer(moment);






const HomeScreen = () => {

    const dispatch = useDispatch();
    const { events } = useSelector(state => state.rootReducer.calendar);

    let [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e) => {
        dispatch(eventsetActive(e));
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


    const handleFabClick = () => {
        dispatch(uiOpenModal());
    }





    return (
        <div className=' h-[95vh] w-full'>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages_Es}
                onDoubleClickEvent={onDoubleClick}
                eventPropGetter={eventStyleGetter}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />


            <button onClick={handleFabClick} className='transition-all hover:scale-110 hover:bg-blue-700 w-14 h-14 rounded-full text-center text-white font-black text-4xl absolute right-4 bottom-4 shadow-sm bg-blue-600'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mx-auto rounded">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
            </button>

            <CalendarModal />
        </div>
    )
}

export default HomeScreen
