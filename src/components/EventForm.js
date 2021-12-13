import React, { useState } from 'react';
import { getDatabase, ref, set as fbset } from 'firebase/database'
import { Link } from 'react-router-dom';

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
  const [img, setImg] = useState("img/02.jpg");
  //const eventInfo = {name:"", location:"", date:"", time:"", detail:"", img:"img/running.jpg"}

  const db = getDatabase(); //get database address from firebase servers

  function toRegularTime(militaryTime) {
    const [hours, minutes, seconds] = militaryTime.split(':');
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
    return(hr+":"+min+" "+day);
  }

  function handleSubmit(){
    let formatDate = date.slice(5,7) + "/" + date.slice(8,10) + "/" + date.slice(0,4); //1998-02-06
    let formatTime = toRegularTime(time);
    let eventObj = {"name":name, "location":location, "date":formatDate, "time":formatTime, "detail":detail, "img":img};
    var index = props.events.length;
    const eventRef = ref(db, "Events/" + index) //  dir/key for reference
    if((name!=="" && location!=="" && date!=="" && time!=="" && detail!==""))
      fbset(eventRef, eventObj);
  }
  function nameOnChange(text) {
    setName(text);
    if(text === ""){
      setNameErr(true);
    }else{
      setNameErr(false);
    }
  }
  function locationOnChange(text) {
    setLocation(text);
    if(text === ""){
      setLocationErr(true);
    }else{
      setNameErr(false);
    }
  }
  function dateOnChange(text) {
    setDate(text);
    console.log(text);
    if(text === ""){
      setDateErr(true);
    }else{
      setNameErr(false);
    }
  }
  function timeOnChange(text) {
    setTime(text);
    console.log(text);
    if(text === ""){
      setTimeErr(true);
    }else{
      setNameErr(false);
    }
  }
  function detailOnChange(text) {
    setDetail(text);
    if(text === ""){
      setDetailErr(true);
    }else{
      setNameErr(false);
    }
  }

  return (
    <section className="eventForm">
      <h1> Events Form </h1>
      <h2> Input event information and details below </h2>

      <div className="formContainer">
        <form>
            <div>
              <label for="nameIn">Event Name:</label>
              <input
                type="text"
                id="nameIn"
                value={name}
                onChange={(e) => nameOnChange(e.target.value)}/>
              <div className={nameErr ? "warningSmall" : "hidden"}>*name required</div>
            </div>
            <div>
              <label for="locationIn">Location Name:</label>
              <input
                type="text"
                id="locationIn"
                value={location}
                onChange={(e) => locationOnChange(e.target.value)}/>
                <div className={locationErr ? "warningSmall" : "hidden"}>*location required</div>
            </div>
            <div>
              <label for="dateIn">Event Date:</label>
              <input
                type="date"
                id="dateIn"
                value={date}
                onChange={(e) => dateOnChange(e.target.value)}/>
                <div className={dateErr ? "warningSmall" : "hidden"}>*date required</div>
            </div>
            <div>
              <label for="timeIn">Event Time:</label>
              <input
                type="time"
                id="timeIn"
                value={time}
                onChange={(e) => timeOnChange(e.target.value)}/>
                <div className={timeErr ? "warningSmall" : "hidden"}>*time required</div>
            </div>
            <div>
              <label for="detailIn">Event Description:</label>
              <textarea
                type = "text" rows="4" cols="50"
                id="detailIn"
                value={detail}
                onChange={(e) => detailOnChange(e.target.value)} />
                <div className={detailErr ? "warningSmall" : "hidden"}>*description required</div>
            </div>
            {/*<div>
              <label>Upload Image:</label>
              <input
                className="imgUpload" type="file"
                value={img}
                {/*onChange={(e) => setImg(e.target.value)}/>
            </div>*/}
            <div>
              <Link exact to="/" className="text-white">
                <input type="submit" value="Create Event" onClick={() => handleSubmit()}/>
              </Link>
            </div>
          </form>
        </div>
    </section>
    );
}