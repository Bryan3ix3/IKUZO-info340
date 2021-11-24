import React from 'react';

function FilterOption({filterItem}) {
  const optionList = filterItem.options.map((item, index) => {
    index = index + 1;
    const optionID = filterItem.type + index;
    return (
      <div className="form-check" key={optionID}>
        <input className="form-check-input" type={filterItem.type} name={filterItem.name} id={optionID} />
        <label className="form-check-label" htmlFor={optionID}>
          {item}
        </label>
      </div>
    );
  });

  return (
    <div className="card mt-3 mb-3">
      <div className="card-header">
        <strong>{filterItem.category}</strong>
      </div>
      <div className="card-body d-block">
        {optionList}
      </div>
    </div>
  );
}

export function FilterMenu(props) {
  const filterCategories = props.filters.map((item) => {
    return <FilterOption filterItem={item} key={item.category} />
  });

  return (
     <section className="box filters">
      <div className="filter-border">
        <h2 className="mb-2">Sort By:</h2>
        {filterCategories}
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