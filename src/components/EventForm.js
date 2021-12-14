import React, { useState } from 'react';
import { getDatabase, ref, set as fbset } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

//import { propTypes } from 'react-bootstrap/esm/Image';

export function EventForm(props) {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [location, setLocation] = useState("");
  const [locationErr, setLocationErr] = useState(false);
  const [date, setDate] = useState("");
  const [dateErr, setDateErr] = useState(false);
  const [time, setTime] = useState("");
  const [timeErr, setTimeErr] = useState(false);
  const [detail, setDetail] = useState("");
  const [detailErr, setDetailErr] = useState(false);
  const [buttonValue, setButtonValue] = useState("Create Event");
  const [warning, setWarning] = useState("");
  const [warningText, setWarningText] = useState("");
  const img = "img/02.jpg";
  const navigate = useNavigate();
  const db = getDatabase(); //get database address from firebase servers

  function toRegularTime(militaryTime) {
    const [hours, minutes] = militaryTime.split(':');
    let hr = "";
    let min = "";
    let day = "";
    if(hours > 12){
      hr = hours - 12;
      day = "PM"
    } else {
      hr = hours;
      day = "AM"
    }
    min = minutes;
    return(hr + ":" + min + " " + day);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let formatDate = date.slice(5,7) + "/" + date.slice(8,10) + "/" + date.slice(0,4); //1998-02-06
    let formatTime = toRegularTime(time);
    let eventObj = {"name":name, "location":location, "date":formatDate, "time":formatTime, "detail":detail, "img":img};
    const index = props.events.length;
    const eventRef = ref(db, "Events/" + index) //  dir/key htmlFor reference
    if((name !== "" && location !== "" && date !== "" && time !== "" && detail !== "")) {
      setButtonValue("Loading");
      fbset(eventRef, eventObj)
        .then(() => setButtonValue("Create Event"))
        .then(response => navigate('/'))
        .catch((error) => setButtonValue(error));
    } else {
      setWarning("alert alert-primary")
      setWarningText("Please input all of your event details.");
    }

  }
  const changeWarning = () => {
    setWarning("");
    setWarningText("");
  }

  const nameOnChange = (text) => {
    setName(text);
    changeWarning();
    if(text === ""){
      setNameErr(true);
    }else{
      setNameErr(false);
    }
  }
  const locationOnChange = (text) => {
    setLocation(text);
    changeWarning();
    if(text === ""){
      setLocationErr(true);
    }else{
      setLocationErr(false);
    }
  }
  const dateOnChange = (text) => {
    setDate(text);
    changeWarning();
    if(text === ""){
      setDateErr(true);
    }else{
      setDateErr(false);
    }
  }
  const timeOnChange = (text) => {
    setTime(text);
    changeWarning();
    if(text === ""){
      setTimeErr(true);
    }else{
      setTimeErr(false);
    }
  }
  const detailOnChange = (text) => {
    setDetail(text);
    changeWarning();
    if(text === ""){
      setDetailErr(true);
    }else{
      setDetailErr(false);
    }
  }

  return (
    <section className="eventForm">
      <h1 style={{textDecoration: "underline", alignSelf: "center"}}> Events Form </h1>
      <div className="formContainer">
      <h2> Input event information and details below </h2>
      <div className={warning}>{warningText}</div>
        <form>
            <div>
              <label htmlFor="nameIn">Event Name:</label>
              <input
                type="text"
                id="nameIn"
                value={name}
                onChange={(e) => nameOnChange(e.target.value)}/>
              <div className={nameErr ? "warningSmall" : "hidden"}>*name required</div>
            </div>
            <div>
              <label htmlFor="locationIn">Location Name:</label>
              <input
                type="text"
                id="locationIn"
                value={location}
                onChange={(e) => locationOnChange(e.target.value)}/>
                <div className={locationErr ? "warningSmall" : "hidden"}>*location required</div>
            </div>
            <div>
              <label htmlFor="dateIn">Event Date:</label>
              <input
                type="date"
                id="dateIn"
                value={date}
                onChange={(e) => dateOnChange(e.target.value)}/>
                <div className={dateErr ? "warningSmall" : "hidden"}>*date required</div>
            </div>
            <div>
              <label htmlFor="timeIn">Event Time:</label>
              <input
                type="time"
                id="timeIn"
                value={time}
                onChange={(e) => timeOnChange(e.target.value)}/>
                <div className={timeErr ? "warningSmall" : "hidden"}>*time required</div>
            </div>
            <div>
              <label htmlFor="detailIn">Event Description:</label>
              <textarea
                type = "text" rows="4" cols="50"
                id="detailIn"
                value={detail}
                onChange={(e) => detailOnChange(e.target.value)} />
                <div className={detailErr ? "warningSmall" : "hidden"}>*description required</div>
            </div>
            <div className="create-event-container">
              <button className="btn create-event-btn" type="submit" value={buttonValue} onClick={handleSubmit}>
                Create Event
              </button>
            </div>
          </form>
        </div>
    </section>
    );
}