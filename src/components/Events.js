import React, { useState, useEffect } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import ShareIcon from '@material-ui/icons/Share';
import { getDatabase, ref, onValue } from 'firebase/database'

function EventCard({event}) {
  const [toggleDetail, setToggleDetail] = useState(false);
  const [toggleShare, setToggleShare] = useState(false);
  const [currentFriends, setCurrentFriends] = useState([]);
  const [joinValue, setJoinValue] = useState("Join");

  let eventDate = new Date(event.date);
  const dateArray = eventDate.toDateString().split(" ");
  const displayDate = dateArray[1] + ' ' + dateArray[2] + ", " + dateArray[3];


  const db = getDatabase(); //get database address from firebase servers
  useEffect(() => {
    const friendArrRef = ref(db, "Friends") //  dir/key for reference
    //addEventListener for database value change
    onValue(friendArrRef, (snapshot) => {
      const allEvents = snapshot.val(); //extract the value from snapshot
      const eventKeyArray = Object.keys(allEvents);
      let eventsArray = eventKeyArray.map((eventKey) => {
        const theEvent = allEvents[eventKey];
        return theEvent;
      })
      eventsArray = eventsArray.filter(friend => friend.isFriend === true);
      setCurrentFriends(eventsArray);
    })
  }, []);

  const checkboxCategories = currentFriends.map((friend, index) => {
    let elementKey = friend + index;
    return (
      <div key={elementKey}>
        <input type="checkbox" className="checkBox" value={false} />
        <label >{friend.name}</label>
      </div>
    )
  });
  let joinClass = "btn btn-info";
  if(joinValue === "Joined") {
    joinClass = "btn btn-info join-button-active";
  }

  return (
    <div className="event-card">
      <img src={event.img} alt="Event card" />
      <div className="overImg">
        <h2><strong>{event.name}</strong></h2>
      </div>
      <div className="underImg">
        <h2><strong>{displayDate}</strong></h2>
      </div>
      <div className="btn_group">
        <Button className="btn btn-info" onClick={() => {setToggleDetail(!toggleDetail); setToggleShare(false)}} type="button" data-toggle="collapse" data-target="#collapseDetail" aria-expanded="false" aria-controls="collapseDetail">
            Details
        </Button>
        <button className="btn btn-share" onClick={() => {setToggleShare(!toggleShare); setToggleDetail(false)}} type="button" data-toggle="collapse" data-target="#collapseShare" aria-expanded="false" aria-controls="collapseShare">
            Share
        </button>
        <button className={joinClass} onClick={() => {if(joinValue === "Join") {setJoinValue("Joined");  } else {setJoinValue("Join")}}} type="button">
            {joinValue}
        </button>
      </div>
      <Collapse in={toggleDetail}>
        <div className="collapse" id="collapseDetail">
          <div className="card card-body">
            <p>Time: {event.time} (PST)</p>
            <p>Location: {event.location}</p>
            <p>{event.detail}</p>
          </div>
        </div>
      </Collapse>
      <Collapse in={toggleShare}>
      <div className="collapse" id="collapseShare">
          <div className="card card-body">
            <p className="share-event">Share event with: </p>
            {checkboxCategories}
            <button className="btn share-btn" onClick={() => {setToggleShare(!toggleShare); setToggleDetail(false)}} type="button" data-target="#collapseShare" aria-expanded="false" aria-controls="collapseShare">
              <ShareIcon fontSize="small" />Share!
            </button>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export function Events(props) {
  const cards = props.events.map((event, index) => {
    let eventCardKey = event + index;
    return <EventCard event={event} key={eventCardKey} />
  });
  /*
  const cards = props.eventKeys.map(eventKey => {
    const event = props.events[eventKey];
    return <EventCard event={event} key={event.name} />
  }); */
  return (
    <section className="box events">
      <div className={props.isActive ? "warning" : "hidden"}>No Events Found</div>
      <div>
        {cards}
      </div>
    </section>
  );
}