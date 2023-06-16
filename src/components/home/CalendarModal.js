import moment from 'moment/moment';
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../types/types';
import { uiCloseModal } from '../../actions/ui';



const customStyles = {
    content: {

    },
};


Modal.setAppElement('#root');

const now = moment().seconds(0);
const nowplus1h = now.clone().add(1, 'hours');

const CalendarModal = () => {


    const dispatch = useDispatch();

    const { modalOpen } = useSelector(state => state.rootReducer.ui);

    let [dateStart, setDateStart] = useState(now.toDate());
    let [dateEnd, setDateEnd] = useState(nowplus1h.toDate());
    let [formValues, setformValues] = useState({
        title: '',
        notes: '',
        start: now.toDate(),
        end: nowplus1h.toDate()
    });


    const { title, notes, start, end } = formValues;

    const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })
    }


    const closeModal = () => {
        dispatch(uiCloseModal(types.uiCloseModal));
    }

    const handleStartDateChange = (e) => {
        setDateStart(e);
        setformValues({ ...formValues, start: e });

    }

    const handleEndDateChange = (e) => {
        setDateEnd(e);
        setformValues({ ...formValues, end: e });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const momentStart = moment(start);
        const momentEnd = moment(end);
        console.log('algo');

        if (momentStart.isSame(momentEnd)) {
            return alert('la fecha final no debe ser igual a la fecha de inicio');
        }
        else if (momentStart.isAfter(momentEnd)) {
            return alert('la fecha final debe ser mayor a la fecha de inicio');
        }

        closeModal();

    }


    return (

        <div>
            <Modal
                isOpen={modalOpen}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                closeTimeoutMS={300}
                contentLabel="Example Modal"
                className='modal w-1/2 h-auto'
                overlayClassName='modal-fondo'
            >
                <div className='flex flex-col relative justify-center'>
                    <strong className='font-bold text-2xl'>Nuevo Evento</strong>
                    <form className='my-4 ml-2 mr-2 flex flex-col px-2' onSubmit={handleSubmit}>
                        <input type='text'
                            required={true}
                            onChange={handleInputChange}
                            name='title'
                            value={title}
                            autoComplete='off'
                            className='group/title transition-all py-2 pl-4 my-1  mt-3 border-2 p-1 border-black/10 w-full rounded outline-none focus:border-blue-600' ></input>
                        <label className=' font-medium text-medium text-sm ml-2 text-black/60'>Titulo</label>

                        <DateTimePicker
                            name='start'
                            onChange={handleStartDateChange}
                            value={dateStart}
                            className='mt-3 my-1'
                        >
                        </DateTimePicker>

                        <label className='font-medium text-medium text-sm ml-2 text-black/60'>Fecha de inicio</label>
                        <DateTimePicker
                            name='end'
                            onChange={handleEndDateChange}
                            value={dateEnd}
                            minDate={dateStart}
                            className='mt-3 my-1'
                        >
                        </DateTimePicker>
                        <label className='font-medium text-medium text-sm ml-2 text-black/60'>Fecha final</label>
                        <textarea
                            onChange={handleInputChange}
                            name='notes'
                            value={notes}
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
