import React from "react";
import exclamation from './Assests/exclamation.png';
import './RemainderComponent.scss';
import arrow_right from './Assests/arrow_right.png';

const RemainderComponent = () => {
    const remainderList = [
        {
            title : 'Booking Remainder',
            message : 'Lorem ipsum dolor sit amet',
            image : exclamation
        },
        {
            title : 'New Message',
            message : 'Lorem ipsum dolor sit amet',
            image : exclamation
        },
        {
            title : 'Upcoming Booking',
            message : 'Lorem ipsum dolor sit amet',
            image : exclamation
        }
    ]
    return(
        <div className='remainder-component'>
            <div className='remainder-title'>Remainders</div>
            <div className='view-all'>
                View All
                <img className='view-all-img' src={arrow_right} alt='View All' />    
            </div>
            {
                remainderList.map((remainder) => (
                    <div className='remainder'>
                        <img className='remainder-img' src={remainder.image} alt={remainder.title} />
                        <div className='remainder-message'>
                            <div className='message-title'>{remainder.title}</div>
                            <div className='message'>{remainder.message}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default RemainderComponent