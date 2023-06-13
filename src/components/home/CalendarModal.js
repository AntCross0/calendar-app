import React from 'react';
import Modal from 'react-modal';



const customStyles = {
    content: {





    },
};

Modal.setAppElement('#root');


const CalendarModal = () => {



    const closeModal = () => {
    }



    return (

        <div>
            <Modal
                isOpen={true}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                closeTimeoutMS={300}
                contentLabel="Example Modal"
                className='modal w-1/2 h-1/2'
                overlayClassName='modal-fondo'
            >
                <div className='flex flex-col relative justify-center'>
                    <strong className='font-bold text-2xl'>Nuevo Evento</strong>
                    <form className='my-4 ml-2 mr-2  px-2'>
                        <input type='text'
                            placeholder='Titulo'
                            autoComplete='off'
                            className='group/title transition-all  my-1  mt-3 border-2 p-1 border-black/10 w-full rounded outline-none  focus:border-blue-600' ></input>
                        <label className='font-medium text-medium text-sm ml-2 text-black/60'>Titulo</label>
                        <input type='text'
                            autoComplete='off'
                            className='transition-all  my-1  mt-3 border-2 p-1 border-black/10 w-full rounded outline-none  focus:border-blue-600' ></input>
                        <label className='font-medium text-medium text-sm ml-2 text-black/60'>Editar titulo</label>
                        <input type='text'
                            autoComplete='off'
                            className='transition-all  my-1  mt-3 border-2 p-1 border-black/10 w-full rounded outline-none  focus:border-blue-600' ></input>
                        <label className='font-medium text-medium text-sm ml-2 text-black/60'>Editar titulo</label>
                        <textarea
                            autoComplete='off'
                            className='transition-all  my-1  mt-3 border-2 p-1 border-black/10 w-full rounded outline-none  focus:border-blue-600' ></textarea>
                        <label className='font-medium text-medium text-sm ml-2 text-black/60'>Editar titulo</label>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default CalendarModal
