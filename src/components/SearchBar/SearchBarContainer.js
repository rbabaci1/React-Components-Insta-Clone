import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import PostsPage from "../PostsContainer/PostsPage";

// Destructure the dummyData array and extract the array
const SearchBar = ({ dummyData }) => {
  /* The searchPost state saves the data from the search input
  on every occurance of the onChange event "line 46" */
  const [searchedUser, setSearchedUser] = useState("");
  // The searchResults state is used to set the search result
  const [searchResult, setSearchResult] = useState([]);

  // useEffect executes whenever the dependency method get changed.
  useEffect(
    /* The function to execute as the first argument whenever 
    the array of dependencies is changed */
    () => {
      /* filter the dummyData by comparing the username of every user
       and the inputted username */
      const results = dummyData.filter(user =>
        // return only the object that has the inputted username
        user.username.toLowerCase().includes(searchedUser.toLowerCase())
      );
      // set the state of the searched username to the filter array of users
      setSearchResult(results);
    },

    /* The array of dependencies that useEffect dependent on which
    gets changed on every input by the user */
    [searchedUser]
  );

  return (
    <div>
      <div className="search-bar-wrapper">
        <div className="image-wrapper">
          <i className="fab fa-instagram" />
        </div>

        <form className="search-form">
          <input
            type="text"
            placeholder="Search"
            // Using setSearchPost, set the state searchPost to the inputted value from the user
            onChange={event => setSearchedUser(event.target.value)}
          />
        </form>

        <div className="social-wrapper">
          <div className="social">
            <i className="far fa-compass" />
          </div>
          <div className="social">
            <i className="far fa-heart" />
          </div>
          <div className="social">
            <i className="far fa-user-circle" />
          </div>
        </div>
      </div>
      {/* render only the posts of the searched username */}
      <PostsPage dummyData={searchResult} />
    </div>
  );
};

export default SearchBar;
