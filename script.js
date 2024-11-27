const firstSentence = ['All our dreams can come true, if we have the courage to pursue them.', 'You are never too old to set another goal, or to dream a new dream.', 'You are braver than you believe, stronger than you seem, and smarter than you think.'];

const secondSentence = ['Go confidently in the direction of your dreams.', 'Live the life you have imagined.', 'You must do the things you think you cannot do.'];

const thirdSentence = ['There is nothing impossible to they who will try.', 'We will fail when we fail to try.', 'Attitude is the little thing that makes a big difference.'];

const numGen = () => {
    return Math.floor(Math.random() * 3);
};

const generatePhrase = () => {
    return `${firstSentence[numGen()]} ${secondSentence[numGen()]} ${thirdSentence[numGen()]}`;
}

const buttonPush = () => {
    document.getElementById("phrase").innerHTML = generatePhrase();
};
document.getElementById("generate").addEventListener('click',buttonPush);

