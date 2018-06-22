import readlineSync from 'readline-sync';
import { evenGame } from './games/b-even';

export const userGame = (answer = '', game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${answer}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!');
  
  switch(game) {
	case 'even':
	  //console.log('SWITCH');	
	  evenGame(userName);
	  break;
  }; 
};