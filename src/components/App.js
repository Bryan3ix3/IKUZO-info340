import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { NavBar } from './Navigation';
import { HomeScreen } from './Home';
import { EventForm } from './EventForm';
import { AboutScreen } from './About';
import { ProfileScreen } from './Profile';
import { Footer } from './Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import { getDatabase, ref, set as fbset, onValue } from 'firebase/database'


function App(props) {
  const db = getDatabase(); //get database address from firebase servers
  const [eventArr, setEventArr] = useState(props.events);

  //const applyFilters = () => {}

  useEffect(() => {
    const eventArrRef = ref(db, "Events") //  dir/key for reference
    //addEventListener for database value change
    onValue(eventArrRef, (snapshot) => {
      const newValue = snapshot.val(); //extract the value from snapshot
      setEventArr(newValue);
      console.log(newValue);
    })
  }, []);

  return (
    <BrowserRouter>
      <div className="general">
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen events={eventArr} friends={props.friends} />}></Route>
            <Route path="/about" element={<AboutScreen />}></Route>
            <Route path="/addEvent" element={<EventForm /*addEventCallback={addEvent}*//>}></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
