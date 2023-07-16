import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import dayjs from 'dayjs'

export default function EventModal() {
   const {setShowEventModal} = useContext(GlobalContext)
   const [title,setTitle] = useState('')
   const [description,setDescription] = useState('')
   const [location,setLocation] = useState('')
   const [allDay,setAllDay] = useState(true)
   const [startEventDate,setStartEventDate] = useState(dayjs().toDate())
   const [endEventDate,setEndEventDate] = useState(dayjs().toDate())
  return (
    <div className="h-screen w-screen fixed left-0 top-0 flex justify-center items-center ">
        <form className='bg-white rounded-lg shadow-2xl w-1/3'>
            <header className='bg-gray-100 px-4  py-2 flex justify-between items-center'>
                <span className='material-icons-outlined text-gray-400' >
                    drag_handle
                </span>
                <button onClick={() => setShowEventModal(false)}>
                    <span className='material-icons-outlined text-gray-400 cursor-pointer'> 
                        close
                    </span>
                </button>
            </header>
            <div className="p-3">
               
                <div className="grid grid-cols-1/6 items-end gap-y-7">
                     <div></div>
                    <input type="text" name='title' value={title} placeholder='Add Title' required 
                    className='pt-3 border-0 text-gray-600 text-xl 
                     font-semibold pb-2 w-full border-b-2 border-gray-200 
                     focus:outline-none focus:ring-0 focus:border-blue-500' 
                     onChange={(e) => setTitle(e.target.value)}
                     />
                
                    
                    <div className='flex items-center ml-8'>
                        <span className='material-icons-outlined text-gray-400 cursor-pointer mr-2'> 
                            schedule
                        </span>
                        <DatePicker className=' border-b-2 border-gray-200  focus:outline-none focus:ring-0 focus:border-blue-500 mr-2'
                        selected={startEventDate} 
                        onChange={(date: Date) => setStartEventDate(date)} 
                        dateFormat={'yyyy-MM-dd'} />
                        <span className=''>-</span>
                        <DatePicker className=' border-b-2 border-gray-200  focus:outline-none focus:ring-0 focus:border-blue-500 ml-2'
                        selected={endEventDate} 
                        onChange={(date: Date) => setEndEventDate(date)} 
                        dateFormat={'yyyy-MM-dd'} />
                    </div>
                    <div className="flex items-center ml-8">
                            <input
                            type="checkbox"
                            name="allDay"
                            checked={allDay}
                            className="mr-2"
                            onChange={(e) => setAllDay(e.target.checked)} //TODO update the data picker type to display the time
                            />
                            <label htmlFor="allDay" className="whitespace-nowrap">All Day</label>
                     </div>
                     <div className="flex items-center ml-8">
                        <span className='material-icons-outlined text-gray-400 cursor-pointer mr-2'> 
                            location_on
                        </span>
                        <input type="text" name='location' value={location} placeholder='Location' required 
                            className='pt-3 border-0 text-gray-600 text-m
                            font-semibold pb-2 w-full border-b-2 border-gray-200 
                            focus:outline-none focus:ring-0 focus:border-blue-500' 
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center ml-8">
                        <span className='material-icons-outlined text-gray-400 cursor-pointer mr-2'> 
                            segment
                        </span>
                        <input type="text" name='description' value={description} placeholder='Description' required 
                            className='pt-3 border-0 text-gray-600 text-m
                            font-semibold pb-2 w-full border-b-2 border-gray-200 
                            focus:outline-none focus:ring-0 focus:border-blue-500' 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    {/* //TODO add the color picker */}
                        
                    {/* //TODO add the save button */}

                </div>
            </div>
        </form>
    </div>
  )
}
