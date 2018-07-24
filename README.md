# @jagi/set-interval-time-fn

## Example usage

```js
import {
  setIntervalTimeFn,
  clearIntervalTimeFn,
} from "@jagi/set-interval-time-fn";

const start = Date.now();

const timerId = setIntervalTimeFn(
  () => {
    console.log(`${Date.now() - start} ms elapsed`);
  },
  time => {
    // Start interval from 1 second and increase it by 1 second on each execution.
    return !time ? 1000 : time + 1000;
  },
);

setTimeout(() => {
  clearIntervalTimeFn(timerId);
}, 10 * 1000); // Clear interval after 20 seconds.
```
