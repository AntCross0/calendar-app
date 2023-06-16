import moment from 'moment/moment';
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';



const customStyles = {
    content: {





    },
};


Modal.setAppElement('#root');

const now = moment().seconds(0);
const nowplus1h = now.clone().add(1, 'hours');

const CalendarModal = () => {

    let [dateStart, setDateStart] = useState(now.toDate());
    let [dateEnd, setDateEnd] = useState(nowplus1h.toDate());

    const closeModal = () => {
    }

    const handleStartDateChange = (e) => {
        console.log(e);
        setDateStart(e);

    }

    const handleEndDateChange = (e) => {
        console.log(e);
        setDateEnd(e);
    }




    return (

        <div>
            <Modal
                isOpen={true}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                closeTimeoutMS={300}
                contentLabel="Example Modal"
                className='modal w-1/2 h-auto'
                overlayClassName='modal-fondo'
            >
                <div className='flex flex-col relative justify-center'>
                    <strong className='font-bold text-2xl'>Nuevo Evento</strong>
                    <form className='my-4 ml-2 mr-2 flex flex-col px-2'>
                        <input type='text'

                            autoComplete='off'
                            className='group/title transition-all py-2 pl-4 my-1  mt-3 border-2 p-1 border-black/10 w-full rounded outline-none focus:border-blue-600' ></input>
                        <label className=' font-medium text-medium text-sm ml-2 text-black/60'>Titulo</label>

                        <DateTimePicker
                            onChange={handleStartDateChange}
                            value={dateStart}
                            className='mt-3 my-1'
                        >
                        </DateTimePicker>

                        <label className='font-medium text-medium text-sm ml-2 text-black/60'>Fecha de inicio</label>
                        <DateTimePicker
                            onChange={handleEndDateChange}
                            value={dateEnd}
                            minDate={dateStart}
                            className='mt-3 my-1'
                        >
                        </DateTimePicker>
                        <label className='font-medium text-medium text-sm ml-2 text-black/60'>Fecha final</label>
                        <textarea
                            autoComplete='off'
                            className='transition-all  my-1 py-2 pl-4 mt-3 border-2 p-1 border-black/10 w-full rounded outline-none  focus:border-blue-600' ></textarea>
                        <label className='font-medium text-medium text-sm ml-2 text-black/60'>Notas</label>
                        <button type='submit' className='transition-all my-2 place-self-end bg-blue-600 py-2 px-4 rounded text-white hover:bg-blue-700'>Crear</button>
                    </form>
                </div>
            </Modal >
        </div >
    )
}

export default CalendarModal
