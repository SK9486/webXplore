'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb'; // Corrected import here
import SearchBox from './SearchBox';
import SearchHeaderOptions from './SearchHeaderOptions';

function SearchHeader() {
  
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex-w-full p-6 items-center justify-between">
        <Link href={'/'}>
          <Image
            width={120}
            height={40}
            src={"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"}
            alt="Google Logo"
          />
        </Link>
      </div>
      <div className="flex-1">
        <SearchBox />
      </div>
      <div className="hidden md:inline-flex space-x-2 ">
        <RiSettings3Line className="header-icon"/>
        <TbGridDots className="header-icon"/>
      </div>
      <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all">Sign In</button>
      <SearchHeaderOptions/>
    </header>
  );
};

export default SearchHeader;
