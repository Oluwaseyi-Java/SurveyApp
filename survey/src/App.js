
import React from "react"
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Client from "./components/Client/Client";
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import Dashboard from './components/User/Dashboard';
import SurveyBuilder from "./components/User/Surveybuilder"
import FeedBack from "./components/User/FeedBack";


function App() {

  // const HandleSurvey = (e) => {
  //   e.preventDefault()

  //   axios.post("http://localhost:5000/user/createsurvey/632a3a8dd8a18c1b71d4372c", {
  //     title: "first-survey"
  //   })
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // const HandleResponse = (e) => {
  //   e.preventDefault();

  //   axios.post("http://localhost:5000/user/response/survey/first-survey/:surveyid", {
  //     response: "prototype"
  //   })
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // const HandleQuestion = (e) => {
  //   e.preventDefault();

  //   axios.post("http://localhost:5000/user/create/632a29f10b4ba05c4c31a367/632a2acd0b4ba05c4c31a36e/second-survey", {
  //     headTitle: "testing",
  //     inputType: "text",
  //     type: "string",
  //     isOption: false,
  //     options: [],
  //     isRequired: true
  //   })
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  return (
    <div className="App">

      <Routes>

        <Route path="*" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/:userId/dashboard" element={<Dashboard />} />
        <Route path="/:userId/feedback" element={<FeedBack />} />
        <Route path="/:userId/surveyBuilder" element={<SurveyBuilder />} />
        <Route path="/:postId/client" element={<Client />} />
      </Routes>



    </div>

    // <button onClick={HandleLogin}>Login</button>
    // <button onClick={HandleSignUp}>SignUp</button>
    // <button onClick={HandleSurvey}>Create a survey</button>
    // <button onClick={HandleResponse}>Response</button>
    // <button onClick={HandleQuestion}>Question</button>

  );
}

export default App;
