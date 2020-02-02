import React, { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBarContainer";
import dummydata from "./dummy-data";

const App = () => {
  return (
    <div className="App">
      <SearchBar dummyData={dummydata} />
    </div>
  );
};

export default App;
