import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
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
          <IoSearchSharp color="white" size={28}/>
        </button>
      </div>
    </div>
  );
};

export default Search;
