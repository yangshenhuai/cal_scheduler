import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { GlobalContext } from '../context/GlobalContext'
import dayjs from 'dayjs'
export default function Header() {
    const {date ,setDate } = useContext(GlobalContext)

    function handlePre() {
        setDate(date.subtract(1,'month'))
    }

    function handleNext() {
        setDate(date.add(1,'month'))
    }

    function handleToday() {
        setDate(dayjs())
    }

  return (
    <header className='px-4 py-2 flex items-center'>
        <img src={logo} alt='logo' className='mr-2 w-12 h-12' />
        <h1 className='mr-10 text-xl text-gray-500 fond-bold'>Calendar</h1>
        <button className='border rounded py-2 px-4 mr-5' onClick={handleToday}>
            Today
        </button>

         <button onClick={handlePre}>
           <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                chevron_left
            </span> 
        </button>


        <button onClick={handleNext}>
           <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                chevron_right
            </span> 
        </button>

        <h2 className='ml-4 text-xl text-gray-500 font-bold'>
            {
                dayjs(date).format('YYYY-MM')
            }
        </h2>

    </header>
  )
}
