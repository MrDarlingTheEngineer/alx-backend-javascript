export default function guardrail(mathFunction) {
  const queue = [];
  let val;
  try {
    val = mathFunction();
  } catch (err) {
    val = err.toString();
  }

  queue.push(val, 'Guardrail was processed');
  return queue;
}
