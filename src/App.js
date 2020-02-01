/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";
import dummydata from "./dummy-data";

const App = () => {
  const [dummyData, setDummyData] = useState(dummydata);
  // set up state for the dummy data and pass to your PostsPage
  return (
    <div className="App">
      <SearchBar />
      {/* Add components here  and pass props where appropriate */}
      <PostsPage dummyData={dummydata} />
    </div>
  );
};

export default App;
