'use client';

import { useState,useEffect} from "react";

function CountryLookUp() {
  const [country,setCountry] = useState("India");
  useEffect(()=>{
    fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.IP_API_KEY}`)
    .then((res) => res.json())
    .then((data)=>setCountry(data.country),[]);
  })
  return (
    <div>{country}</div>
  )
}

export default CountryLookUp;