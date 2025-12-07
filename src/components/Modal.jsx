import React from 'react'
import '../styles/Modal.css'

function Modal({ closeModal, deleteCreator , setIsModalOpen }) {
  return (
    <dialog open>
        <article>
            <h2>WAIT!!!</h2>
            <p>
             Are you sure you wanto to delete { name  }
            </p>
            
          
            <button className='secondary modal-button' onClick={ ()=>closeModal()}>Cancel</button>
            <button className='secondary modal-button' onClick={ ()=>deleteCreator() }>Yes</button>
          
        </article>
</dialog>
  )
}

export default Modal