import React, { useState } from 'react'

const FieldModal = ({ fetch, ModalFunction }) => {


    const [fieldTitle, setFieldTitle] = useState("")


    const HandleChange = (e) => {
        e.preventDefault();

        setFieldTitle(e.target.value)
    }
    return (

        <div className='Modal'>

            <div className='add-con'>
                <div id='header'>
                    <p>CREATE FIELD</p>
                    <p onClick={() => ModalFunction(false)}>X</p></div>
                <hr />
                <div >
                    <form id="form">
                        <label htmlFor='SurveyTitle'>Enter field title:</label>

                        <input
                            type="text"
                            name="SurveyTitle"
                            value={fieldTitle}
                            onChange={HandleChange}
                        />

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                fetch(fieldTitle)
                                // setFieldTitle("")
                            }
                            }
                        >CREATE </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default FieldModal