class BrowserHistory1 {
  private array: string[];
  private index: number;

  constructor(homepage: string) {
    this.array = [homepage];
    this.index = 0;
  }

  visit(url: string): void {
    // 删除当前页之后的所有记录
    this.array.length = this.index + 1;
    this.array.push(url);
    this.index++;
  }

  back(steps: number): string {
    this.index = Math.max(this.index - steps, 0);
    return this.array[this.index];
  }

  forward(steps: number): string {
    this.index = Math.min(this.index + steps, this.array.length - 1);
    return this.array[this.index];
  }
}
