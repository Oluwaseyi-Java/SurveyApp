import React from 'react'
// import { useState } from 'react'
// import { FaCaretDown, FaCaretUp, FaToggleOff, FaToggleOn } from "react-icons/fa"

import "./user.css"


const Header = ({Content}) => {


  // const [isLight, setIsLight] = useState(false)


  // const ChangeMode = () => {
  //   setIsLight(!isLight)
  // }


  return (
    <header className="App-header">
      <h2>Client Feedback Survey</h2>
      <p>Name</p>
      <p>{Content}</p>
      <hr />
      
    </header>
    )
}

export default Header