export const logger = {
  log: (...agrs) => {
    if (__DEV__) {
      /* eslint-disable no-console */
      console.log(...agrs);
    }
  },
};
