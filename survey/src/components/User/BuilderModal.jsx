import React, { useState } from 'react'

const BuilderModal = ({ id, fetch, ModalFunction }) => {

  const [fieldData, setFieldData] = useState({
    id: id,
    title: "",
    type: ""
  });


  
  return (
    <div className='Modal'>

      <div className='add-con'>
        <div id='header'>
          <p>CREATE FIELD</p>
          <p onClick={() => ModalFunction(false)}>X</p></div>
        <hr />
        <div id="form">

          <label htmlFor='SurveyTitle'>Enter field title:</label>
          <input
            type="text"
            name="SurveyTitle"
            value={fieldData.title}
            onChange={(e) => {
              e.preventDefault();

              setFieldData({
                ...fieldData,
                title: e.target.value
              })
            }}
          />

          <div className='BuilderSelect'>

            <p id='a1'>Select inputType</p>

            <select id='a2'
              value={fieldData.type}
              onChange={(e) => {
                e.preventDefault();

                setFieldData({
                  ...fieldData,
                  type: e.target.value
                })
              }}
            >
              <option value="text" >text</option>
              <option value="textarea" >textArea</option>
              <option value="tel" >tel</option>
              <option value="number" >number</option>
              <option value="color" >color</option>
              <option value="file" >file</option>
              <option value="time" >time</option>
              <option value="radio" >radio</option>
              <option value="checkbox" >checkbox</option>
              <option value="email" >email</option>
              <option value="range" >range</option>
              <option value="url" >url</option>
              <option value="date" >date</option>
            </select>

          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              fetch(fieldData)
            }}
          >ADD </button>
        </div>
      </div>

    </div>
  )
}

export default BuilderModal