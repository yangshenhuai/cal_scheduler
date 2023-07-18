import dayjs, { Dayjs } from 'dayjs'
import  { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { EventSchedule } from '../utils/EventUtil';

interface DayProps {
    date: Dayjs;
    weekIdx: number;

}
  

export default function Day({date,weekIdx}: DayProps) {
    function getDayClasses() {
       return dayjs().format('DD-MM-YYYY')=== date.format('DD-MM-YYYY')? 'bg-blue-600 text-white rounded-full w-7' : ''
    }
    const { savedEvents } = useContext(GlobalContext);
    const [displayEvents,setDisplayEvents] = useState([] as EventSchedule[]);

    useEffect(() => {
       setDisplayEvents(savedEvents.events.filter((event) =>  event.startTime >= (date.startOf('day').unix() * 1000) && event.endTime <= (date.endOf('day').unix() * 1000)  ))
    }, [savedEvents , date])

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

            {displayEvents.map((event,idx) => (

                        <div 
                            key={idx} //TODO set the background color of the event based on the category
                         className='p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate'>
                                { event.title} 
                        </div>
                ))    
            }


        </div>
      )

}