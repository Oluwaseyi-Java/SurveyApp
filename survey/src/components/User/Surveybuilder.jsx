import React, { useState } from 'react'
import BuilderModal from './BuilderModal'
import "./builder.css"
import "./Preview.css"
import FieldModal from './FieldModal';
import { FaBars, FaEdit } from "react-icons/fa"


const Surveybuilder = () => {

  const [isBuilderModalOpen, showBuilderModal] = useState(false);
  const [isFieldModalOpen, showFieldModal] = useState(false);
  const [identity, setIdentity] = useState(0)
  const [isDesignActive, setIsDesignActive] = useState(true)
  const [ispreviewActive, setIsPreviewActive] = useState(false)
  const [formState, setFormState] = useState([
    {
      id: 3443,
      title: "dsvsvs",
      field: [
        {
          title: "sdfsf",
          inputType: "checkbox"
        }
      ]
    }
  ])

  const FieldTitle = (data) => {

    setFormState([...formState, {
      id: Math.floor(Math.random() * 1000000),
      title: data, field: [
        {
          title: "",
          inputType: ""
        }
      ]
    }])
  }

  const FieldData = (data) => {

    setFormState(
      formState.map((state) => {
        return {
          ...state,
          field:
            state.id === data.id ? [
              ...state.field,
              {
                title: data.title,
                inputType: data.type
              }] : [
              ...state.field
            ]
        }
      })
    )
  }

  const Design = formState.map((item, index) => {
    return (
      <div
        key={index}
        className="Builder-Field"
      >
        <div className='Field-Header'>
          <span><FaBars className="hamburger" /> </span>
          <p>{item.title}</p>
        </div>

        {item.field.map((item1, index) => {
          return (
            <div
              key={index}
              className="Builder-Subfield"
            >
              <div className='subField'>
                <div className='subfield'>
                  <span>{item1.title === "" ? "" : <FaBars className='subham' />}  </span>
                  <div className='field'>
                    <p className='one'>{item1.title}</p>
                    <p className='two'>{item1.inputType}</p>
                  </div>
                </div>
                <FaEdit className='edit' />
              </div>
            </div>
          )
        })}

        <button
          className='builder-btn'
          onClick={() => {
            showBuilderModal(true)
            setIdentity(item.id)
          }}
        >Create sub-field</button>
      </div>
    )
  }
  )

  const Preview = formState.map((item, index) => {
    return (
      <div
        key={index}
        className='Preview'
      >
        <h1>{item.title}</h1>
        <div
          className='Field'>
          {item.field.map((item1, index) => {
            return (
              <div
                key={index}
                className='sub-Field'
              >
                <label>{index + 1}. {item1.title}</label>
                <div>
                  {item1.inputType === "textarea" ?
                    <textarea />
                    :
                    <input
                      type={item1.inputType}
                      name={item1.title}
                      className='InputField'
                      required />
                  }
                </div>
              </div>
            )
          })}
        </div>


      </div>

    )
  })


  return (
    <div className='Builder'>
      <header className="App-header builder-header">
        <p
          onClick={() => {
            setIsDesignActive(true)
            setIsPreviewActive(false)
          }}
        >Design</p>
        <p
          onClick={() => {
            setIsPreviewActive(true)
            setIsDesignActive(false)
          }}
        >Preview</p>
      </header>

      <div className='Builder-Body'>
        <div className='Intro'>
          <div className='backgroundImage'>
            <h3>Choose background image</h3>
            <input type='file' name='backgroundimage' />
          </div>
          <div className='InputField'>
            <h3>Enter brief introduction text and guildlines.</h3>
            <textarea />
          </div>

        </div>

        {isDesignActive && Design}

        {isDesignActive && <button
          className='field-btn'
          onClick={() => showFieldModal(true)}
        >Create Field</button>}


      </div>

      <div className='Preview-Body'>
        {ispreviewActive && Preview}
      </div>




      {isFieldModalOpen && <FieldModal fetch={FieldTitle} ModalFunction={showFieldModal} />}
      {isBuilderModalOpen && <BuilderModal id={identity} fetch={FieldData} ModalFunction={showBuilderModal} />}

    </div>
  )
}
// create field, create subfield
// <button onClick={() => {
//   console.log(formState)
// }}>click me</button>

export default Surveybuilder