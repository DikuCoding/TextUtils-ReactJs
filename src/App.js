// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,  { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
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
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
      // document.title = 'TextUtils - Light mode';
    }
  }
  return (
//From comment
<>
  <BrowserRouter>  
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3"/>
      <Routes>
        <Route exact path="/about" element={<About mode = {mode}/>} > 
        </Route>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try -TextUtils- word counter, character counter" mode={mode}/>}>                                                     
        </Route>
      </Routes>
      </BrowserRouter>
</>
  );
}
export default App;
