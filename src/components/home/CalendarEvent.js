import React from 'react'

const CalendarEvent = ({ event }) => {

    const { title, user, bgcolor, notes } = event;

    return (
        <div className='bg-blue-600'>
            <span className='font-medium'>{title}</span>
            <strong className='font-bold'>-{user.name} </strong>
            <p>{notes}</p>
        </div>
    )
}

export default CalendarEvent
