import React, { useState, useEffect } from 'react';
import { Button, Collapse } from 'react-bootstrap';


function EventCard({event}) {
  const [toggle, setToggle] = useState(false);
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
        <Button className="btn btn-info" onClick={() => setToggle(!toggle)} type="button" data-toggle="collapse" data-target="#collapseTarget" aria-expanded="false" aria-controls="collapseTarget">
            Details
        </Button>
        <button className="btn btn-share" type="button">
            Share
        </button>
        <button className="btn btn-info" type="button">
            Join
        </button>
      </div>
      <Collapse in={toggle}>
        <div className="collapse" id="collapseTarget">
          <div className="card card-body">
            <p>{event.time}</p>
            <p>{event.location}</p>
            <p>{event.detail}</p>
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