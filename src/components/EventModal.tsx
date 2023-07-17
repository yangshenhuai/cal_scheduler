import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { categoryClasses, getCategoryClassColr } from "../utils/Categories";

export default function EventModal() {
  const { setShowEventModal } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const [allDay, setAllDay] = useState(false);
  const [startEventDate, setStartEventDate] = useState(dayjs().toDate());
  const [endEventDate, setEndEventDate] = useState(dayjs().toDate());


  const datePicker = (type:string) => {
    if(allDay) {
        return  <DatePicker
        className=" border-b-2 border-gray-200  focus:outline-none focus:ring-0 focus:border-blue-500 "
        selected={ type==="start" ? startEventDate : endEventDate}
        onChange={(date: Date) => type === "start" ? setStartEventDate(date) : setEndEventDate(date)}
        dateFormat={"yyyy-MM-dd"}
      />
    } else {
        return  <DatePicker
        className=" border-b-2 border-gray-200  focus:outline-none focus:ring-0 focus:border-blue-500 "
        selected={type==="start" ? startEventDate : endEventDate}
        showTimeSelect
        onChange={(date: Date) => type === "start" ? setStartEventDate(date) : setEndEventDate(date)}
        dateFormat={"yyyy-MM-dd HH:mm"}
      />
    }
  };

  return (
    <div className="h-screen w-screen fixed left-0 top-0 flex justify-center items-center ">
      <form className="bg-white rounded-lg shadow-2xl w-1/3">
        <header className="bg-gray-100 px-4  py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <button onClick={() => setShowEventModal(false)}>
            <span className="material-icons-outlined text-gray-400 cursor-pointer">
              close
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/6 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Add Title"
              required
              className="pt-3 border-0 text-gray-600 text-xl 
                     font-semibold pb-2 w-full border-b-2 border-gray-200 
                     focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="flex items-center ml-8">
              <span className="material-icons-outlined text-gray-400 cursor-pointer mr-2">
                schedule
              </span>
              
             {datePicker("start")}
              <span className="mr-2 ml-2">-</span>
            {datePicker("end")}
            </div>
            <div className="flex items-center ml-8">
              <input
                type="checkbox"
                name="allDay"
                checked={allDay}
                className="mr-2"
                onChange={(e) => setAllDay(e.target.checked)} //TODO update the data picker type to display the time
              />
              <label htmlFor="allDay" className="whitespace-nowrap">
                All Day
              </label>

              <select className="ml-4 border border-gray-300 text-gray-900 text-sm rounded-lg">
                <option value="0" selected>
                  Does not repeat
                </option>
                <option value="1">Daily</option>
                <option value="2">Weekly</option>
                <option value="3">Biweekly</option>
                <option value="4">Work day</option>
              </select>
            </div>
            <div className="flex items-center ml-8">
              <span className="material-icons-outlined text-gray-400 cursor-pointer mr-2">
                location_on
              </span>
              <input
                type="text"
                name="location"
                value={location}
                placeholder="Location"
                required
                className="pt-3 border-0 text-gray-600 text-m
                            font-semibold pb-2 w-full border-b-2 border-gray-200 
                            focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="flex items-center ml-8">
              <span className="material-icons-outlined text-gray-400 cursor-pointer mr-2">
                segment
              </span>
              <input
                type="text"
                name="description"
                value={description}
                placeholder="Description"
                required
                className="pt-3 border-0 text-gray-600 text-m
                            font-semibold pb-2 w-full border-b-2 border-gray-200 
                            focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex items-center ml-8">
              <span className="material-icons-outlined text-gray-400 cursor-pointer mr-2">
                bookmark_border
              </span>
              <div className="flex gap-x-2">
                {categoryClasses.map((categoryClass, i) => (
                  <span
                    key={i}
                    className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
                    style={{
                      backgroundColor: `${getCategoryClassColr(categoryClass)}`,
                    }}
                    onClick={() => setSelectedCategoryIndex(i)}
                  >
                    {selectedCategoryIndex === i && (
                      <span className="material-icons-outlined text-white text-sm">
                        check
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-end  border-t p-3 mt-5">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white ">
                                Save
            </button>
        </footer>
      </form>
    </div>
  );
}
