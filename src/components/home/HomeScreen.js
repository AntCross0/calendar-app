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
import { eventClearActive, eventDeleted, eventsetActive, setActive } from '../../actions/events';
import { types } from '../../types/types';








moment.locale('es'); // change the global locale to Spanish

const localizer = momentLocalizer(moment);






const HomeScreen = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.rootReducer.calendar);

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

    const handledeleteClick = (e) => {
        dispatch(eventDeleted(e));
    }

    const onSelectSlot = (e) => {
        dispatch(eventClearActive());
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
                onSelectSlot={onSelectSlot}
                selectable={true}
            />


            <button onClick={handleFabClick} className='transition-all hover:scale-110 hover:bg-blue-700 w-14 h-14 rounded-full text-center text-white font-black text-4xl absolute right-4 bottom-4 shadow-sm bg-blue-600'>
                {
                    activeEvent === null ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="transition-all w-8 h-8 mx-auto rounded animate-fade">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="transition-all w-6 h-6 mx-auto rounded animate-fade">
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                        </svg>


                }

            </button>


            <button onClick={handledeleteClick} className={`animate-jump-in transition-all hover:scale-110 hover:bg-red-700 w-14 h-14 rounded-full text-center text-white font-black text-4xl absolute left-4 bottom-4 shadow-sm bg-red-600 ` + `${activeEvent != null ? '' : 'hidden'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mx-auto rounded">
                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                </svg>

            </button>

            <CalendarModal />
        </div>
    )
}

export default HomeScreen
