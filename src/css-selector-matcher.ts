export function matchSelector(node: any, selector: string): boolean {
  return node.tagName?.toLowerCase() === selector.toLowerCase();
}
