import React from "react";

const TypeFilter = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "type",
    });
  };
  return (
    <>
      <label className="form__label display-block" htmlFor="type"></label>
      <input
        className="form__input-text"
        type="text"
        name="type"
        id="type"
        value={props.filterType}
        onChange={handleChange}
      />
    </>
  );
};

export default TypeFilter;
