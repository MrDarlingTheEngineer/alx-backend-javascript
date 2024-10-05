export default function getListStudentIds(param) {
  const result = [];
  if (typeof param === 'object') {
    param.map((item) => result.push(item.id));
  }
  return result;
}
