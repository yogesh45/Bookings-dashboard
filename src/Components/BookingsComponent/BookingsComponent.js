import React, {useState, useEffect} from "react";
import './BookingsComponent.scss';

const BookingsComponent = ({data}) => {

    const [cardJson, setCardJson] = useState({});
    
    useEffect(() => {
        setCardJson(data)
    }, [data])
    return(
        <div className='booking-card'>
            <h3 className='patient-name'>{cardJson.patientName}</h3>
            <div className='patient-service'>
                <span>{cardJson.type}</span>
                <div className='type-value'>{cardJson.typeValue}</div>
            </div>
            <div className='service-timing'>
                <div className='date'>
                    <span>Date</span>
                    <div className='type-value'>{cardJson.date}</div>
                </div>
                <div className='time'>
                    <span>Time</span>
                    <div className='type-value'>{cardJson.time}</div>
                </div>
            </div>
            <div className='card-action'>
                <div className='accept'>Accept Booking</div>
                <div className='decline'>Decline</div>
            </div>
        </div>
    )
};

export default BookingsComponent;