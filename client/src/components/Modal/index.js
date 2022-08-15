import React from 'react'
import { Modal } from '@mui/material'
import { createPortal } from 'react-dom'

function ModalComp({show, handleClose, text}) {
  return createPortal(
      show ? (
        <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        >
            <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
                <div className='p-4 card shadow d-flex flex-column justify-content-start align-items-start' style={{width: '50vw'}}>
                    <p>
                        {text}
                    </p>
                    <button className='btn btn-primary' onClick={handleClose}>Ok</button>
                </div>
            </div>
        </Modal>
      ) : null,
      document.getElementById('modal')
  )
}

export default ModalComp