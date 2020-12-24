
const getRoundsByPlayer = (rounds, name) => {
  return rounds.filter(round => {
    return round.PlayerName.toLowerCase() === name.toLowerCase();
  })
}

exports.getRoundsByPlayer = getRoundsByPlayer;