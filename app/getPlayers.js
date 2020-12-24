const getPlayers = (rounds) => {
  const players = [];
  rounds.forEach(round => {
    const roundPlayer = round.PlayerName.toLowerCase();
    
    if(!players.includes(roundPlayer)){
      if(round.PlayerName.toLowerCase() !== 'par'){
        players.push(roundPlayer);
      }
    }
  });
  return players;
};

exports.getPlayers = getPlayers;