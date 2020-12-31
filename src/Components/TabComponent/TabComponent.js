import React, { useState } from 'react';
import './TabComponent.scss';

const TabComponent = () => {
    const [selectedTab, setSelectedTab] = useState('bookings')
    const tabComponentJSON = [
        {
            name : 'Bookings',
            value : 'bookings'
        },
        {
            name : 'Enquiries',
            value : 'enquiries'
        },
        {
            name: 'My Service',
            value : 'my_service'
        }
    ]
    return(
        <div className='tabComponent'>
            {
                tabComponentJSON.map((tab) => (
                    <div className={ selectedTab === tab.value ?  'tabs selected' : 'tabs'} onClick={() => setSelectedTab(tab.value)}>
                        <div className='tab-value'>{tab.name}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default TabComponent