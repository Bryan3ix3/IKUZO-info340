import React, { useState } from 'react';
import _ from 'lodash';
import { NavBar } from './Navigation';
import { HomeScreen } from './Home';
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
          </Routes>
        </main>
        <Footer />
      </body>
    </BrowserRouter>
  );
}

export default App;
