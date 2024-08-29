import React from 'react';
import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import jobs from '../assets/jobs.png';
import background from '../assets/background.jpg'; // Replace with your actual background image path

const Hero = () => {
    return (
        <section className='relative w-full h-screen'>
            {/* Background Image */}
            <div
                className='absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat opacity-90  bg-center z-0'
                style={{ backgroundImage: `url(${background})` }}
            ></div>


            {/* Content */}
            <div className='relative z-50 flex max-sm:flex-col-reverse  hero gap-5 max-md:pt-8 w-full sm:justify-center px-5 max-sm:px-3 pt-5'>
                <div className="left-section max-sm:w-full w-[60%]">
                    <h1 className='text-4xl max-lg:text-3xl font-semibold '>Unlock Your Future:</h1>
                    <div className=" text-4xl max-lg:text-2xl max-[430px]:hidden mt-6 sm:h-14 max-sm:text-red-700  font-bold typewriter-text text-blue-800">
                        <Typewriter
                            options={{
                                strings: [
                                    'Explore Tailored Opportunities ',
                                    'Discover Jobs that Match Your Skills',
                                    'Connect with Top Employers Seeking '
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 20,
                                deleteSpeed: 10,
                                cursor: '!'
                            }}
                        />
                    </div>


                    <p className=' font-light text-lg mt-8 w-[80%]'>
                        <span className=' text-xl font-normal '>Ready to take the next step in your career?</span>
                        Register with us today and fill out a simple form to start exploring job opportunities tailored just for you.
                        Join a community of professionals and connect with top employers who are looking for talent like yours.
                        Your dream job is just a few clicks away!
                    </p>

                    <h4 className='text-xl mt-4 max-lg:hidden'>Click the sign-in button below to fill the registration form</h4>

                    <div className="sign-up-button mt-7">
                        <NavLink to="/signup" className='inline-block px-10 py-3 bg-[#007bff] text-white rounded-lg hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-blue-500'>
                            Sign-up
                            <i className="pl-1.5 fa-solid fa-arrow-right-from-bracket"></i>
                        </NavLink>
                    </div>
                </div>

                <div className="right-section max-lg:mt-20 max-sm:w-[60%] max-sm:m-auto text-center w-[40%]">
                    <img src={jobs} alt="Jobs Illustration" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
