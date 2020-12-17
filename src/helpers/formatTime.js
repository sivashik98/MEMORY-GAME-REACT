export const getFormattedTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = time - hours * 3600 - minutes * 60;

  return `${hours > 9 ? hours : "0" + hours} : ${
    minutes > 9 ? minutes : "0" + minutes
  } : ${seconds > 9 ? seconds : "0" + seconds}`;
};
