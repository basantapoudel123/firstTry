import React, { useState } from 'react'
import Alert from './Alert';
// import logo from './logo.svg';
import Navbar from './Navbar';
// import './App.css';
import TextForm from './TextForm';
// import About from './About';
// import Welcome from './welcome';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#060228';
      showAlert(" Dark Mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode is enabled","success");

    }
  }
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }
  return (
    <>
    {/* <Navbar title="Navbar" aboutus ="About Us"/> */}
    {/* <Navbar /> */}
    <Navbar title="NavBar" aboutus="About Us" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Write Comment in box below" mode={mode}/>
    {/* <About /> */}
    </div>
    
</>
  );
}

export default App;

