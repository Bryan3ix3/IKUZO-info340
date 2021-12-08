import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

export function EventForm(props) {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [detail, setDetail] = useState("");
  const [img, setImg] = useState("img/running.jpg");

  function handleSubmit(){
    let eventObj = {name:""+name, location:""+location, date:""+date, time:""+time, detail:""+detail, img:""+img};
    props.addEventCallback(eventObj);
  }

  return (
    <section className="eventForm mb-3">
      <h1> Events Form </h1>
      <h2> Input event information and details below </h2>

      <div className="formContainer">
        <form>
            <div>
              <label>Event Name:</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
              <label>Location Name:</label>
              <input 
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <div>
              <label>Event Date:</label>
              <input 
                type="date"
                value={date} 
                onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div>
              <label>Event Time:</label>
              <input 
                type="time"
                value={time} 
                onChange={(e) => setTime(e.target.value)}/>
            </div>
            <div>
              <label>Event Description:</label>
              <textarea 
                type = "text" rows="4" cols="50"
                value={detail}
                onChange={(e) => setDetail(e.target.value)} />
            </div>
            {/*<div>
              <label>Upload Image:</label>
              <input 
                className="imgUpload" type="file" 
                value={img}
                onChange={(e) => setImg(e.target.value)}/>
            </div>*/}
            <div>
              <input type="submit" value="Create Event" onClick={handleSubmit}/>
            </div>
          </form>
        </div>
    </section>
    );
}