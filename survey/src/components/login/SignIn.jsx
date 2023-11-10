import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import "./signing.css"
import { useEffect } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa"

const Details = () => {
    let data = localStorage.getItem("Details")
    if (data) {
        return JSON.parse(localStorage.getItem("Details"))
    }
    else {
        return {
            email: "",
            password: ""
        }
    }
}


const SignIn = () => {

    const [details, setDetails] = useState(Details)
    const [login, setLogin] = useState({
        email: details.email,
        password: details.password
    })

    const [message, setMessage] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [checked, setChecked] = useState(details.isChecked)

    useEffect(() => {
        setDetails(Details)
    }, [])



    const HandleSubmit = (e) => {
        e.preventDefault();

        if (login.email === "" || login.password === "") {
            setMessage("Email and a password is needed.")
        }
        else {
            axios.post("http://localhost:5000/user/login", {
                email: login.email,
                password: login.password
            })
                .then(res => {
                    console.log(res)
                    setMessage(res.data.message)
                    if (res.status === 400) {
                        setMessage("This account does not exist, please try signing in instead.")
                    }
                    if (res.status === 201) {
                        window.localStorage.setItem("UserData", JSON.stringify(res.data))
                        window.location.assign(`/${res.data.id}/dashboard`)
                    }
                })
                .catch(error => {
                    // setMessage(error.message)
                    console.log(error)
                })
        }

    }

    return (
        <section>
            <div className='SignIn'>
                <h1>Welcome back,</h1>
                <p className='Into_text'>Login to continue...</p>
                <section>
                    <p className='error-message'>{message}</p>
                    <form onSubmit={HandleSubmit}>
                        <div className='Input Input'>
                            <label htmlFor='email' >Email*</label>
                            <input type="email"
                                value={login.email}
                                name="email"
                                onChange={(e) => {
                                    e.preventDefault();
                                    setLogin({
                                        ...login,
                                        email: e.target.value
                                    })
                                }} />

                        </div>
                        <div className='Input Password'>
                            <label htmlFor='password' >Password*</label>

                            <input
                                type={`${showPassword ? "text" : "password"}`}
                                value={login.password}
                                name="password"
                                onChange={(e) => {
                                    e.preventDefault();
                                    setLogin({
                                        ...login,
                                        password: e.target.value
                                    })
                                }} />
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
                        <div className='remember-me'>
                            <p>Remember me </p>
                            <input type="checkbox"
                                name='remember'
                                checked={checked}
                                value={checked}
                                onChange={(e) => {
                                    setChecked(e.target.checked)
                                    if (e.target.checked) {
                                        if ((login.email || login.password) === "") {
                                            setMessage("Email and a password is needed")
                                        } else {
                                            setMessage("")
                                            window.localStorage.setItem("Details", JSON.stringify({
                                                isChecked: e.target.checked,
                                                email: login.email,
                                                password: login.password
                                            }))
                                        }
                                    } else {

                                        setMessage("")
                                    }
                                }}
                            />

                        </div>
                        <button>Login</button>
                    </form>
                </section>

                <div className='Newlink'>
                    <p className='new'>New member? <span
                        onClick={() => {
                            window.location.assign("/signup")
                        }}
                    >Sign up/Register</span></p>
                </div>
            </div>
        </section>
    )
}

export default SignIn