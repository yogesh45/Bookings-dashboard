import React, { useContext, useEffect, useState } from "react";
import CardComponent from '../CardComponent/CardComponent';
import  "./CardListComponent.scss";
import { DataContext } from '../../App';
import Decrease from './Assests/decrease.png';
import increase from './Assests/increase.png';

const CardListComponent = () => {

    const [Data, setData] = useContext(DataContext);
    const [CardData, setCardData] = useState([])

    useEffect(() => {
        let tempCardJson = [
            {
                title : 'Total Bookings',
                value : Data.totalBookings,
            },
            {
                title : 'Pending Approval',
                value : Data.pendingApproval,
                color : '#f35162'
            },
            {
                title : 'New Clients this month',
                value : Data.newClientsthismonth,
                img:increase
            },
            {
                title : 'Returning Clients',
                value : Data.returningClients+'%',
                img:Decrease
            }
        ]
        setCardData(tempCardJson)
    }, [Data])

    return(
        <div className='card-list-component'>
            <div className='card-list-title'>Quick Stats</div>
            {
                CardData.map((data,index) => {
                    return(
                        <CardComponent key={index} cardData={data}/>
                    )
                })
            }
        </div>
    )
}

export default CardListComponent;