'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
function HomeSearch() {
    const [input,setInput] = useState("");
    const[loading,setLoading] = useState(false);
    const[randomLoading,setRandomLoading] = useState(false);
    const router = useRouter();
    function handleSubmit(e){
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`)
    }
    async function handleRandom(){
        setRandomLoading(true)
        const response = await fetch("https://random-word-api.herokuapp.com/word")
        .then((res) => res.json())
        .then((data) => data[0]);
        if(!response) return;
        router.push(`/search/web?searchTerm=${response}`)
        setRandomLoading(false);
    }
  return (
    <>
        <form className="flex w-full ms-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-x-xl lg-max-w-2xl" onSubmit={handleSubmit}>
            <BsSearch className="text-xl text-gray-500 mr-3"/>
            <input type="text" className="flex-grow focus:outline-none" alt="Google logo" onChange={(e)=>setInput(e.target.value)}/>
            <FaMicrophone className="text-lg text-gray-500 mr-3"/>
        </form>
        <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-5 sm:flex-row justify-center mt-8">
            <button className="btn" onClick={handleSubmit}>
            {loading ? (
                <img src="loader.svg" alt="loading..." className="h-6 text-center"/>
            ):(
                "Google Search"
            )}
            </button>
            <button className="btn" onClick={handleRandom}>
            {randomLoading ? (
                <img src="loader.svg" alt="loading..." className="h-6 text-center"/>
            ):(
                "I am Feeling Lucky"
            )}</button>
        </div>
    </>
  )
}

export default HomeSearch