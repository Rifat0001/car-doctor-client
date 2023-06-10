import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    console.log(bookings)
    const url = `https://car-doctor-server-eta-two.vercel.app//bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setBookings(data)
                }
                else {
                    navigate('/');
                }
            })
    }, [url, navigate])

    const handleDelete = id => {
        Swal.fire({
            title: 'Delete this service?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-eta-two.vercel.app//bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your service has been deleted.',
                                'success'
                            )
                            // for filter deleted items 
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining)
                        }
                    })
            }
        })
    }

    const handleConfirm = id => {
        fetch(`https://car-doctor-server-eta-two.vercel.app//bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // for filter deleted items 
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)
                }
            })
    }

    return (
        <div className='px-40'>
            <h1>Your Booking:{bookings.length} </h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Img</th>
                            <th>Service</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking =>
                                <tr key={booking.id}>
                                    <td><button onClick={() => handleDelete(booking._id)} className="btn btn-sm btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button></td>
                                    <td>
                                        <div className="w-20 rounded">
                                            <img className='rounded-lg' src={booking.img} />
                                        </div>
                                    </td>
                                    <td>{booking.service_title}</td>
                                    <td>{booking.customerName}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.price}</td>
                                    <td>
                                        {
                                            booking.status === 'confirm' ? <span className='font-bold text-green-500'>Confirmed</span> : <button onClick={() => handleConfirm(booking._id)} className='btn-sm btn-error rounded-md text-white'>Please Confirm</button>
                                        }
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;