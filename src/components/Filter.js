import React, { useState } from 'react';

function CheckBoxOption(props) {

  const optionList = props.filterItem.options.map((item, index) => {
    index = index + 1;
    const optionID = "checkBox" + index;
    return (
      <div className="form-check" key={optionID}>
        <input className="form-check-input" type="checkbox" name={props.name} id={optionID} />
        <label className="form-check-label" htmlFor={optionID}>
          {item}
        </label>
      </div>
    )
  });

  return (
    <div className="card mt-3 mb-3">
      <div className="card-header">
        <strong>{props.filterItem.category}</strong>
      </div>
      <div className="card-body d-block">
        {optionList}
      </div>
    </div>
  )
}

function RadioOption() {
  const options =["One Week", "Two weeks", "One Month"];

  const optionList = options.map((item, index) => {
    index = index + 1;
    const optionID = "radio" + index;
    return(
      <div className="form-check" key={optionID}>
        <input className="form-check-input" type="radio" name="dateRadioBtn" id={optionID} />
        <label className="form-check-label" htmlFor={optionID}>
          {item}
        </label>
      </div>
    );
  });

  return (
    <div className="card mt-3 mb-3">
      <div className="card-header">
        <strong>Upcoming Events</strong>
      </div>
      <div className="card-body d-block">
        {optionList}
      </div>
    </div>
  )
}

export function FilterMenu() {
  const checkBoxOptions = [
    {category: "Location", options: ["IMA", "Denny Field", "Husky Track", "Golf Range", "Waterfront"], name: "locationRadioBtn"},
    {category: "Time of Day", options: ["Morning", "Afternoon", "Evening"], name: "timeOfDayRadioBtn"}
  ];
  const [selectedValues, setSelectedValues] = useState([]);

  const checkBoxCategories = checkBoxOptions.map((item) => {
    return <CheckBoxOption filterItem={item} key={item.category} />
  });

  return (
     <section className="box filters">
      <div className="filter-border">
        <h2 className="mb-2">Sort By:</h2>
        <RadioOption />
        {checkBoxCategories}
        <button className="btn btn-info mt-2" type="button">Filter</button>
      </div>
    </section>
  );
}

export function FilterButton() {
  return(
    <button id="filter-icon">
      <img src={"img/filter.png"} alt="Filter icon" />
    </button>
  )
}