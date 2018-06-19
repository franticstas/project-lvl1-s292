import readlineSync from 'readline-sync';

export const func = () => {
	var userName = readlineSync.question('May I have your name? ');
	console.log('Hi ' + userName + '!');
};
