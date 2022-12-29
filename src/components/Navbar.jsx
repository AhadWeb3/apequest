import React, { useState } from 'react'
import { Logo } from "../assets"
export default function Navbar() {
    let Links = [
        { name: "APIs", link: "/" },
        { name: "Code", link: "/" },
        { name: "Community", link: "/" },
        { name: "Careers", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <header className=" md:ml-14 md:mr-10 m-[10px] mt-0">
            <div className="flex justify-between items-center">
                <img src={Logo} alt="logo" className=" object-contain max-w-[134px] sm:max-w-[168px]" />
                <ul className={`font-Inter font-semibold text-white bg-[#16161d] absolute md:bg-transparent w-full md:static md:flex md:gap-10 md:w-fit md:mt-0 z-[100] md:z-auto transition-all duration-500 ease-in ${open ? 'top-[3rem]' : 'top-[-490px]'}`} >
                    {
                        Links.map((link) => (
                            <li className=" text-lg p-5 ">
                                <a href={link.link}>
                                    {link.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div onClick={() => setOpen(!open)}
                    className="text-white text-4xl cursor-pointer md:hidden">
                    <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
                </div>
            </div>
        </header >
    )
}
//         