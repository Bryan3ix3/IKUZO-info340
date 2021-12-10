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


function App() {
  const db = getDatabase(); //get database address from firebase servers
  const [eventArr, setEventArr] = useState([{}]);
  const [friendArr, setFriendArr] = useState([{}])

  //const applyFilters = () => {}

  useEffect(() => {
    const eventArrRef = ref(db, "Events") //  dir/key for reference
    //addEventListener for database value change
    onValue(eventArrRef, (snapshot) => {
      const newEvents = snapshot.val(); //extract the value from snapshot
      setEventArr(newEvents);
      console.log(newEvents);
    })
  }, []);

  useEffect(() => {
    const friendArrRef = ref(db, "Friends") //  dir/key for reference
    //addEventListener for database value change
    onValue(friendArrRef, (snapshot) => {
      const newFriends = snapshot.val(); //extract the value from snapshot
      setFriendArr(newFriends);
      console.log(newFriends);
    })
  }, []);

  return (
    <BrowserRouter>
      <div className="general">
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen events={eventArr} friends={friendArr} />}></Route>
            <Route path="/about" element={<AboutScreen />}></Route>
            <Route path="/addEvent" element={<EventForm events={eventArr} />}></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
