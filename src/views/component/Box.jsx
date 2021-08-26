import React,{useState,useEffect,useCallback,useRef} from "react";
import styled from "styled-components"
import { Calendar } from "@natscale/react-calendar";

function Box({icon,title,val,min,noVal,titleColor = "white",calendar}) {
    const [tarih, setTarih] = useState();
    const cal = useRef(null);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    useEffect(() => {
      document.querySelectorAll(".arc_view_weekdays_cell span").forEach((e) => {
        e.innerHTML = e.innerText.charAt(0);
      });
    }, []);
  
    const tarihChange = useCallback(
      (value) => {
        setTarih(value);
      },
      [setTarih]
    );
  
    const Val = styled.div`
        font-size:45px;
        letter-spacing: 1.92px;
        font-family:"Roboto";
        display:flex;
        align-items:flex-end;
    `
    return (
        <div onClick={e=>{cal.current.classList.toggle("takvim-sakla")}} className={calendar ? "mini-box sp p-relative" : "mini-box sp"}>
            {calendar ? 
               <div className="tak takvim-sakla" ref={cal}   >
             
               <div className="takvim ">
               <div className="takvim-header" >
                 <div className="calendar-title">Calendar</div>
                 <div className="day">{days[new Date().getDay()]}</div>
               </div>
               <div className="takvim-date">
                 {new Date().getDate() +
                   " " +
                   monthNames[new Date().getMonth()] +
                   " " +
                   new Date().getFullYear()}
               </div>
               <div className="border-mavi"></div>
               <Calendar
                 size={224}
                 lockView={true}
                 value={tarih}
                 onChange={tarihChange}
               />
               <div className="takvim-copyright">2020 | Húmedo</div>
             </div>
       
               </div>
       
            : ""}
            <img src={"svg/"+icon + ".svg"} alt="" />
            <div style={{color:titleColor}} className={noVal ? "title mt-1" : "title"}>{title}</div>
            <Val>{val} {min ? <span className="min"> min</span> : ""}</Val>
        </div>
    )
}

export default Box
