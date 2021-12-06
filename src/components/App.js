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
  return (
    <BrowserRouter>
      <div className="general">
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen events={props.events} friends={props.friends} />}></Route>
            <Route path="/about" element={<AboutScreen />}></Route>
            <Route path="/addEvent" element={<EventForm />}></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
