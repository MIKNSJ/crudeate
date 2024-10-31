import {IoMenu, IoClose} from "react-icons/io5";
import React, { useState } from 'react';

function Navbar() {
    const [navStatus, setNav] = useState(false)

    function navEnable() {
        setNav(!navStatus);
    }

    return (
        <div className="container mx-auto max-w-screen-xl py-4 px-8 select-none">
            <div className="text-white flex justify-between items-center w-100">
                <h1 className="font-bold text-3xl">crudeate</h1>
                <nav className="hidden md:block">
                    <ul className="flex justify-between items-center gap-10 uppercase">
                        <li>Home</li>
                        <li>About</li>
                        <li>Showcase</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                <div onClick={navEnable} className="block md:hidden z-30">
                    {navStatus ? <IoClose size={50}/> : <IoMenu size={50}/>}
                </div>

                <nav className={navStatus ? "bg-[#1E272E] z-20 fixed w-[45%] h-full top-0 right-0 border-l border-slate-700 md:hidden ease-in-out duration-500 -right-[100%]" : "bg-[#1E272E] z-20 fixed w-[45%] h-full top-0 right-0 border-l border-slate-700 md:hidden ease-in-out duration-500 -right-[50%]"}>
                    <ul className="flex flex-col items-end pt-36 px-10 gap-10 uppercase">
                        <li className="nav_link">Home</li>
                        <li className="nav_link">About</li>
                        <li className="nav_link">Showcase</li>
                        <li className="nav_link">Pricing</li>
                        <li className="nav_link">Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
