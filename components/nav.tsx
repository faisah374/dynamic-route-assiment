import Link from "next/link";
import About from '../app/about/page';

export default function Nav( ){
    return(
        <div>
            <header className="bg-black text-white w-full">
       <nav className="flex list-none  justify-center gap-16 h-20 item-center text-2xl">
        <ul className="flex gap-4 items-center justify-rirht text-white cursor-pointer hover:bg-slate-600">
      <li className=" ease duration-300 hover:text-yellow-400 cursor-pointer">
        <Link href={"/"}>Home</Link></li>
        <li className="ese duration-300 hover:text-yellow-400 cursor-pointer">
        <Link href={"/app/about"}>About</Link></li>
     <li className="ese duration-300 hover: text-yellow-400 cursor-pointer">
        <Link href={"/country"}>country List</Link></li>
                                </ul>

                </nav>

            </header>
        </div>
    )
}