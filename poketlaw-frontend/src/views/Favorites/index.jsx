import React from 'react';
import Dashboard from "../DashBoard";

function Favorites(props) {
  return (
    <Dashboard favorites={true} {...props}/>
  );
}

export default Favorites;
