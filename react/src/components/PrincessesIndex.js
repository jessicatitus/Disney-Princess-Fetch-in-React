import React from 'react';
import PrincessTile from './PrincessTile'

const PrincessesIndex = props => {

  let princesses = props.princesses.map(princess => {
    return(
      <PrincessTile
        key={princess.id}
        name={princess.name}

      />
    )
  })
  return(
    <ul>
      {princesses}
    </ul>
  );
}

export default PrincessesIndex;
