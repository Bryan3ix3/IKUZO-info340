import React from 'react';

export function Events() {
  return (
    <div className="event-card">
        <img src={"img/running.jpg"} alt="Running event" />
        <div className="overImg">
            <h2><strong>Husky Campus Run</strong></h2>  //TITLE
        </div>
        <div className="underImg">
            <h2><strong>NOV 05</strong></h2>    //DATE
        </div>

        <div className="btn_group">
            <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Details
            </button>
            <button className="btn btn-share" type="button">
                Share
            </button>
            <button className="btn btn-info" type="button">
                Join
            </button>
        </div>

        <div className="collapse" id="collapseOne">
            <div className="card card-body">    //CONTENT
                <p>Time: 10:00 AM (PST)</p>
                <p>Location: IMA Track Field</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quo voluptates sint laudantium quaerat commodi!</p>
                <p>Aliquam, harum cumque aspernatur consectetur tempore dicta explicabo facere, adipisci sunt quas perferendis repudiandae sequi!</p>
                <p>Dolore aut error distinctio! Nemo impedit ipsum sunt neque vel enim unde incidunt nam consequuntur!</p>
            </div>
        </div>
    </div>
  );
}