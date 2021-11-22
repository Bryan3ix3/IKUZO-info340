import React from 'react';

export function Events() {
  return (
    <section className="box events">
        <div>
            <div className="event-card">
                <img src={"img/running.jpg"} alt="Running event" />
                <div className="overImg">
                    <h2><strong>Husky Campus Run</strong></h2>
                </div>
                <div className="underImg">
                    <h2><strong>NOV 05</strong></h2>
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
                    <div className="card card-body">
                        <p>Time: 10:00 AM (PST)</p>
                        <p>Location: IMA Track Field</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quo voluptates sint laudantium quaerat commodi!</p>
                        <p>Aliquam, harum cumque aspernatur consectetur tempore dicta explicabo facere, adipisci sunt quas perferendis repudiandae sequi!</p>
                        <p>Dolore aut error distinctio! Nemo impedit ipsum sunt neque vel enim unde incidunt nam consequuntur!</p>
                    </div>
                </div>
            </div>
            <div className="event-card">
                <img src={"img/basketBall.jpg"} alt="Basketball event" />
                <div className="overImg">
                    <h2><strong>Pick-Up Basketball</strong></h2>
                </div>
                <div className="underImg">
                    <h2><strong>NOV 06</strong></h2>
                </div>

                <div className="btn_group">
                    <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Details
                    </button>
                    <button className="btn btn-share" type="button">
                        Share
                    </button>
                    <button className="btn btn-info" type="button">
                        Join
                    </button>
                </div>

                <div className="collapse" id="collapseTwo">
                    <div className="card card-body">
                        <p>Time: 10:00 AM (PST)</p>
                        <p>Location: IMA Basketball Courts</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quo voluptates sint laudantium quaerat commodi!</p>
                        <p>Aliquam, harum cumque aspernatur consectetur tempore dicta explicabo facere, adipisci sunt quas perferendis repudiandae sequi!</p>
                        <p>Dolore aut error distinctio! Nemo impedit ipsum sunt neque vel enim unde incidunt nam consequuntur!</p>
                    </div>
                </div>
            </div>
            <div className="event-card">
                <img src={"img/tennis.webp"} alt="Tennis event" />
                <div className="overImg">
                    <h2><strong>Tennis Games</strong></h2>
                </div>
                <div className="underImg">
                    <h2><strong>NOV 07</strong></h2>
                </div>

                <div className="btn_group">
                    <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Details
                    </button>
                    <button className="btn btn-share" type="button">
                        Share
                    </button>
                    <button className="btn btn-info" type="button">
                        Join
                    </button>
                </div>

                <div className="collapse" id="collapseThree">
                    <div className="card card-body">
                        <p>Time: 3:00 PM (PST)</p>
                        <p>Location: IMA Tennis Courts</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quo voluptates sint laudantium quaerat commodi!</p>
                        <p>Aliquam, harum cumque aspernatur consectetur tempore dicta explicabo facere, adipisci sunt quas perferendis repudiandae sequi!</p>
                        <p>Dolore aut error distinctio! Nemo impedit ipsum sunt neque vel enim unde incidunt nam consequuntur!</p>
                    </div>
                </div>
            </div>
            <div className="event-card">
                <!-- Card 4 -->
                <img src="img/football.jpg" alt="Football event">
                <div className="overImg">
                    <h2><strong>Huskies Football Game</strong></h2>
                </div>
                <div className="underImg">
                    <h2><strong>NOV 08</strong></h2>
                </div>

                <div className="btn_group">
                    <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Details
                    </button>
                    <button className="btn btn-share" type="button">
                        Share
                    </button>
                    <button className="btn btn-info" type="button">
                        Join
                    </button>
                </div>

                <div className="collapse" id="collapseFour">
                    <div className="card card-body">
                        <p>Time: 1:00 PM (PST)</p>
                        <p>Location: IMA Soccer Field</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quo voluptates sint laudantium quaerat commodi!</p>
                        <p>Aliquam, harum cumque aspernatur consectetur tempore dicta explicabo facere, adipisci sunt quas perferendis repudiandae sequi!</p>
                        <p>Dolore aut error distinctio! Nemo impedit ipsum sunt neque vel enim unde incidunt nam consequuntur!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}