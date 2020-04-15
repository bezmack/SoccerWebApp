import React from 'react';
import TeamProfile from "./TeamProfile";
import PlayersData from './Players';

const Team = (props) => {

  const individualPlayerProfile = PlayersData.map(player => 
    <TeamProfile key={player.id}  player={player} /> );
  return(
    <div className="row">
      {individualPlayerProfile }
    </div> 
  );
}

export default Team;
