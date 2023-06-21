import Student from "./compontents/student";
import React from "react";
import {BrowseRouter as Router,
         Switch,
         Route,
         Redirect
        }from 'react-router-dom'


        


function App() {
  return (
    <div >
      <Student/>
    </div>
  );
}

export default App;
