'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai';

function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  // Function to handle tab selection and routing
  function selectTab(tab) {
    // Update the URL with the appropriate tab
    if (tab === "All") {
      router.push(`/search/web?searchTerm=${searchTerm}`);
    } else if (tab === "Images") {
      router.push(`/search/image?searchTerm=${searchTerm}`);
    }
  }

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm ">
      <div onClick={() => selectTab("All")} className='flex'>
        <div className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/web" && "!text-blue-600 !border-blue-600"}`}>
          <AiOutlineSearch className='text-md'/>
          <p className="">All</p>
        </div>
      </div>

      <div onClick={() => selectTab("Images")} className='flex'>
        <div className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/image" && "!text-blue-600 !border-blue-600"}`}>
          <AiOutlineCamera className='text-md'/>
          <p className="">Images</p>
        </div>
      </div>
    </div>
  );
}

export default SearchHeaderOptions;
