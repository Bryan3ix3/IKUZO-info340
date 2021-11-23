import React, { useState, useEffect }from 'react';
import { Collapse } from 'bootstrap';


function EventCard(props) {
    let event = props.event;
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        var myCollapse = document.getElementById('collapseTarget')
        var bsCollapse = new Collapse(myCollapse, {toggle: false})
        toggle ? bsCollapse.show() : bsCollapse.hide()
    })

    return (
        <div className="event-card">
            <img src={"img/running.jpg"} alt="Running event" />
            <div className="overImg">
                <h2><strong>{event.name}</strong></h2>
            </div>
            <div className="underImg">
                <h2><strong>{event.date}</strong></h2>
            </div>

            <div className="btn_group">
                <button className="btn btn-info" onClick={setToggle(!open)} type="button" data-toggle="collapse" data-target="#collapseTarget" aria-expanded="false" aria-controls="collapseTarget">
                    Details
                </button>
                <button className="btn btn-share" type="button">
                    Share
                </button>
                <button className="btn btn-info" type="button">
                    Join
                </button>
            </div>

            <div className="collapse" id="collapseTarget">
                <div className="card card-body">
                    <p>{event.time}</p>
                    <p>{event.location}</p>
                    <p>{event.detail}</p>
                </div>
            </div>
        </div>
    );
}

export function Events(props) {
    let events = props.events;
    let cards = events.map(event => {
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