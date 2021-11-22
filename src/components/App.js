import React, { useState } from 'react';
import _ from 'lodash';
import { NavBar } from './Navigation';
import { Filter } from './Filter';
import { Footer } from './Footer';
import { Events } from './Events';


function App() {
  return (
    <body className="general">
      <NavBar />
      <main>
        <Filter />
        <Events />
      </main>
      <Footer />
    </body>
  );
}

export default App;
