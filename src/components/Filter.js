import React from 'react';

export function Filter() {
  return (
     <section className="box filters">
      <div className="filter-border">
        <h2 className="mb-2">Sort By:</h2>
        {/* <!-- Date Filter --> */}
        <div className="card mt-3 mb-3">
          <div className="card-header">
              <strong>Date</strong>
          </div>
          <div className="card-body d-block">
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="dateRadioBtn" id="dateInput1" />
                  <label className="form-check-label" for="dateInput1">
                      One week
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="dateRadioBtn" id="dateInput2" />
                  <label className="form-check-label" for="dateInput2">
                      Two weeks
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="dateRadioBtn" id="dateInput3" />
                  <label className="form-check-label" for="dateInput3">
                      One Month
                  </label>
              </div>
          </div>
        </div>
        {/* <!-- Location Filter --> */}
        <div className="card mt-3 mb-3">
          <div className="card-header">
                  <strong>Location</strong>
          </div>
          <div className="card-body d-block">
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="locationRadioBtn" id="locationCheck1" checked />
                  <label className="form-check-label" for="locationCheck1">
                      IMA
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="locationRadioBtn" id="locationCheck2" />
                  <label className="form-check-label" for="locationCheck2">
                      Denny Field
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="locationRadioBtn" id="locationCheck3" />
                  <label className="form-check-label" for="locationCheck3">
                      Husky Track
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="locationRadioBtn" id="locationCheck4" />
                  <label className="form-check-label" for="locationCheck4">
                      Tennis Court
                  </label>
              </div>
          </div>
        </div>
        {/* <!-- Time of Day --> */}
        <div className="card mt-3 mb-3">
          <div className="card-header">
                  <strong>Time of Day</strong>
          </div>
          <div className="card-body d-block">
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="timeOfDayRadioBtn" id="timeOfDayCheck1" />
                  <label className="form-check-label" for="timeOfDayCheck1">
                      Morning
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="timeOfDayRadioBtn" id="timeOfDayCheck2" checked />
                  <label className="form-check-label" for="timeOfDayCheck2">
                      Afternoon
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="timeOfDayRadioBtn" id="timeOfDayCheck3" />
                  <label className="form-check-label" for="timeOfDayCheck3">
                      Evening
                  </label>
              </div>
          </div>
        </div>
        <button className="btn btn-info mt-2" type="button">Filter</button>
      </div>
    </section>
  );
}