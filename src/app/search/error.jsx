'use client';
import React, { useEffect } from 'react'
function Error({error,reset}) {
    useEffect(()=>{
        console.log("Error : ",error);
        
    },[error])
  return (
    <div className='flex flex-col justify-center items-center mt-10' >
        <h1 className="text-3xl md-4">Something went wrong</h1>
        <button className='text-blue-500 mt-10' onClick={()=>reset()}>Try again</button>
    </div>
  )
}

export default Error;