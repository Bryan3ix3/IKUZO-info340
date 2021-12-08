import React, { useState } from 'react';
import _ from 'lodash';

import { FilterMenu, FilterButton } from './Filter';
import { Events } from './Events';
import { FriendList, FriendsButton } from './Friends';

export function HomeScreen(props) {
  const [currentEvents, setCurrentEvents] = useState(props.events);
  const [filterWarning, setFilterWarning] = useState(false);

  const handleFilters = (selectedFiltersArray) => {
    const radioValueObj = selectedFiltersArray[0];
    const checkboxObj = selectedFiltersArray[1];
    if(_.isEmpty(radioValueObj) && _.isEmpty(checkboxObj)) { //current event card aren't changed if both the radio value and checkbox values are empty
      setCurrentEvents(currentEvents);
    } else { //update current event cards
      let filteredEvents = [];
      filteredEvents = props.events.filter((item) => {
        let eventRequirementsArray = [];
        let applicableFilters = 0;
        if("upcoming_event" in radioValueObj) {
          const upcomingEventFilter = radioValueObj.upcoming_event.replace('_', ' ');
          if(item.upcoming_date === upcomingEventFilter) {
            applicableFilters++;
            eventRequirementsArray.push(true);
          } else {
            return false;
          }
        }
        if("location" in checkboxObj && checkboxObj.location.length) { //checks location of each event
          applicableFilters++;
          for(let placeFilter of checkboxObj.location) {
            if(placeFilter === item.location) {
              eventRequirementsArray.push(true);
            }
          }
        }
        if("time_of_day" in checkboxObj && checkboxObj.time_of_day.length) { //checks time of day of each event
          applicableFilters++;
          for(let timeFilter of checkboxObj.time_of_day) {
            const currentTimeArray = item.time.split(" ");
            const eventTime = parseInt(currentTimeArray[0]);
            const eventPeriod = currentTimeArray[1];
            if(timeFilter === "Morning" && eventPeriod === "AM") {
              eventRequirementsArray.push(true);
            } else if(timeFilter === "Afternoon" && ((eventTime === 12 || eventTime <= 5) && eventPeriod === "PM")) {
              eventRequirementsArray.push(true);
              break;
            } else if(timeFilter === "Evening" && ((eventTime !== 12 && eventTime > 5) && eventPeriod === "PM")){
              eventRequirementsArray.push(true);
            }
          }
        }
        if(eventRequirementsArray.length === applicableFilters) {
          return true;
        }
        return false;
      });
      if(_.isEmpty(filteredEvents)) { //current events are the same
        setFilterWarning(true);
        setCurrentEvents(currentEvents);
      } else { //displays the filtered events
        setFilterWarning(false);
        setCurrentEvents(filteredEvents);
      }
    }
  }

  return (
    <div>
      <FilterMenu handleFiltersCallback={handleFilters}/>
      <div className="spacer"></div>
      <Events events={currentEvents} isActive={filterWarning} />
      <div className="spacer"></div>
      <FriendList friends={props.friends} />
      <FilterButton />
      <FriendsButton />
    </div>
  );
}