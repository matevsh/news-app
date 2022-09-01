export const returnDuration = (time) => {
  const actualTime = new Date((new Date().getTime()) - time);
  return `${actualTime.getSeconds()}.${actualTime.getMilliseconds()}`;
};
