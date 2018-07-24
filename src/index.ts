// Push null into array so we start from the timer ID equal 1.
const timers: (number | null)[] = [null];

export const setIntervalTimeFn = (
  fn: () => void,
  timeFn: (time?: number) => number,
): number => {
  const timerId = timers.length;
  const nextInterval = (time?: number): number => {
    time = timeFn(time);
    timers[timerId] = <any>setTimeout(() => {
      fn();
      // Allow clearing interval inside callback function.
      if (timers[timerId]) {
        nextInterval(time);
      }
    }, time);
    return timerId;
  };
  return nextInterval();
};

export const clearIntervalTimeFn = (timerId: number) => {
  const timeoutId = timers[timerId];
  if (timeoutId) {
    clearTimeout(timeoutId);
    timers[timerId] = null;
  }
};
