import React, { useState, useEffect } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import ShareIcon from '@material-ui/icons/Share';


function EventCard({event}) {
  const [toggleDetail, setToggleDetail] = useState(false);
  const [toggleShare, setToggleShare] = useState(false);
  const [currentFriends, setCurrentFriends] = useState([]);
  // const toggleCollapse = () => {
  //   setToggle(!toggle);
  // }
  // useEffect(() => {
  //     var myCollapse = document.getElementById('collapseTarget')
  //     var bsCollapse = new Collapse(myCollapse, {toggle: false})
  //     toggle ? bsCollapse.show() : bsCollapse.hide()
  // })

  return (
    <div className="event-card">
      <img src={event.img} alt="Running event" />
      <div className="overImg">
        <h2><strong>{event.name}</strong></h2>
      </div>
      <div className="underImg">
        <h2><strong>{event.date}</strong></h2>
      </div>
      <div className="btn_group">
        <Button className="btn btn-info" onClick={() => {setToggleDetail(!toggleDetail); setToggleShare(false)}} type="button" data-toggle="collapse" data-target="#collapseDetail" aria-expanded="false" aria-controls="collapseDetail">
            Details
        </Button>
        <button className="btn btn-share" onClick={() => {setToggleShare(!toggleShare); setToggleDetail(false)}} type="button" data-toggle="collapse" data-target="#collapseShare" aria-expanded="false" aria-controls="collapseShare">
            Share
        </button>
        <button className="btn btn-info" type="button">
            Join
        </button>
      </div>
      <Collapse in={toggleDetail}>
        <div className="collapse" id="collapseDetail">
          <div className="card card-body">
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>{event.detail}</p>
          </div>
        </div>
      </Collapse>
      <Collapse in={toggleShare}>
      <div className="collapse" id="collapseShare">
          <div className="card card-body">
            <p className="share-event">Share event with: </p>
            {currentFriends}
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
  const cards = props.events.map(event => {
    return <EventCard event={event} key={event.name} />
  });
  return (
    <section className="box events">
      <div>
        {cards}
      </div>
    </section>
  );
}