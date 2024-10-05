import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const a = new ClassRoom(19);
  const b = new ClassRoom(20);
  const c = new ClassRoom(34);
  const res = [];

  res.push(a);
  res.push(b);
  res.push(c);

  return res;
}
