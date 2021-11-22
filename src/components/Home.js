import React from 'react';
import { Filter } from './Filter';
import { Events } from './Events';
import { Friends, FriendsButton } from './Friends';

export function HomeScreen() {
  return (
    <div>
      <Filter />
      <div className="spacer"></div>
      <Events />
      <div className="spacer"></div>
      <Friends />
      {/* <FriendsButton /> */}
    </div>
  );
}