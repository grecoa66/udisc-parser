const getRoundsByPlayer = require('./getRoundsByPlayer');

const getCoursesPlayedByPlayer = (rounds, playerName) => {
  const roundsByPlayer = getRoundsByPlayer.getRoundsByPlayer(rounds, playerName);
  
  const courses = {};

  roundsByPlayer.forEach(round => {
    if(round.CourseName in courses){
      courses[round.CourseName].roundsPlayed++;
    }else{
      courses[round.CourseName] = {
        roundsPlayed: 1
      };
    }
  });

  return courses;
}

exports.getCoursesPlayedByPlayer = getCoursesPlayedByPlayer;