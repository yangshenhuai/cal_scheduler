import React,{useState} from 'react'
import { GlobalContext } from './GlobalContext'
import dayjs from 'dayjs'

export default function ContextWrapper({children}:any) {
    const [date,setDate] = useState(dayjs())
    const [showEventModal,setShowEventModal] = useState(false)
    return (
        <GlobalContext.Provider value={{date,setDate,showEventModal,setShowEventModal}}>
            {children}
        </GlobalContext.Provider>
    )
}