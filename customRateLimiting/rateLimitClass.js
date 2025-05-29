class RateLimiter {
  constructor(limit, windowsMs) {
    this.limit = limit;
    this.windowsMs = windowsMs;
    this.config = {};
  }

  rateLimiterHandler(ip) {
    let now = Date.now();

    if (!this.config[ip]) {
      this.config[ip] = {
        limitCount: 1,
        windowsMs: now,
      };
      return "Request allowed...";
    }

    let timeRequestOut = now - this.config[ip].windowsMs;

    if (timeRequestOut < this.windowsMs) {
      if (this.config[ip].limitCount < this.limit) {
        this.config[ip].limitCount++;
        return "Request allowed...";
      } else {
        return "Reached the limit";
      }
    }

    if (timeRequestOut > this.windowsMs) {
      this.config[ip] = {
        limitCount: 1,
        windowsMs: now,
      };
      return "Rate limiter reseted...";
    }
  }
}

const RL = new RateLimiter(5, 1000);

console.log(RL.rateLimiterHandler("121,10.120.12"));
console.log(RL.rateLimiterHandler("121,10.120.12"));
console.log(RL.rateLimiterHandler("121,10.120.12"));

setTimeout(() => {
  console.log(RL.rateLimiterHandler("121,10.120.12"));
}, 1001);
