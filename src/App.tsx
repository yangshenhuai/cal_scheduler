import { useContext, useState } from 'react'
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Calendar from './components/Calendar';
import EventModal from './components/EventModal';
import { GlobalContext } from './context/GlobalContext';

function App() {
  const {showEventModal} = useContext(GlobalContext)
  return (
    <>
    {showEventModal &&   <EventModal />}
     <div className='h-screen flex flex-col'>
        <Header />
        <div className='flex flex-1'>
          <SideBar />
          <Calendar />
        </div>
     </div>
    </>
  )
}

export default App
