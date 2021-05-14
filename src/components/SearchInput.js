import React from "react";

function SearchInput() {
  return (
    <div class="col-lg-3 mx-auto input-group input-group-lg">
      <div class="input-group-prepend">
        <span
          class="input-group-text bg-primary text-light"
          id="inputGroup-sizing-lg"
        >
          Submit
        </span>
      </div>
      <input
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
