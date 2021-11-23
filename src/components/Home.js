import React from 'react';
import { Filter } from './Filter';
import { Events } from './Events';
import { Friends, FriendsButton } from './Friends';

export function HomeScreen(props) {
  const [events, setEvents] = useState(props.events);
  
  return (
    <div>
      <Filter />
      <div className="spacer"></div>
      <Events events={events}/>
      <div className="spacer"></div>
      <Friends />
      {/* <FriendsButton /> */}
    </div>
  );
}