import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import "./Myaxios.css"

const Myaxios = () => {
    const [arrays,setarrays] = useState([])


    async function check(params) {
        try {
            let result = await axios.get("https://fakestoreapi.com/products")
            console.log(result);
            let mydata = result.data
            console.log(mydata);
            setarrays(mydata)
            
            
        } catch (err) {
            console.log(err);
            
        }
        
    }
    check()
  return (
    <>
    {arrays.map (function (data){
        return(
            <div className='head'>
                <div className='head_img'> 
                    <img src={data.image} alt="" />
                </div>
                <div className='head_con'>
                    <h2>{data.title}</h2>
                    <h2>{data.rating.rate}</h2>
                    <h2>{data.rating.count}</h2>
                </div>

            </div>
        )
})}
    </>
  )
}

export default Myaxios



