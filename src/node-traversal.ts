export function walkTree(node: any, visit: (n: any) => void): void {
  visit(node);
  (node.children || []).forEach((c: any) => walkTree(c, visit));
}
