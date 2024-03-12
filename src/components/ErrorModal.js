import React from 'react'
import './ErrorModal.css'

function ErrorModal(props) {
  return (
    <div>
    <div className="backdrop"></div>
    <div className="modal">
        <header>props title</header>
        <div className='message'>props message</div>
        <footer>
            <button>Okay</button>
        </footer>
    </div>
    </div>
  )
}

export default ErrorModal