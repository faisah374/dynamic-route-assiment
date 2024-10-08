
import Link from "next/link";
import Nav from "@/components/nav";

export default function Country(){
    return(
        <div>
            <Nav/>
            <div className="h-max w-80 bg bg-sky-200 m-auto rounded-3xl font-semibold">
                <h1 className="text-4xl text-center py-8" >Country list</h1>
                <ul className=" list-none flex justify-center flex-col items-center gap-4 text-white text-center">
                    <li className="text-lg py-2 bg-blue-700 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110">
                        <a className="p-4 py-1 " href={"#/country/pakistan"}>Pakistan</a></li>

                       < li className="text-lg py-2 bg-blue-700 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110">
                        <a className="p-4 py-1 " href={"#/country/india"}>India</a></li>

                        <li className="text-lg py-2 bg-blue-700 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110">
                        <a className="p-4 py-1 " href={"#/country/china"}>China</a></li>

                        <li className="text-lg py-2 bg-blue-700 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110">
                        <a className="p-4 py-1 " href={"#/country/japan"}>Japan</a></li>

                        <li className="text-lg py-2 bg-blue-700 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110">
                        <a className="p-4 py-1 " href={"#/country/suadiarab"}>suadiarab</a></li>
                        </ul>

            </div>
        </div>
    )
}