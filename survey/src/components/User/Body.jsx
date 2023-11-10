import React from 'react'
import { UIData } from '../../UIData'

const Body = ({ModalFunction}) => {
    return (
        <section>

            <div className='first'>

                <div>
                    <h2 className='title'>Overview - Today</h2>
                </div>

                <div className='Cards'>
                    {UIData.map((item, index) => {
                        return (
                            <div className='Card' key={index}>
                                <div className='box'>
                                    <p>Title : {item.title}</p>
                                    <p >Count : {item.count}</p>
                                </div>
                            </div>
                        )
                    })}
                    <div className='CardAdd Card'>
                        <div className='add' onClick={()=>ModalFunction(true)}>
                            <p>+</p>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Body