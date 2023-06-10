import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-eta-two.vercel.app//services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-40 mb-20'>
            <div className='text-center space-y-3 mb-10'>
                <p className='font-bold text-red-500 '>Service</p>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="mx-60">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
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