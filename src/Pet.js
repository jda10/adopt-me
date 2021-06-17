import React from 'react';

/*
const pet = (props) => {
    return React.createElement("div", {}, [
      React.createElement("h2", {}, props.name),
      React.createElement("h3", {}, props.type),
      React.createElement("h3", {}, props.breed),
    ]);
  };
*/
  const pet = (props) => {
    return(
      <div>
      <h2>{props.name}</h2>
      <h3>{props.type}</h3>
      <h3>{props.breed}</h3>
      </div>
    )
  }

  export default pet;