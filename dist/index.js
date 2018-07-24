"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Push null into array so we start from the timer ID equal 1.
const timers = [null];
exports.setIntervalTimeFn = (fn, timeFn) => {
    const timerId = timers.length;
    const nextInterval = (time) => {
        time = timeFn(time);
        timers[timerId] = setTimeout(() => {
            fn();
            nextInterval(time);
        }, time);
        return timerId;
    };
    return nextInterval();
};
exports.clearIntervalTimeFn = (timerId) => {
    const timeoutId = timers[timerId];
    if (timeoutId) {
        clearTimeout(timeoutId);
        timers[timerId] = null;
    }
};
