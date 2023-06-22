import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    useEffect(() => {
        // for sort data from asc to desc 
        fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc, search])
    const handleSearch = () => {
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value)
    }
    return (
        <div className='mt-40 mb-20'>
            <div className='text-center space-y-3 mb-10'>
                <p className='font-bold text-red-500 '>Service</p>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="mx-60">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                <button className='btn btn-error btn-outline' onClick={() => setAsc(!asc)}>
                    {
                        asc ? 'Price: High to Low' : 'Price: Low to High'
                    }
                </button>
            </div>
            <div className="form-control mb-4">
                <div className="input-group flex justify-center">
                    <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square btn-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1'>
                {
                    services.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;