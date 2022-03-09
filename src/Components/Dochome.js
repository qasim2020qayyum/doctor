import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './Dochome.css';

const Dochome = () => {
    let name= "Qasim";
    const [date, setDate] = useState(new Date());
    const onChange = date =>{
        setDate(date);
    };
  return (
    <>
    <div className="dochome">
    <div className="doc_first">
    <div className="doc_first_1">

    <h4>Hello, <b>Doctor Mosaad</b></h4>
    <p>Your next appointment is: {date.toDateString()} </p>
    <p>with: {name} <b>via:</b> video chat</p>
    </div>
    <div className="doc_first_2">
        <p>Date: <b>{date.toDateString()}</b></p>
        <p>Patient: <b>Quinn Mithaani</b></p>
        <p>Time: <b>2pm EST</b></p>
        <p>Description: <b>Video CheckUp</b></p>
    </div>
    </div>
    <div className="doc_calender">
    <Calendar onChange ={onChange} value={date} />
    </div>
    <div className="doc_third">
    <h1>hfhgfhgfh</h1>
    </div>
    </div>
    </>
  )
}

export default Dochome