import React, { useEffect, useState } from 'react'
import style from '../Contact/Contact.module.css'


export default function Contact() {
    useEffect(() => {
        // title Name
        document.title = 'Contact'
    }, []);

    const [isfocuse, setisFocuse] = useState({
        name: false,
        age: false,
        email: false,
        password: false
    });

    function handleFocuse(e) {
        setisFocuse({ ...isfocuse, [e.target.name]: true })
    }
    function handleBlur(e) {
        setisFocuse({ ...isfocuse, [e.target.name]: e.target.value.trim() !== "" })
    }


    return (
        <section className='pt-16 '>
            <div className='text-center'>
                <h1 className='text-center pb-5 text-3xl uppercase text-slate-800 font-bold'>
                    conatct section
                </h1>
                <div className={`${style.pseudo} relative inline`}>
                    <i className='fas fa-star text-slate-800'></i>
                </div>
            </div>
            <div className="w-11/12 md:w-3/4 mx-auto  py-10">
                <form action="">
                    <div className='mb-5 relative'>
                        <input onInput={(e) => handleFocuse(e)} onBlur={(e) => handleBlur(e)} placeholder='userName' type="text" id='name' name='name' className='placeholder:text-black placeholder:opacity-60 w-full outline-none border-b-2 rounded-b-md block p-4' />
                        <label htmlFor="name" className={`absolute top-full transition-all duration-500 opacity-0 text-custom-green  ${isfocuse.name ? style.goUp : ""}`}>userName :</label>
                    </div>
                    <div className='mb-5 relative'>
                        <input onInput={(e) => handleFocuse(e)} onBlur={(e) => handleBlur(e)} placeholder='userAge' type="number" id='age' name='age' className='placeholder:text-black placeholder:opacity-60 w-full outline-none border-b-2 rounded-b-md block p-4' />
                        <label htmlFor="age" className={`absolute top-full transition-all duration-500 opacity-0 text-custom-green  ${isfocuse.age ? style.goUp : ""}`}>userAge :</label>
                    </div>
                    <div className='mb-5 relative'>
                        <input onInput={(e) => handleFocuse(e)} onBlur={(e) => handleBlur(e)} placeholder='userEmail' type="email" id='Email' name='email' className='placeholder:text-black placeholder:opacity-60 w-full outline-none border-b-2 rounded-b-md block p-4' />
                        <label htmlFor="Email" className={`absolute top-full transition-all duration-500 opacity-0 text-custom-green  ${isfocuse.email ? style.goUp : ""}`}>userEmail :</label>
                    </div>
                    <div className='mb-5 relative'>
                        <input onInput={(e) => handleFocuse(e)} onBlur={(e) => handleBlur(e)} placeholder='userPassword' type="password" id='password' name='password' className='placeholder:text-black placeholder:opacity-60 w-full outline-none border-b-2 rounded-b-md block p-4' />
                        <label htmlFor="password" className={`absolute top-full transition-all duration-500 opacity-0 text-custom-green  ${isfocuse.password ? style.goUp : ""}`}>userPassword :</label>
                    </div>
                    <div>
                        <button onClick={(e) => e.preventDefault()} className='bg-custom-green text-white py-2 px-3 rounded-md mt-5'>send message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
