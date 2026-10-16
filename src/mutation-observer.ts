export class MutationQueue {
  private records: any[] = [];
  enqueue(r: any): void { this.records.push(r); }
  flush(): any[] { return this.records.splice(0); }
}
