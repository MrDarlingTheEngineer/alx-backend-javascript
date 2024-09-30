export default function createIteratorObject(report) {
  /* eslint-disable no-unused-vars */
  const employee = [];
  for (const [dept, emplys] of Object.entries(report.allEmployees)) {
    for (const emp of emplys) {
      employee.push(emp);
    }
  }

  return employee;
}
