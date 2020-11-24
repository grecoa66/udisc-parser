
const getRoundsByPlayer = (rounds, name) => {
  return rounds.filter(round => {
    return round.PlayerName === name;
  })
}

exports.getRoundsByPlayer = getRoundsByPlayer;