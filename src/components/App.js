import React, { useState, useEffect } from 'react';
import { NavBar } from './Navigation';
import { HomeScreen } from './Home';
import { EventForm } from './EventForm';
import { AboutScreen } from './About';
import { ProfileScreen } from './Profile';
import { Footer } from './Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import { getDatabase, ref, onValue } from 'firebase/database'

function App() {
  const [eventArr, setEventArr] = useState([{}]);
  const [friendArr, setFriendArr] = useState([{}]);
  const db = getDatabase(); //get database address from firebase servers

  useEffect(() => {
    const eventArrRef = ref(db, "Events") //  dir/key for reference
    //addEventListener for database value change
    const offFunction = onValue(eventArrRef, (snapshot) => {
      const newEvents = snapshot.val(); //extract the value from snapshot
      setEventArr(newEvents);
    });
    return () => {
      offFunction();
    }
  }, []);

  useEffect(() => {
    const friendArrRef = ref(db, "Friends") //  dir/key for reference
    //addEventListener for database value change
    const offFunction = onValue(friendArrRef, (snapshot) => {
      const newFriends = snapshot.val(); //extract the value from snapshot
      const newFriendsKey = Object.keys(newFriends);
      const newFriendsArray = newFriendsKey.map((friendKey) => {
        const theFriend = newFriends[friendKey];
        return theFriend;
      })
      setFriendArr(newFriendsArray);
    });
    return () => {
      offFunction();
    }
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
            <Route path="*" element={<HomeScreen events={eventArr} friends={friendArr} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
