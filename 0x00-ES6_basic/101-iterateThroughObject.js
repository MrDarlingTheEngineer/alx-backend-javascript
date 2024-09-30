export default function iterateThroughObject(reportWithIterator) {
  let itemstr = '';
  let i = 0;
  for (const item of reportWithIterator) {
    if (reportWithIterator.length - 1 === i) itemstr += item;
    else {
      itemstr += `${item} | `;
    }
    i += 1;
  }

  return itemstr;
}
