import React from 'react';

import { Filter } from './Filter';
import { Events } from './Events';
import { Friends, FriendsButton } from './Friends';

export function HomeScreen(props) {
  return (
    <div>
      <Filter />
      <div className="spacer"></div>
      <Events events={props.events}/>
      <div className="spacer"></div>
      <Friends />
    </div>
  );
}