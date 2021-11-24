import React from 'react';

export function EventForm() {
  return (
    <section className="eventForm mb-3">
      <h1> Events Form </h1>
      <h2> Input event information and details below </h2>

      <div className="formContainer">
        <form>
            <div>
              <label for="Ename">Event Name:</label>
              <input type="text" id="Ename" name="Ename" value="" />
            </div>

            <div>
              <label for="Lname">Location Name:</label>
              <input type="text" id="Lname" name="Lname" value="" />
            </div>
            <div>
              <label for="Edate">Event Date:</label>
              <input type="date" id="Edate" name="Edate" value="" />
            </div>
            <div>
              <label for="Etime">Event Time:</label>
              <input type="time" id="Etime" name="Etime" value="" />
            </div>
            <div>
              <label for="Edes">Event Description:</label>
              <textarea id="Edes" name="Edes" rows="4" cols="50"></textarea>
            </div>
            <div>
              <label for="Eimg">Upload Image:</label>
              <input class="imgUpload" type="file" id="Eimg" name="filename" />
            </div>
            <div>
              <input type="submit" value="Create Event" />
            </div>
          </form>
        </div>
    </section>
    );
}