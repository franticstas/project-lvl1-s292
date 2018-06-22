import readlineSync from 'readline-sync';

const isEven = someNumber => (someNumber % 2 == 0) ? true : false;

const myNumber = (i, userName) => {
	const randNum = Math.floor(Math.random() * 100);
	if ( i === 4) {
		return console.log('Congratulations, ' + userName + '!');
	}
	console.log('Question: ' + randNum);
	const userAnswer = readlineSync.question('Your answer: ');
	if (isEven(randNum) && userAnswer === 'yes') {
		console.log('Correct!');
		i += 1;
		myNumber(i, userName);
	} else if((isEven(randNum) && userAnswer === 'no') || (isEven(randNum) && userAnswer != 'no')) {
		return console.log("'" + userAnswer + "'" + "is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, " + userName + "!");
	}
	if (!isEven(randNum) && userAnswer === 'no') {
		console.log('Correct!');
		i += 1;
		myNumber(i, userName);
	} else if ((!isEven(randNum) && userAnswer === 'yes') || (!isEven(randNum) && userAnswer != 'yes')){
		return console.log("'" + userAnswer + "'" + "is wrong answer ;(. Correct answer was 'no'.\nLet's try again, " + userName + "!"); 
	}
};

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const userName = readlineSync.question('May I have your name? ');
myNumber(1, userName);