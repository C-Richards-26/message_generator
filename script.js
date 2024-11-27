let quotePool = ['All our dreams can come true, if we have the courage to pursue them.', 'You are never too old to set another goal, or to dream a new dream.', 
    'You are braver than you believe, stronger than you seem, and smarter than you think.', 'Go confidently in the direction of your dreams.', 
    'Live the life you have imagined.', 'You must do the things you think you cannot do.', 'There is nothing impossible to they who will try.', 
    'We will fail when we fail to try.', 'Attitude is the little thing that makes a big difference.'];


const numGen = () => {
    return Math.floor(Math.random() * 9);
};

const generatePhrase = () => {
   let endPhrase = [];
   let randomNumber
   while (endPhrase.length < 3) {
        randomNumber = numGen();
        if (endPhrase.includes(quotePool[randomNumber]) === false) {
            endPhrase.push(quotePool[randomNumber]);
        }
   }
   return endPhrase.join(' ')
};

const buttonPush = () => {
    document.getElementById("phrase").innerHTML = generatePhrase();
};
document.getElementById("generate").addEventListener('click',buttonPush);

