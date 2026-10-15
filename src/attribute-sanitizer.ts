export function sanitizeAttributes(raw: Record<string, string>): Record<string, string> {
  const clean: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) {
    if (!k.startsWith('on')) clean[k] = v;
  }
  return clean;
}
