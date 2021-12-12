import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { FilterMenu, FilterButton } from './Filter';
import { Events } from './Events';
import { FriendList, FriendsButton } from './Friends';
import { getDatabase, ref, onValue } from 'firebase/database'
import Modal from "react-modal";


export function HomeScreen(props) {
  const [currentEvents, setCurrentEvents] = useState([{}]);
  const [filterWarning, setFilterWarning] = useState(false);
  const [currEventKeys, setCurrectEventKeys] = useState(Object.keys(props.events));
  const todayDate = new Date();
  const [friendOpen, setFriendOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);


  const removePastEvents = (eventsArr) => {
    const result = eventsArr.filter((event) => {
      const eventDate = new Date(event.date);
      if(eventDate.getFullYear() - todayDate.getFullYear() > 0) {
        return true;
      } else {
        if(eventDate.getFullYear() - todayDate.getFullYear() === 0){
          if(eventDate.getMonth() - todayDate.getMonth() < 0) return false;
          if(eventDate.getDate() - todayDate.getDate() >= 0) {
            return true;
          }
          return false;
        }
        return false;
      }
    });
    return result;
  }

  const db = getDatabase(); //get database address from firebase servers
  useEffect(() => {
    const eventArrRef = ref(db, "Events") //  dir/key for reference
    //addEventListener for database value change
    onValue(eventArrRef, (snapshot) => {
      const newValue = snapshot.val(); //extract the value from snapshot
      const newValueKeyArr = Object.keys(newValue);
      setCurrentEvents(removePastEvents(newValue));
      setCurrectEventKeys(newValueKeyArr);
    })
  }, []);

  const handleFilters = (selectedFiltersArray) => {
    const radioValueObj = selectedFiltersArray[0];
    const checkboxObj = selectedFiltersArray[1];
    if(_.isEmpty(radioValueObj) && _.isEmpty(checkboxObj)) { //current event card aren't changed if both the radio value and checkbox values are empty
      setCurrentEvents(currentEvents);
    } else { //update current event cards
      let filteredEvents = [];
      filteredEvents = props.events.filter((item) => {
        const eventRequirementsArray = [];
        let applicableFilters = 0;
        if("upcoming_event" in radioValueObj) {
          const eventDate = new Date(item.date);
          const differenceDays = Math.ceil(Math.abs(eventDate - todayDate) / (1000 * 60 * 60 * 24));
          const upcomingEventValue = radioValueObj.upcoming_event;
          if(differenceDays <= upcomingEventValue || upcomingEventValue === "all") {
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

  function toggleFriend() {
    setFriendOpen(!friendOpen);
    setFilterOpen(false);
  }

  function toggleFilter() {
    setFilterOpen(!filterOpen);
    setFriendOpen(false);
  }

  return (
    <div>
      <FilterMenu handleFiltersCallback={handleFilters}/>
      <Modal isOpen={filterOpen} onRequestClose={toggleFilter} contentLabel="filter options">
        <FilterMenu handleFiltersCallback={handleFilters}/>
        <button onClick={toggleFilter}>Close</button>
      </Modal>
      <button id="filter-icon" onClick={toggleFilter}>
        <img src={"img/filter.png"} alt="Filter icon" />
      </button>

      <div className="spacer"></div>
      <Events events={currentEvents} isActive={filterWarning} eventKeys={currEventKeys} />
      <div className="spacer"></div>

      <FriendList friends={props.friends} />
      <Modal isOpen={friendOpen} onRequestClose={toggleFriend} contentLabel="friends list">
        <FriendList friends={props.friends} />
        <button onClick={toggleFriend}>Close</button>
      </Modal>
      <button id="friend-icon" onClick={toggleFriend}>
        <img src={"img/friend.png"} alt="Friend icon" />
      </button>
    </div>
  );
}