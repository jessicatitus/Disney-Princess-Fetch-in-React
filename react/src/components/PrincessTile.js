import React from 'react';

const PrincessTile = props => {
  let name = "Princess " + props.name

  return(
    <li>{name}</li>
  )
}

export default PrincessTile;
