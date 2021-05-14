import React from "react";

function SearchInput(props) {
  return (
    <div class="p-5 col-lg-3 mx-auto input-group input-group-lg">
      <div type="button" class="input-group-prepend">
        <button
          onClick={props.handleFormSubmit}
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
        >
          Button
        </button>
      </div>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        placeholder="Search Employee"
      ></input>
    </div>
  );
}

export default SearchInput;
