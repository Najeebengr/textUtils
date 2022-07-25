import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#263e72';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils- Dark Mode";

    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" myLinks="About" mode ={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
            </Route>
      </Routes>      
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
