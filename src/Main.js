import React  from 'react'
import Stories from './Stories';
import ScrollButton from './ScrolTo';
import AddToNote from './AddToNote';
import Search from './Search';



export default function Main() {
  return (
   
   <div className="mainpage">

    <AddToNote/>
        <Search/>
        <Stories/>
        <ScrollButton/>

        </div>
  
  )
}
