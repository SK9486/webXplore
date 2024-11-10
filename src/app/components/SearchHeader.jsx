'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchBox from './SearchBox';
import SearchHeaderOptions from './SearchHeaderOptions';

function SearchHeader() {
  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-between p-4">
        <Link href="/">
          <Image
            width={120}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google Logo"
          />
        </Link>
        <div className="flex-1 mx-6">
          <SearchBox />
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <RiSettings3Line className="text-2xl text-gray-600 cursor-pointer" />
          <TbGridDots className="text-2xl text-gray-600 cursor-pointer" />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all">
          Sign In
        </button>
      </header>
      <SearchHeaderOptions />
    </div>
  );
}

export default SearchHeader;
