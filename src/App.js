// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,  { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
      setTimeout(() => {
        setAlert(null);
      }, 1500);


  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled" , "success");
      document.title = 'TextUtils - Dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
      document.title = 'TextUtils - Light mode';
    }
  }
  return (
//     <>
//     <Router>
//   <Navbar title="TextUtils" mode = {mode} aboutText = "About TextUtils" toggleMode = {toggleMode}/>
//   <Alert alert = {alert}/>
//   <div className="container my-3">
//     <Route>
//     <Route exact path="/about" element={<About/>} >
// </Route>
//         {/* <About/> */}
//       </Route>
//       <Route path ="/">
//       <TextForm showAlert = {showAlert} heading = "Enter the text to analyze"/>
//       </Route>
//     </Route>
//   </div> 
//   </Router>
//     </>

//From comment
<>

 
  <BrowserRouter>  
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3"/>
      <Routes>
        <Route exact path="/about" element={<About/>} > 
        </Route>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>                                                     
        </Route>
      </Routes>
      </BrowserRouter>
      
</>
  );
}

export default App;
