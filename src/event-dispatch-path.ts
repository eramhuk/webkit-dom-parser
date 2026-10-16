export function computePath(target: any): any[] {
  const path = [];
  let cur = target;
  while (cur) { path.push(cur); cur = cur.parentNode; }
  return path;
}
