import React, { useContext } from 'react';
import './ProfileComponent.scss';
import {DataContext} from '../../App';
import user from './Assests/user.png';

const ProfileComponent = () => {
    const [data, setData] = useContext(DataContext);

    console.log(data)
    return(
        <div className='profile-component'>
            <div className='greetings-text'>
                <div className='greetings'>Hello,</div>
                <div className='user-name'>{data.userName}!</div>
                <span className='additional-text'>Copy your bio link and paste it in your</span>
            </div>
            <div className='profile-image'>
                <img className='user-img' src={user} alt='User'/>
            </div>
        </div>
    )
}

export default ProfileComponent;