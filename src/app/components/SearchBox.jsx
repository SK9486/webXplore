// In SearchBox.js or SearchBox.tsx
import React, { useState } from 'react';
import {useRouter, useSearchParams } from "next/navigation";
import { BsFillMicFill } from 'react-icons/bs';
import {RxCross2} from 'react-icons/rx';
import {AiOutlineSearch} from 'react-icons/ai';



export default function SearchBox() {
  const router = useRouter();
  function handlerSubmit(e){
    e.preventDefault();
    if(!inputValue.trim()) return;
    router.push(`/search?searchTerm=${inputValue}`)
    
  }
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("term") || "";
  const [inputValue,setInputValue] = useState(searchTerm||"");
  return (
    <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow mx-3xl items-center ' onSubmit={handlerSubmit}>
      <input type='text' className='w-full focus:outline-none' value={inputValue} onChange={(e)=>{setInputValue(e.currentTarget.value)}}/>
      <RxCross2 className='text-2xl text-gray-500 cursor-pointer sm:mr-2' onClick={()=>{setInputValue(" ")}}/>
      <BsFillMicFill className='hidden sm:inline-flex text-blue-500 cursor-pointer pl-4 border-l-2 border-gray-300'/>
      <AiOutlineSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer ' onClick={handlerSubmit}/>
    </form>
  );
}
