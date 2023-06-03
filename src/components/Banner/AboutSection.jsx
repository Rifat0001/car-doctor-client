import React from 'react';
import person from '../../../public/images/about_us/person.jpg';
import parts from '../../../public/images/about_us/parts.jpg';

const AboutSection = () => {
    return (
        <div className="my-20 h-[400px]">
            <div className="hero-content flex-col lg:flex-row m-0 p-0">
                <div className='w-1/2 relative'>
                    <img src={person} className=" w-96 h-96 rounded-lg shadow-2xl" />
                    <img src={parts} className="  w-72 h-72 absolute right-40 border-8 border-white top-44 rounded-lg shadow-2xl" />

                </div>

                <div className='w-1/2 space-y-2'>
                    <p className='font-bold text-red-500 '>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <button className="btn btn-error text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;