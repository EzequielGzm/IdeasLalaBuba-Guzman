import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import FormCart from './FormCart';

const Popup = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
        <button className='button1' onClick={handleShow}>
          Realizar compra
        </button> 
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Complete con sus datos para finalizar su pedido:</Modal.Title>
          </Modal.Header>
          <Modal.Body className='popup'>
            <FormCart/>
            </Modal.Body>
         
        </Modal>
      </>
  )
}

export default Popup