export default function updateStudentGradeByCity(
  listOfStudents,
  city,
  newGrades,
) {
  const newStudentList = listOfStudents.filter(
    (student) => student.location === city,
  );
  return newStudentList.map((student) => {
    const grade = newGrades.filter((grade) => grade.studentId === student.id);
    if (grade[0]) {
      // eslint-disable-next-line no-param-reassign
      student.grade = grade[0].grade;
    } else {
      // eslint-disable-next-line no-param-reassign
      student.grade = 'N/A';
    }
    return student;
  });
}
