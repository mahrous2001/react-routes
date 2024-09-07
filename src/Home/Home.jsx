import React, { useEffect } from 'react'
import homeImg from '../assets/avataaars.svg'
import style from '../Home/Home.module.css'
export default function Home() {

    useEffect(() => {
        // title Name
        document.title = 'Home'
    }, []);

    return (
        <section className='flex flex-col items-center justify-center bg-custom-green h-screen'>
            <div className='w-50 pt-14 pb-10'>
                <img className='w-full' src={homeImg} alt="" />
            </div>
            <div className='pb-5'>
                <h1 className={`text-6xl text-center font-bold text-white ${style.small}`}>start Framework</h1>
            </div>
            <div className={`${style.pseudo} relative inline`}>
                <i className='fas fa-star text-white'></i>
            </div>
            <p className='text-white pt-4 text-center'>Graphic Artist - Web Designer - Illustrator</p>
        </section>
    )
}
