import React, { useState } from 'react';
import _ from 'lodash';
import { NavBar } from './Navigation';
import { Filter, FilterButton, } from './Filter';
import { Footer } from './Footer';
import { Events } from './Events';
import { Friends, FriendsButton } from './Friends';


function App() {
  return (
    <body className="general">
      <NavBar />
      <main>
        <div>
          <Filter />
          <div class="spacer"></div>
          <Events />
          <div class="spacer"></div>
          <Friends />
        </div>
        <FilterButton />
        <FriendsButton />
      </main>
      <Footer />
    </body>
  );
}

export default App;
