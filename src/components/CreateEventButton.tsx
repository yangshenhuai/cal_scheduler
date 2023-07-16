import React, { useContext } from 'react'
import plusImg from '../assets/plus.png'
import { GlobalContext } from '../context/GlobalContext'
export default function CreateEventButton() {
  const {setShowEventModal} = useContext(GlobalContext)
    

  return <button className='border p-2 rounded-lg flex items-center shadow-md hover:shadow-2xl' onClick={() => setShowEventModal(true)}>
        <img src={plusImg} alt='plus' className='w-7 h-7' />
        <span className='pl-3 pr-7'>Create</span>
</button>
  
}
