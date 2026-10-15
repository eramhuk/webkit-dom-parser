export interface DOMNode {
  tagName: string;
  children: DOMNode[];
}
export function createNode(tagName: string): DOMNode {
  return { tagName, children: [] };
}
