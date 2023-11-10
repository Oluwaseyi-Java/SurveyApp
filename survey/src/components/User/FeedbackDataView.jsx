import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"



const FeedbackDataView = () => {

    const [isSelected, onSelect] = useState({
        star1: true,
        star2: false
    })


    console.log(isSelected)


    return (
        <div className='FeedbackDataView'>
            <div className='Head'>
                <div className='title'>
                    <h1>Job title</h1>
                    <div id='btn'>
                        <button>view Form</button>
                    </div>
                </div>
                <div className='Lead'>
                    <p>Responses </p>
                    <p>Summary</p>
                </div>
            </div>
            <article>
                <div className='Filter'>
                    <div>
                        <p id='a1'>Period</p>
                        <select id='a2'>
                            <option value="All Time" >All Time</option>
                            <option value="Today" >Today</option>
                            <option value="Yesterday" >Yesterday</option>
                        </select>

                    </div>
                    <div>
                        <p id='a1'>Label</p>
                        <select id='a2'>
                            <option value="All Responses" >All Responses {45}</option>
                            <option value="Complete" >Complete</option>
                            <option value="Yesterday" >Yesterday</option>
                        </select>

                    </div>
                    <div>
                        <p id='a1'>Status</p>
                        <select id='a2'>
                            <option value="All" >All</option>
                            <option value="Today" >Valid</option>
                            <option value="Yesterday" >Important</option>
                        </select>

                    </div>
                </div>
                <div className='Content-Header'>
                    <div>
                        <input type="checkbox" />
                        <span >
                            <FaStar
                                className={`${isSelected.star1 ? "StarSelect" : "NotSelected"}`}
                                onClick={() => onSelect({
                                    ...isSelected,
                                    star1: !isSelected.star1,
                                })}
                            />
                        </span>
                        <p>Number</p>
                        <p>Date</p>
                        <p>Q1</p>
                        <p>Q2</p>
                        <p>Q3</p>
                    </div>
                    <div>
                        <input type="checkbox" />

                        <span >
                            <FaStar
                                className={`${isSelected.star2 ? "StarSelect" : "NotSelected"}`}
                                onClick={() => onSelect({
                                    ...isSelected,
                                    star2: !isSelected.star2,
                                })}
                            />
                        </span>
                        <p>Number</p>
                        <p>Date</p>
                        <p>Q1</p>
                        <p>Q2</p>
                        <p>Q3</p>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default FeedbackDataView