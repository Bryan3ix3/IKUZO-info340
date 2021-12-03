import React from 'react';

import { FilterMenu, FilterButton } from './Filter';
import { Events } from './Events';
import { FriendList, FriendsButton } from './Friends';

export function HomeScreen(props) {
  return (
    <div>
      <FilterMenu />
      <div className="spacer"></div>
      <Events events={props.events} />
      <div className="spacer"></div>
      <FriendList friends={props.friends} />
      <FilterButton />
      <FriendsButton />
    </div>
  );
}