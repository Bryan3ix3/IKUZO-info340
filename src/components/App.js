import React, { useState } from 'react';
import _ from 'lodash';
import { NavBar } from './Navigation';
import { HomeScreen } from './Home';
import { EventForm } from './EventForm';
import { AboutScreen } from './About';
import { ProfileScreen } from './Profile';
import { Footer } from './Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App(props) {
  const [eventArr, setEventArr] = useState(props.events);

  const applyFilters = () => {

  }

  function addEvent(eventObj){
    console.log("event added");
    setEventArr(eventArr.push(eventObj));
  }

  return (
    <BrowserRouter>
      <body className="general">
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen events={eventArr} friends={props.friends} />}></Route>
            <Route path="/about" element={<AboutScreen />}></Route>
            <Route path="/addEvent" element={<EventForm addEventCallback={addEvent}/>}></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
          </Routes>
        </main>
        <Footer />
      </body>
    </BrowserRouter>
  );
}

export default App;
