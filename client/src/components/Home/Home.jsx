import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className='bg-gray-50'>
            <div className="mx-auto w-full max-w-7xl z-50 font-poppins">
                <div className="relative text-black rounded-lg md:mx-16 mx-2 md:py-16">
                    <div className="relative max-w-screen-xl px-4 pb-20 pt-10 md:py-24 mx-auto md:px-6 lg:px-8">
                        <div className="max-w-xl md:mt-10 mt-96 space-y-8 text-center md:text-right md:ml-auto">
                            <h2 className="text-4xl font-bold md:text-3xl">
                                Download The App Now
                                <span className='hidden md:block text-3xl font-semibold font-akaya mt-4'>MYSticky<span className='font-bold text-orange-600 font-poppins'>Notes</span></span>
                            </h2>

                            <Link
                                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-80 cursor-pointer"
                                to="/"
                            >
                                <svg
                                    fill="white"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                &nbsp; Download now
                            </Link>
                        </div>
                    </div>

                    <div className="inset-0 w-full md:my-20 md:pt-1 pt-12 h-full absolute">
                        <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                        <h1 className='text-4xl relative font-medium mt-8 w-96 text-center'><span className='text-orange-600'>Type</span> it down</h1>
                    </div>
                </div>

                <div className="grid  place-items-center sm:mt-20">
                    <img className="md:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
                </div>
                <div className='flex flex-wrap justify-center'>
                    <h1 className="text-center text-2xl md:text-5xl py-10 font-medium inline-block">Make it</h1><span className='font-semibold text-2xl md:text-5xl text-orange-600 ml-2 md:ml-3 text-center py-10'>Stick</span>
                </div>
            </div>
        </section>
    );
}