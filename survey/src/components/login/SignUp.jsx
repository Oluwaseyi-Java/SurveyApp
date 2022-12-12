import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./signing.css"
import { FaEye, FaEyeSlash } from "react-icons/fa"

const SignUp = () => {

    const [register, setRegister] = useState({
        name: "",
        email: "",
        userName: "",
        phoneNo: "",
        password: ""
    })
    const [message, setMessage] = useState("")

    const [showPassword, setShowPassword] = useState(false)

    const HandleSubmit = (e) => {
        e.preventDefault();


        if ((register.name || register.email || register.userName || register.password) === "") {
            setMessage("All fields must be filled correctly!")
        }
        else {

            axios.post("http://localhost:5000/user/sign-up", {
                name: register.name,
                email: register.email,
                userName: register.userName,
                phoneNumber: register.phoneNo,
                password: register.password

            })
                .then(res => {
                    if (res.status === 200) {
                        window.location.assign("/login")
                    }
                    console.log(res)
                })
                .catch(err => {
                    setMessage(err.message)
                    console.log(err)
                })
        }
    }

    const HandleChange = (e) => {
        e.preventDefault();

        // const { name, email, userName, phoneNo, password } = e.target.name

        setRegister({
            ...register,
            [e.target.name]: e.target.value,

        })

    }

    return (
        <div className='SignUp'>
            <h1>Create account</h1>
            <p className='Intro'>We are excited to have you, Please fill in your details.</p>
            <section>
                <p className='error-message'>{message}</p>
                <form onSubmit={HandleSubmit}>
                    <div className='Input Name'>
                        <label htmlFor='name'>Name*</label>
                        <input
                            type="text"
                            name="name"
                            value={register.name}
                            onChange={HandleChange} />
                    </div>
                    <div className='Input Email'>
                        <label htmlFor='email'>Email*</label>
                        <input
                            type="email"
                            name="email"
                            value={register.email}
                            onChange={HandleChange} />
                    </div>
                    <div className='Input UserName'>
                        <label htmlFor='userName'>Username*</label>
                        <input
                            type="text"
                            name="userName"
                            value={register.userName}
                            onChange={HandleChange} />
                    </div>
                    <div className='Input PhoneNo'>
                        <label htmlFor='phoneNo'>Phone No.*</label>
                        <input
                            type="tel"
                            name="phoneNo"
                            value={register.phoneNo}
                            onChange={HandleChange} />
                    </div>
                    <div className='Input Password'>
                        <label htmlFor='password'>Password*</label>
                        <input
                            type={`${showPassword ? "text" : "password"}`}
                            name='password'
                            value={register.password}
                            onChange={HandleChange} />

                        {!showPassword && <FaEye className='eye'
                            onClick={() => {
                                setShowPassword(!showPassword)
                            }}
                        />}
                        {showPassword && <FaEyeSlash className='eye'
                            onClick={() => {
                                setShowPassword(!showPassword)
                            }}
                        />}
                    </div>
                    <button>Register</button>
                </form>
            </section>
            <div className='Newlink'>
                <p className='new'>Have an account? <span
                    onClick={() => {
                        window.location.assign("/login")
                    }}
                >Login</span></p>
            </div>
        </div>
    )
}

export default SignUp