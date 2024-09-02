const dictionary = ["Apple", "Bread", "Chair", "Dance", "Earth", "Fight", "Great", "Happy", "Image", "Juice", "Knife", "Light", "Music", "Night", "Ocean", "Party", "Quiet", "River", "Smile", "Table", "Under", "Voice", "Water", "Youth", "Zebra", "Magic", "Pearl", "Dream", "Fresh", "Grass"
]
const dictionary_set = new Set(dictionary);

function scrambler(){
   
    const dict_size = dictionary.length;
    let random_index = Math.floor(Math.random() * (dict_size-0+1));
    word = dictionary[random_index].toLowerCase();
    let len = (dictionary[0].length)-1;
    let scrambled_word="";

    while(len != -1){
        let random_index = Math.floor(Math.random() * (len - 0 + 1));
        scrambled_word=scrambled_word+word[random_index];
        word=word.slice(0,random_index)+word.slice(random_index+1);
        len--;
    }

    return scrambled_word;
}


// Function to be called when Button 1 is clicked
function handleStartBtnClick() {
    let display_word = document.querySelector('#word');
    display_word.innerText=scrambler();
    document.querySelector('#answerMsg').innerHTML='';
}

// Function to be called when submit button is clicked
function handleSubmitBtnClick() {
    let answer_message = document.querySelector('#answerMsg');
    let entry = document.querySelector('#entry');
    let str = entry.value;
    str =  str.charAt(0).toUpperCase() + str.slice(1);
    console.log("Answer given: "+str);

    if(dictionary_set.has(str))
        answer_message.innerText='You got it right!';
    else
        answer_message.innerText='Oops that aint it';

    entry.value=''
    document.querySelector('#startbtn').innerText='Next word';
}

// Attach event listeners to the buttons
document.getElementById('startbtn').addEventListener('click', handleStartBtnClick);
document.getElementById('submitbtn').addEventListener('click', handleSubmitBtnClick);
