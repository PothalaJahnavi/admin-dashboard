import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [searchfield, setSearchField] = useState("");

  return (
    <div className="d-flex flex-row justify-content-between">
      <div className="input-group " style={{ marginRight: "20px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={searchfield}
          onChange={(e) => setSearchField(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(searchfield);
            }
          }}
        />
      </div>
      <div>
        <button
          className="btn btn-success btn-large"
          onClick={() => handleSearch(searchfield)}
        >
          {" "}
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
