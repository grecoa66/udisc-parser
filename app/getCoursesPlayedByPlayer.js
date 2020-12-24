const getRoundsByPlayer = require('./getRoundsByPlayer');

const getCoursesPlayedByPlayer = (rounds, playerName) => {
  const roundsByPlayer = getRoundsByPlayer.getRoundsByPlayer(rounds, playerName);
  
  const courses = [];

  roundsByPlayer.forEach(round => {
    const courseFound = courses.find(course => {
      return course.courseName.toLowerCase() === round.CourseName.toLowerCase()
    });
    
    if(courseFound){
      courseFound.roundsPlayed++;
    }else{
      courses.push({
          courseName: round.CourseName,
          roundsPlayed: 1
      });
    }
  });
  console.log(courses);

  return courses.sort((a,b) => {
    if(a.roundsPlayed > b.roundsPlayed){
      return -1;
    }
    return 1;
  });
}

exports.getCoursesPlayedByPlayer = getCoursesPlayedByPlayer;