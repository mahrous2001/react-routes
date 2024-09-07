import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from '../Navbar/Navbar.module.css'

export default function Navbar() {
    const [isopen, setIsopen] = useState(false);
    const [isscrolled, setIsScrolled] = useState(false);
    function handleScroll() {
        (window.scrollY > 50) ? setIsScrolled(true) : setIsScrolled(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);
    return (
        <nav className={`bg-custom-dark-blue p-5 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isscrolled ? 'py-2' : 'py-5'}`}>
            <div className='lg:w-11/12 px-9 mx-auto lg:flex justify-between items-center '>
                <h1 className={`text-xl lg:text-3xl py-3 relative ${style.header}`}>
                    <Link className='uppercase font-bold text-white hover:text-white' to="">
                        Start Framework
                    </Link>
                </h1>
                {/* bars here */}
                <div onClick={() => setIsopen(!isopen)} className={`absolute right-8 top-7 border-2 cursor-pointer rounded-md w-12 h-10 flex justify-center items-center border-gray-800 text-center lg:hidden ${isopen ? 'outline outline-4 outline-gray-900 border-none' : 'outline-none'} transition-all duration-500 ${isscrolled ? 'top-4' : ''} ${style.bars}`}>
                    <i className='fas fa-bars text-2xl text-gray-800 font-bold'></i>
                </div>
                <ul className={`mt-2 lg:flex lg:static pl-14 lg:pl-0 py-5 items-center uppercase absolute bg-custom-dark-blue w-full lg:w-auto left-0 transition-all duration-500 ${isopen ? 'visible' : 'hidden'}`}>
                    <li>
                        <NavLink className='hover:text-white font-semibold text-white' to="about">About</NavLink>
                    </li>
                    <li className='my-5 lg:mx-7 lg:my-0'>
                        <NavLink className='hover:text-white font-semibold text-white' to="portfolio">portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:text-white font-semibold text-white' to="contact">contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
