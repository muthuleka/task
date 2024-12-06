import React, { useState } from 'react'
import "./Navbar.css"
const Navbar = () => {
const[data,setdata]=useState("first")
function getdata1(event) {
    setdata(event)
    
}
console.log(data); 

  return (
    <>
      <div className='box'>
        <div className='box1'>
    <button onClick={()=>getdata1("first")}>Home</button>
    <button onClick={()=>getdata1("second")}>About</button>
    <button onClick={()=>getdata1("third")}>Blog</button>
    <button onClick={()=>getdata1("fourth")}>Portfolio</button>
    <button onClick={()=>getdata1("five")}>Contact</button>
        </div>
        <div className='box2'>
            {data=="first" && 
            <div className='home' id='first'>
            <h1>Home</h1>
        </div>}
            {data=="second" &&
            <div className='home' id='second'>
            <h1>About</h1>
        </div>}
           {data=="third" && 
            <div className='home' id='third'>
            <h1>Blog</h1>
        </div>}
           {data=="fourth" && 
            <div className='home' id='fourht'>
            <h1>Portfolio</h1>
        </div>}
          {data=="five" && 
            <div className='home' id='five'>
            <h1>Contact</h1>
        </div>}
        </div>
      </div>
    </>
  )
}

export default Navbar






