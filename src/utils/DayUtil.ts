import dayjs, { Dayjs } from "dayjs";


export const getMonth = (date:dayjs.Dayjs = dayjs()) : Dayjs[][]=> { // 月份
    
    let startDate = date.date(1);
    let days = 0;
    const weekArr = new Array(5).fill([]).map(() => { 
        return new Array(7).fill(null).map(() => {
            return dayjs(startDate).add(days++, 'day');
        });
    });
    return weekArr;
   
};