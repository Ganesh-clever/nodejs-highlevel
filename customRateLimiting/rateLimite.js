function rateLimiting() {
  let config = {};
  
  return (...args) => {
    let ip = args[0];
    let MAX_LIMIT = args[1];
    let MAX_TIMEOUT = args[2];
    let now = Date.now();

    if (!config[ip]) {
      config[ip] = {
        windowMs: now,
        requestCount: 1,
      };
      return "It works now";
    }

    let timeRequestOut = now - config[ip].windowMs;

    if (timeRequestOut < MAX_TIMEOUT) {
      if (config[ip].requestCount < MAX_LIMIT) {
        config[ip].requestCount++;
        return "It works now";
      } else {
        return "Reached the limits";
      }
    } else if (timeRequestOut >= MAX_TIMEOUT) {
        console.log(timeRequestOut, MAX_TIMEOUT);
        
      config[ip] = {
        windowMs: now,
        requestCount: 1,
      };
      return "Resetted timer"; 
    }
  };
}


const rateLimitHandler = rateLimiting("121.101.10.15", 5, 1000);
console.log(rateLimitHandler()); // Request 1
console.log(rateLimitHandler()); // Request 2
console.log(rateLimitHandler()); // Request 3
// console.log(rateLimitHandler()); // Request 4
// console.log(rateLimitHandler()); // Request 5

setTimeout(() => {
  console.log(rateLimitHandler()); // should reset after 1 second
}, 1000);
