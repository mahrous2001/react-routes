import React from 'react'

export default function Footer() {
    return (
        <footer className='relative text-center bg-custom-dark-blue text-white p-4 fw-bold '>
            <div className='sm:flex p-8'>
                <div className="py-8 sm:w-1/3">
                    <h3 className='font-semibold text-2xl mb-3'>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="py-8 sm:w-1/3">
                    <h3 className='font-semibold text-2xl mb-3'>AROUND THE WEB</h3>
                    <div className='flex justify-center items-center flex-wrap'>
                        <span className='flex justify-center items-center p-1 cursor-pointer'>
                            <span className='py-1 px-2 rounded-full border border-1 border-white'>
                                <i className='fa-brands fa-facebook'></i>
                            </span>
                        </span>
                        <span className='flex justify-center items-center p-1 cursor-pointer'>
                            <span className='py-1 px-2 rounded-full border border-1 border-white'>
                                <i className='fa-brands fa-twitter'></i>
                            </span>
                        </span>
                        <span className='flex justify-center items-center p-1 cursor-pointer'>
                            <span className='py-1 px-2 rounded-full border border-1 border-white'>
                                <i className='fa-brands fa-linkedin'></i>
                            </span>
                        </span>
                        <span className='flex justify-center items-center p-1 cursor-pointer'>
                            <span className='py-1 px-2 rounded-full border border-1 border-white'>
                                <i className='fa-solid fa-globe'></i>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="py-8 mb-16 sm:w-1/3">
                    <h3 className='font-semibold text-2xl mb-3'>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-slate-800">
                <p>Copyright © Your Website 2021</p>
            </div>
        </footer>
    )
}
