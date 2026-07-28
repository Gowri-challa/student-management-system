import React from "react";
import "./SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm }) {

    return (

        <div className="search-box">

            <input

                type="text"

                placeholder="🔍 Search by ID, Name, Email or Course"

                value={searchTerm}

                onChange={(e) => setSearchTerm(e.target.value)}

            />

            <button

                className="clear-btn"

                onClick={() => setSearchTerm("")}

            >

                Clear

            </button>

        </div>

    );

}

export default SearchBar;