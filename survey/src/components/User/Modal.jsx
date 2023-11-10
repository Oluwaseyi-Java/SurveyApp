import React from 'react'

const Modal = ({ ModalFunction }) => {
  return (
    <div className='Modal'>

      <div className='add-con'>
        <div id='header'>
          <p>CREATE SURVEY</p>
          <p onClick={() => ModalFunction(false)}>X</p></div>
        <hr />
        <div id="form">
          <label htmlFor='SurveyTitle'>Enter survey title:</label>
          <input type="text" name="SurveyTitle" />
          <button>CREATE </button>
        </div>
      </div>

    </div>
  )
}

export default Modal