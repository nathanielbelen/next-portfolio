export function throttle(func, wait) {
  let waiting = false;
  let lastArgs;
  let timer = null;

  const timeoutFn = (context) => {
    timer = setTimeout(() => {
      if (lastArgs) {
        func.apply(context, lastArgs);
        lastArgs = null;
        if (timer) timer = null;
        timeoutFn(context);
      } else {
        waiting = false;
      }
    }, wait);
  };

  return function () {
    if (!waiting) {
      waiting = true;
      timeoutFn(this);
    }
    lastArgs = [...arguments];
  };
}

export function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}