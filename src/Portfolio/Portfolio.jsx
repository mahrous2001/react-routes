import React, { useEffect, useState } from 'react'
import style from '../Portfolio/Portfolio.module.css'
import img1 from '../assets/poert1.png'
import img2 from '../assets/port2.png'
import img3 from '../assets/port3.png'
export default function Portfolio() {
    const imgs = [img1, img2, img3, img1, img2, img3];
    const [selectedImg, setselectedImg] = useState(null);
    const [isopen, setIsOpen] = useState(false);


    function handleImg(index) {
        setselectedImg(index);
        setIsOpen(true);
    }

    function closeImg() {
        setselectedImg(null)
        setIsOpen(false);
    }

    function nextImg() {
        setselectedImg(prevIndex =>
            (prevIndex === imgs.length - 1 ? 0 : prevIndex + 1)
        );
    }

    function preImg() {
        setselectedImg(prevIndex =>
            (prevIndex === 0 ? imgs.length - 1 : prevIndex - 1)
        );
    }

    function handleKeyDown(e) {
        if (e.key === 'ArrowRight') {
            nextImg();
        } else if (e.key === 'ArrowLeft') {
            preImg();
        } else if (e.key === 'Escape') {
            closeImg();
        }
    }

    useEffect(() => {
        // title Name
        document.title = 'portfolio';

        // keyboard Event
        if (isopen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isopen]);


    return (
        <section className='pt-16 '>
            <div className='text-center'>
                <h1 className='text-center pb-5 text-3xl uppercase text-slate-800 font-bold'>
                    portfolio component
                </h1>
                <div className={`${style.pseudo} relative inline`}>
                    <i className='fas fa-star text-slate-800'></i>
                </div>
            </div>

            <div className='container md:w-11/12 mx-auto flex flex-wrap justify-center flex-col items-center md:flex-row '>
                <div onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        closeImg();
                    }
                }}
                    className={`fixed top-0 bottom-0 left-0 right-0 bg-blue-600 bg-opacity-25 z-10 flex justify-center items-center ${isopen ? 'visible' : 'hidden'}`}>
                    {selectedImg !== null && (
                        <>
                            <button onClick={closeImg} className='z-20 text-6xl absolute top-24 right-6 text-slate-800'>x</button>
                            <div className='w-full sm:mt-20 sm:w-2/4 relative'>
                                <i onClick={nextImg} className='z-30 cursor-pointer fas fa-angle-right absolute right-2 top-1/2 -translate-y-1/2 text-slate-800 text-2xl bg-white p-4 rounded-full'></i>
                                <i onClick={preImg} className='z-30 cursor-pointer fas fa-angle-left absolute left-2 top-1/2 -translate-y-1/2 text-slate-800 text-2xl bg-white p-4 rounded-full'></i>
                                <img src={imgs[selectedImg]} alt="" className=' w-full' />
                            </div>
                        </>
                    )}
                </div>

                {imgs.map((img, index) =>
                    <div key={index} className=' w-full md:w-1/2 lg:w-1/3 py-6 md:p-6'>
                        <div className='rounded-md cursor-pointer relative '>
                            <div onClick={() => handleImg(index)} className='absolute inset-0 bg-custom-teal flex justify-center items-center opacity-0 hover:opacity-90 rounded-md transition-all duration-500'>
                                <i className='fas fa-plus text-8xl text-white'></i>
                            </div>
                            <img src={img} alt="" className='w-full rounded-md' />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
