
const getRoundsByPlayer = (rounds, name) => {
  const roundsPlayed = rounds.filter(round => {
    return round.PlayerName.toLowerCase() === name.toLowerCase();
  });

  return roundsPlayed.sort((a, b) => {
    if(parseInt(a['+/-']) > parseInt(b['+/-'])){
      return 1;
    }
    return -1;
  });
};

exports.getRoundsByPlayer = getRoundsByPlayer;