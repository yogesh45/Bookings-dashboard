import React from "react";
import './SideBarComponent.scss'
import dashboardActive from './Assests/dashboard-active.png';
import graph from './Assests/graph.png';
import Logout from './Assests/logout.png';

const SideBarComponent = () => {
    return(
        <div className='sidebar-component'>
            <div className='sidebar-title'>
                <h1 className='title'>S</h1>
            </div>
            <div className='menu-icons'>
                <div className='active-dashboard=icon icons selected'>
                    <img className='sidebar-icons selected' src={dashboardActive} />
                </div>
                <div className='chart-icon'>
                    <img className='sidebar-icons' src={graph} />
                </div>
            </div>
            <div className='logout-icon'>
                <img className='logout-img' src={Logout} alt='logout' />
            </div>
        </div>
    )
}

export default SideBarComponent;