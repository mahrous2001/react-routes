import React, { useEffect } from 'react'
import style from '../About/About.module.css'

export default function About() {
    useEffect(() => {
        // title Name
        document.title = 'About'
    }, []);

    return (
        <section className='bg-custom-teal pt-16 h-screen'>
            <div className='relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='text-center'>
                    <h1 className='text-center pt-14 pb-5 text-4xl uppercase text-white font-bold'>
                        about component
                    </h1>
                    <div className={`${style.pseudo} relative inline`}>
                        <i className='fas fa-star text-white'></i>
                    </div>
                </div>
                <div className="pt-10 flex flex-col justify-between container mx-auto w-8/12 text-white md:flex-row md:items-center pb-20 ">
                    <div className='p-5 pb-0'>
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className='p-5'>
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
