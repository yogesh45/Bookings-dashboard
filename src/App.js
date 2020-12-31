import { useState, createContext, useEffect } from 'react';
import './App.css';
import BookingListComponent from './Components/BookingListComponent/BookingListComponent';
import SideBarComponent from './Components/SideBarComponent/SideBarComponent';
import SearchComponent from "./Components/SearchComponent/SearchComponent";
import ProfileComponent from "./Components/ProfileComponent/ProfileComponent";
import NotificationIcon from './Assests/Notifications.png'
import RemainderComponent from './Components/RemainderComponent/RemainderComponent';
import CardListComponent from './Components/CardListComponent/CardListComponent';
import TabComponent from './Components/TabComponent/TabComponent';
export const DataContext = createContext( [ {}, () => {}] );

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/arun6202/reactjs_assignment/main/data.json')
      .then(response => response.json())
        .then(result => setData(result))
  }, [])
  return (
    <div className="App">
      <div id='dashboard-page' className='dashboard-page'>
          <div className='side-bar'>
            <SideBarComponent />
          </div>
          <DataContext.Provider value = {[data,setData]}>
            <div className='main-container'>
              <h1 className='heading'>Dashboard</h1>
              <span className='welcome-text'>Welcome Back!</span>
              <CardListComponent />
              <TabComponent />
              <BookingListComponent />
            </div>
            <div className='right-container'>
              <div className='header'>
                <div className='search'>
                  <SearchComponent />
                </div>
                <div className='notifications'>
                  <img className='notification-icon' src={NotificationIcon} alt='Notification Icon' />
                </div>
              </div>
              <ProfileComponent />
              <RemainderComponent />
            </div>
          </DataContext.Provider>
      </div>
    </div>
  );
}

export default App;
