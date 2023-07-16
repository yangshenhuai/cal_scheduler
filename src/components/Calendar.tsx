import React, { useContext, useEffect, useState } from 'react'
import { getMonth } from '../utils/DayUtil'
import Day from './Day'
import { GlobalContext } from '../context/GlobalContext'

export default function Calendar() {
  const {date ,setDate } = useContext(GlobalContext)
  const [monthDateArr,setMonthDateArr] = useState(getMonth())
  useEffect(() => {
    setMonthDateArr(getMonth(date))
  } , [date])

  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
        {
            monthDateArr.map((row, rowIndex) => {
                return (
                    <>
                    {row.map((col, colIndex) => {
                        return (
                            <Day date={col} weekIdx={rowIndex}/>
                        )
                    })}
                    </>
                )
            })
        }
    </div>
  )
}
