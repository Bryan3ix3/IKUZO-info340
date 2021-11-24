import React, { useState } from 'react';
import _ from 'lodash';
import { NavBar } from './Navigation';
import { HomeScreen } from './Home';
import { AboutScreen } from './About';
import { ProfileScreen } from './Profile';
import { Footer } from './Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <body className="general">
        <NavBar />
        <main>
          <Routes>
          <Route exact path="/" element={<HomeScreen props={props}/>}></Route>
            <Route path="/about" element={<AboutScreen />}></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
          </Routes>
        </main>
        <Footer />
      </body>
    </BrowserRouter>
  );
}

export default App;
