import React  from 'react'
import {Link,Route,Routes,Switch} from "react-router-dom";
import NavBar from './NavBar';
// import Stories from './Stories';
// import ScrollButton from './ScrolTo';
// import AddToNote from './AddToNote';
// import Search from './Search';
import Meme from "./Meme";
import Main from './Main';
import NotFound from './NotFound';
import Aboutus from './Aboutus';
 import Login from './Login';


// import { useGlobal } from './Context';  // custom hook


export default function App () {
  
  return (
    
      <>

      
       
       <Routes >
 

  <Route path="/" element={<NavBar />} >

    <Route index element={<Main />} />
    <Route path="Meme" element={<Meme />} />
    <Route path="Login" element={<Login />} />
    <Route path="Aboutus" element={<Aboutus />} />

    

    <Route path="*" element={<NotFound />} /> 

</Route>
  

  

</Routes>

        {/* <Main/> */}
       
        
        {/* <Meme/> */}

      

        </>
    
  );
}

