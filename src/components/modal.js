import React from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#app');

const Modal = (props) => {
  return (
    <ReactModal
      className='modal'
      overlayClassName='modal-overlay'
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
    >
      {props.children}
    </ReactModal>
  )
}

export default Modal
