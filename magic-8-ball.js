let username = '';
const userquestion='?';
let randomnumber=Math.floor(Math.random()*20);
let eightball='';

username ? console.log(`Hi ${username}!`) : console.log('Hello!');

username ? console.log(`${username} asked the question, "${userquestion}"`) : 
console.log(`You asked the question, ${userquestion}.`)

switch (randomnumber) {
    case 0:
        eightball='It is certain';
        break;
    case 1:
        eightball='It is decidedly so';
        break;
    case 2:
        eightball='Without a doubt';
        break;
    case 3:
        eightball='Yes definitely';
        break;
    case 4:
        eightball='You may rely on it';
        break;
    case 5:
        eightball='As I see it, yes';
        break;
    case 6:
        eightball='Most likely';
        break;
    case 7:
        eightball='Outlook good';
        break;
    case 8:
        eightball='Yes';
        break;
    case 9:
        eightball='Signs point to yes';
        break;
    case 10:
        eightball='Reply hazy, try again';
        break;
    case 11:
        eightball='Ask again later';
        break;
    case 12:
        eightball='Better not tell you now';
        break;
    case 13:
        eightball='Cannot predict now';
        break;
    case 14:
        eightball='Concentrate and ask again';
        break;
    case 15:
        eightball='Don\'t count on it';
        break;
    case 16:
        eightball='My reply is no';
        break;
    case 17:
        eightball='My sources say no';
        break;
    case 18:
        eightball='Outlook not so good';
        break;
    case 19:
        eightball='Very doubtful';
        break;
    default:
        eightball='Something is broken'
}
console.log(`The answer is...${eightball}`);
