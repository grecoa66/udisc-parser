const getCourses = (rounds) => {
  const courses = [];

  rounds.forEach(round => {
    const courseName = round['CourseName'].toLowerCase();
    if(!courses.includes(courseName)){
      courses.push(courseName);
    }
  });

  return courses;
};

exports.getCourses = getCourses;