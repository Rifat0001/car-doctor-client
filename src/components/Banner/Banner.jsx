import React from 'react';
import img1 from '../../../public/images/banner/1.jpg'
import img2 from '../../../public/images/banner/2.jpg'
import img3 from '../../../public/images/banner/3.jpg'
import img4 from '../../../public/images/banner/4.jpg'
import img5 from '../../../public/images/banner/5.jpg'
import img6 from '../../../public/images/banner/6.jpg';
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full rounded-xl h-[600px]">
                <div id="slide1" className="carousel-item  relative w-full">
                    <img src={img1} className="w-full " />
                    <div className="absolute  flex items-center h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 left-0  w-1/2">
                        <div className='ms-12 space-y-4 '>
                            <h1 className='text-5xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error text-white">Discover More</button>
                                <button className="btn ms-6 bg-white">Latest Project</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-8">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full rounded" />
                    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 left-0  w-1/2">
                        <div className='ms-12 space-y-4 '>
                            <h1 className='text-5xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error text-white">Discover More</button>
                                <button className="btn ms-6 bg-white">Latest Project</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-8">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full rounded" />
                    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 left-0  w-1/2">
                        <div className='ms-12 space-y-4 '>
                            <h1 className='text-5xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error text-white">Discover More</button>
                                <button className="btn ms-6 bg-white">Latest Project</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-8">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full rounded" />
                    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 left-0  w-1/2">
                        <div className='ms-12 space-y-4 '>
                            <h1 className='text-5xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error text-white">Discover More</button>
                                <button className="btn ms-6 bg-white">Latest Project</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-8">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;