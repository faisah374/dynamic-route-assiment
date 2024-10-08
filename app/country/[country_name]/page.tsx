"use client"
import Link from "next/link";
import React from "react";
import { Countries } from "@/app/types/type";

function  CountryName({params}:{params:{country_name: string}}) { 

 const Countries: Countries[] = [
    {
    name:"Pakistan",
    capital:"islamabad",
    population:240000000, 
},
 {
    name:"India",
    capital:"Delhi",
    population:1300000000, 
},
 {
    name:"SuadiaArab",
    capital:"Riyadh",
    population:40000000, 
},
 {
    name:"japan",
    capital:"Tokoyo",
    population:240000000, 
},
 {
    name:"China",
    capital:"Bejejing",
    population:240000000, 
},
 {
    name:"Iran",
    capital:"Thran",
    population:240000000, 
}
]




 const country= Countries.find(
     (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
 );

 if(!country){
    return(
      <div className="h=96 flex items-center justify-center">
        <h1 className="text-white items-center text-7xl font-bold bg-black px-6 py-4 rounded-xl">
            {params.country_name} country not found
        </h1>
      </div>  
    );
 }

return(
    <div className="w-max h-max bg-gray-300 shadow-2xl shadow-slate-800 py-8 m-auto mt-20 rounded-3xl font-bold">
        <div className="text-3xl py-2"> Name : {country.name}</div>
        <div className="text-3xl py-2">Captital :  {country.capital}</div>
        <div className="text-3xl py-2"> population: {country.population}</div>

        <button className="bg-red-600 ml-36 mt-10 px-4 py-1 rounded-full duration-100 text-white hover:ease-linear hover:scale-110">
            <a  href={"#/country"}>back</a> {"countrylist"} </button>
    </div>
)
    }
    
   export default CountryName