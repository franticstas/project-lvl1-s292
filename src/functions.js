import readlineSync from 'readline-sync';

export const funcName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!');
  return userName;
};
