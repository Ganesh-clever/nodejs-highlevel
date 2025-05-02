class MyPromise {
  constructor(exector) {
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;

        this.onFulfilledCallbacks.forEach((cb) => cb(value));
      }
    };

    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;

        this.onRejectedCallbacks.forEach((cb) => cb(reason));
      }
    };

    try {
      exector(resolve, reject);
    } catch (error) {
      console.log(error);
    }
  }

  then(onFulFilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const fulfilled = (value) => {
        try {
          const result = onFulFilled ? onFulFilled(value) : value;
          resolve(result);
        } catch (err) {
          reject(err);
        }
      };

      const rejected = (reason) => {
        try {
          const result = onRejected ? onRejected(reason) : reason;
          reject(result);
        } catch (err) {
          reject(err);
        }
      };

      if (this.status === "fulfilled") {
        fulfilled(this.value);
      } else if (this.status === "rejected") {
        rejected(this.reason);
      } else {
        this.onFulfilledCallbacks.push(fulfilled);
        this.onRejectedCallbacks.push(rejected);
      }
    });
  }

  catch(onReject) {
    return this.then(null, onReject);
  }

  finally(onFinally) {
    return this.then(
      (value) => {
        onFinally();
        return value;
      },
      (reason) => {
        onFinally();
        return reason;
      }
    );
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }
}

const new1 = new MyPromise((resolve, reject) => {
  try {
    resolve("Hi this task is resolved");
  } catch (err) {
    reject(err);
  }
});

console.log(new1);

new1
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
