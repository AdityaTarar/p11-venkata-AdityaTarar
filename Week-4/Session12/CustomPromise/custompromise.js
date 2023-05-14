class CustomPromise {
  constructor(executor) {
    this.value = undefined;
    this.reason = undefined;
    this.state = "pending";
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.value = value;
        this.state = "fulfilled";
        this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.reason = reason;
        this.state = "rejected";
        this.onRejectedCallbacks.forEach((callback) => callback(this.reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      const onFulfilledCallback = (value) => {
        try {
          if (typeof onFulfilled === "function") {
            const result = onFulfilled(value);
            if (result instanceof CustomPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } else {
            resolve(value);
          }
        } catch (error) {
          reject(error);
        }
      };

      const onRejectedCallback = (reason) => {
        try {
          if (typeof onRejected === "function") {
            const result = onRejected(reason);
            if (result instanceof CustomPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } else {
            reject(reason);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === "fulfilled") {
        onFulfilledCallback(this.value);
      } else if (this.state === "rejected") {
        onRejectedCallback(this.reason);
      } else {
        this.onFulfilledCallbacks.push(onFulfilledCallback);
        this.onRejectedCallbacks.push(onRejectedCallback);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    return new CustomPromise((resolve) => {
      resolve(value);
    });
  }

  static reject(reason) {
    return new CustomPromise((resolve, reject) => {
      reject(reason);
    });
  }
}
const myPromise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
