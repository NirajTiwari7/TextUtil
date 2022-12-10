
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , { useState } from 'react';
import Alert from './components/Alert';

function App() {
 
  const [mode, setMode] = useState('light'); // WHEATHER MODE IS ENABLE OR NOT
  const [alert, setAlert] = useState(null)


  const showAlert = (message , type)=>{
    setAlert({
      
      msg: message ,
      type: type,
      
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
    // apna aap 2second bad showalert chala jaya ga
  }

  

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls)=>{
     removeBodyClasses()
     document.body.classList.add('bg-'+cls)
     if (mode === 'light') {
      setMode('dark');
      //document.body.style.backgroundColor = '#0d0d0d';
      
     
     //  document.title = 'TextUtils - Dark Mode';
     
     // title change ho jaya ga dark mode enable karna sa

      // == [ JAISA KOI KOI WEBSITE MAI BLINK HOTA RAHA HAI KOI IMAGE YA TEXT KI PHONE MAI VIRUS HAI ETC ] { MAI BHI AISA HI KUCH KARNA CHAHTA PAR MAI TITLE KO BLINK KAR VANA CHAHTA HO  }
      /*
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 4000);
      */
    }
     else {
      setMode('light');
     // document.body.style.backgroundColor = 'white';
   
     // document.title = 'TextUtils - Light Mode'; 
     
     // -- title change ho jaya ga light mode enable karna sa

      
      // == [ JAISA KOI KOI WEBSITE MAI BLINK HOTA RAHA HAI KOI IMAGE YA TEXT KI PHONE MAI VIRUS HAI ETC ] { MAI BHI AISA HI KUCH KARNA CHAHTA PAR MAI TITLE KO BLINK KAR VANA CHAHTA HO  }
      /*
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);

      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 4000);
      */
    }
    }

  return (
   <> 
    

 
    <Navbar  title="TextUtils"  abouttext="About" mode={mode} toggleMode={toggleMode}  />

   <Alert alert={alert} />
   <div className="container my-3">

     
       <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
     </div>
   
   


 </>
  );
}

export default App;
