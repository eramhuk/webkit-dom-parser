export function decodeEntity(e: string): string {
  const map: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>' };
  return map[e] || e;
}
