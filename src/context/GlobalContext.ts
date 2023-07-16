import dayjs from 'dayjs'
import React from 'react'

export const GlobalContext = React.createContext({
    date : dayjs(),
    setDate : (date:dayjs.Dayjs) => {},
    showEventModal : false,
    setShowEventModal : (showEventModal:boolean) => {},
})
