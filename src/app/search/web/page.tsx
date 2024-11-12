
import Link from 'next/link';
import {useSearchParams } from 'next/navigation';
import React from 'react';
import WebSearchResults from "../../components/WebSearchResults.jsx";
async function WebSearchPage({searchParams}) {
  const response = await fetch(` https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`);
  if(!response.ok){
    throw new Error("Failed to Fetch Data")
  }
  const data = await response.json();
  console.log(data);
  const results = data.items;
  if(!results){
    return(<div className='flex flex-col justify-center items-center mt-10'>
      <h1 className=' text-2xl text-red-500 mt-10'>No Results Found!!</h1>
      <Link className='p-3 rounded-lg bg-blue-500 text-gray-100 hover:brightness-110 hover:text-white cursor-pointer mt-5' href={'/'}>Go Back</Link>
    </div>)
  }
  return (
    <>
    {results && <WebSearchResults results={data}/>}
    </>
  )
}

export default WebSearchPage;