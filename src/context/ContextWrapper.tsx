import React,{useEffect, useReducer, useState} from 'react'
import { GlobalContext } from './GlobalContext'
import dayjs from 'dayjs'
import {  ActionType, EventSchedule, SaveEventAction, SaveEventState } from '../utils/EventUtil'



export default function ContextWrapper({children}:any) {


    const saveEventReducer = (state:SaveEventState,action:SaveEventAction) : SaveEventState => {
        switch(action.type){    
            case ActionType.ADD:
                return {events : [...state.events,action.payload]}
            case ActionType.DELETE:
                return {events : state.events.filter((event:EventSchedule) => event.id !== action.payload.id)}
            case ActionType.UPDATE:
                return {events : state.events.map((event: EventSchedule) => {
                        if (event.id === action.payload.id) {
                            return action.payload;
                        }
                        return event;
                    })
                }   
            default:
                throw new Error('Invalid Action Type')
        }
    }

    function loadEvents():SaveEventState  { //TODO load from service
        const storageEvents =  localStorage.getItem('savedEvents')
        const events = storageEvents ? JSON.parse(storageEvents) : []
        return {events: events}
    }

    const initialState:SaveEventState = {
        events : []
    }

   const [savedEvents,dispatchSavedEvent] = useReducer(saveEventReducer,initialState,loadEvents);

    useEffect(() => {  //TODO save into service
        localStorage.setItem('savedEvents',JSON.stringify(savedEvents.events))
    }, [savedEvents])

    const [date,setDate] = useState(dayjs())
    const [showEventModal,setShowEventModal] = useState(false)
    return (
        <GlobalContext.Provider value={{date,setDate,showEventModal,setShowEventModal,savedEvents, dispatchSavedEvent}}>
            {children}
        </GlobalContext.Provider>
    )
}