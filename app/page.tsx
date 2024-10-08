"use client"
import Image from "next/image";
import CountryName from "./country/[country_name]/page";
import Nav from '../components/nav';

export default function Home() {
  return (
    <div>
      <Nav/>
      <div className="flex flex-col w-max mt-16">
<h1 className="bg-blue-500 text-3xl px-10 rounded-3xl mb-2">Hello</h1>
<h1 className="bg-blue-400 text-3xl px-10 rounded-3xl mb-2">welcome to my nextJS</h1>
<h1 className="bg-blue-500 text-3xl px-10 rounded-3xl mb-2" >Application with Dynamic Route </h1>
      </div>
    </div>
  )
}