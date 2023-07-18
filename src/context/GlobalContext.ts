import dayjs from 'dayjs'
import React from 'react'
import { SaveEventAction } from '../utils/EventUtil'

export const GlobalContext = React.createContext({
    date : dayjs(),
    setDate : (date:dayjs.Dayjs) => {},
    showEventModal : false,
    setShowEventModal : (showEventModal:boolean) => {},
    dispatchSavedEvent : (action:SaveEventAction) => {},
})
