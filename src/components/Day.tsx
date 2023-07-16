import dayjs, { Dayjs } from 'dayjs'
import React from 'react'

interface DayProps {
    date: Dayjs;
    weekIdx: number;
}
  

export default function Day({date,weekIdx}: DayProps) {
    function getDayClasses() {
       return dayjs().format('DD-MM-YYYY')=== date.format('DD-MM-YYYY')? 'bg-blue-600 text-white rounded-full w-7' : ''
    }


    return (
        <div className='border border-gray-200 flex flex-col'>
            <header className='flex flex-col items-center'>
            { weekIdx === 0 &&  <p className='text-sm  my-1 '>
                {date.format('ddd').toUpperCase()}
            </p>}
           
            <p className={`text-sm p-1 my-1 text-center hover:shadow-lg ${getDayClasses()}`}>
                {date.format('DD')}
            </p>
            </header>
        </div>
      )

}