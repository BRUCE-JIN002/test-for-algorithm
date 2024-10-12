class AuthenticationManager {
  timeToLive: number;
  manager: Map<string, number>;

  constructor(timeToLive: number) {
    this.timeToLive = timeToLive;
    this.manager = new Map();
  }

  generate(tokenId: string, currentTime: number): void {
    this.manager.set(tokenId, currentTime);
  }

  countUnexpiredTokens(currentTime: number): number {
    let result = 0;
    for (const time of this.manager.values()) {
      if (time + this.timeToLive > currentTime) {
        result += 1;
      }
    }
    return result;
  }

  renew(tokenId: string, currentTime: number): void {
    if (this.manager.has(tokenId)) {
      let time = this.manager.get(tokenId);
      if (time && time + this.timeToLive > currentTime) {
        this.manager.set(tokenId, currentTime);
      }
    }
  }
}
