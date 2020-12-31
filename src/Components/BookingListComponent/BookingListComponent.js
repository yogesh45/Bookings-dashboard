import React, { useContext } from 'react';
import BookingsComponent from '../BookingsComponent/BookingsComponent';
import { DataContext } from '../../App';
import './BookingListComponent.scss';

const BookingListComponent = () => {
    const [data, setData] = useContext(DataContext);
    return(
        <div className='bookings-list'>
            {
                data.bookings && data.bookings.length > 0 ? 
                data.bookings.map((booking) => {
                    return(
                        <BookingsComponent data={booking} />
                    )
                }) : ''
            }
        </div>
    )
}

export default BookingListComponent