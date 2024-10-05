export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce(
    (accumulator, student) => accumulator + student.id,
    0,
  );
}
