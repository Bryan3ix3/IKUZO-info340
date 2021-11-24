import React from 'react';

export function ProfileScreen() {
  return (
    <div>
      <div className="banner mb-2">
        <img src="./img/pexels-tony-jamesandersson-1674752.jpg" className="profile-pic" alt="User's profile picture" />
        <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"><span className="fa fa-camera"></span></button>
        <p><strong>Annaka Harris</strong></p>
      </div>
      <div className="content mb-4">
        {/* <!-- bio --> */}
        <div className="d-flex justify-content-center">
            <div className="card">
                <div className="card-body">
                <h1 className="card-title">Bio</h1>
                <p className="card-text">Hello my name is Annaka (you can call me Anna). I love to sleep and stare at the stars. I'm looking for workout buddies around the UW Seattle area and I'd prefer to hang/workout on wkends. Idk what else to say... yeah 😂</p>
                <a href="#" className="btn btn-info">Edit Bio</a>
                </div>
            </div>
        </div>

        {/* <!-- accordion --> */}
        <div className="accordion accordion-flush m-auto" id="accordionFlushExample">
          <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Athletic Interests
                  </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                      <div className="card text-center">
                          <ul className="list-group list-group-flush">
                              <li className="list-group-item">Weightlifting</li>
                              <li className="list-group-item">Track</li>
                              <li className="list-group-item">Swimming</li>
                              <li className="list-group-item">Football</li>
                              <li className="list-group-item">Boxing</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Hobbies
                  </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                  <div className="card text-center">
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item">Horror Movies</li>
                          <li className="list-group-item">Chess</li>
                          <li className="list-group-item">Italian Cuisine</li>
                          <li className="list-group-item">U.S History</li>
                          <li className="list-group-item">Java</li>
                          <li className="list-group-item">Power Rangers</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </div>
      </div>
    </div>
  )
}