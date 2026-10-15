export class HTML5Tokenizer {
  tokenize(stream: string): string[] {
    return stream.match(/<[^>]+>|[^<]+/g) || [];
  }
}
