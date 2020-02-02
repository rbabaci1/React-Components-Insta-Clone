import React, { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";
import dummydata from "./dummy-data";

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const [dummyData, setDummyData] = useState(dummydata);

  return (
    <div className="App">
      <SearchBar />
      <PostsPage dummyData={dummyData} />
    </div>
  );
};

export default App;
