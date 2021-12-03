import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

export function EventForm() {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [detail, setDetail] = useState("");
  const [img, setImg] = useState("");

  function handleSubmit(event){
    let eventObj = {name:name, location:location, date:date, time:time, detail:detail, img:img};
    event.addEventCallback(eventObj);
  }

  return (
    <section className="eventForm mb-3">
      <h1> Events Form </h1>
      <h2> Input event information and details below </h2>

      <div className="formContainer">
        <form onSubmit={handleSubmit}>
            <div>
              <label for="Ename">Event Name:</label>
              <input 
                type="text" id="Ename" name="Ename" 
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>

            <div>
              <label for="Lname">Location Name:</label>
              <input 
                type="text" id="Lname" name="Lname" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <div>
              <label for="Edate">Event Date:</label>
              <input 
                type="date" id="Edate" name="Edate" 
                value={date} 
                onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div>
              <label for="Etime">Event Time:</label>
              <input 
                type="time" id="Etime" name="Etime" 
                value={time} 
                onChange={(e) => setTime(e.target.value)}/>
            </div>
            <div>
              <label for="Edetail">Event Description:</label>
              <textarea 
                type = "text" id="Edetail" name="Edetail" rows="4" cols="50"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}></textarea>
            </div>
            <div>
              <label for="Eimg">Upload Image:</label>
              <input 
                className="imgUpload" type="file" id="Eimg" name="filename" 
                value={img}
                onChange={(e) => setImg(e.target.value)}/>
            </div>
            <div>
              <input type="submit" value="Create Event" />
            </div>
          </form>
        </div>
    </section>
    );
}