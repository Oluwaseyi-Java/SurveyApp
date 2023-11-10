import React, { useState } from 'react'
import Body from './Body'

import Header from './Header'
import Modal from './Modal'


const Dashboard = () => {

    const [isModalOpen, showModal] = useState(false);


    return (
        <div className='Dashboard'>
            <Header Content={`No of Survey: ${2}`} />
            <Body Show={isModalOpen} ModalFunction={showModal} />
            {isModalOpen && <Modal Show={isModalOpen} ModalFunction={showModal} />}
        </div>
    )
}

export default Dashboard