//name of bands
var words = ["CHACALON", "GRUPOCELESTE", "JUANECO", "DESTELLOS", "DIABLOSROJOS", "HIJOSDELSOL", "LOSMIRLOS", "RIBERENOS", "SHAPIS", "WEMBLERSDEIQUITOS", "PINTURAROJA"];

//maximum guesses allowed
var maxGuess = 8; 

// array composed by randomizing the words array length value and making the random value whole
var ansWordArr = []; 

//initial value of game wins
var numWins = 0; 
//initial value of game losses
var numLosses = 0;
//initial value of Guesses allowed to the player
var numGuessesRemaining = 0;

var ansWord;
var isFinished = false; 


function setup() {

    //non decimal random pick of the word
    ansWord = words[Math.floor(Math.random() * words.length)];

    ansWordArr = [];

//loop to print mask of dashes represented by "ansWord" letter length count 
    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = "_";
    }

//setting guess capacity 
    numGuessesRemaining = maxGuess;

//value pushe by innertext element of paragraph ID    
    guessedLetters = [];

//placeholder Image set due to broken image link box have not solve issue to a CUMBIA label is set after first game    
    document.getElementById("picResult").src = "assets/images/cumbia.png";
   
    document.getElementById("numGuesses").style.color = "";

   //calls functions to update values letters and styles  
    updateScreen();
};


//dynamic value changes in the screen by class and ID elements 
function updateScreen() 

{
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuesses").innerText = numGuessesRemaining;
    document.getElementById("answerWord").innerText = ansWordArr.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};

//guessed letter conditional decrease not really working how I wanted it warning color 
//fixed warning color from black to white
function check(letter) {
   
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
       
        if (ansWord.indexOf(letter) === -1) {
            numGuessesRemaining--;
            
            if (numGuessesRemaining <=3) {
                document.getElementById("numGuesses").style.color = "#fff";
            }
           
        } else { 
            for (var i = 0; i < ansWord.length; i++) {
                if (letter === ansWord[i]) {
                    ansWordArr[i] = letter;
                } 
            }                
        }
    }

}; 

//winnning conditions
function isWinner() {
    
    if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        isFinished = true;
      
        if(ansWord === "CHACALON") {
            document.getElementById("picResult").src = "assets/images/Chacalon_Y_la_nueva_crema.jpg";
        } 
        
        else if (ansWord === "GRUPOCELESTE") {
            document.getElementById("picResult").src = "assets/images/grupo_celeste.jpg";
        } 
        
        else if (ansWord === "JUANECO") {
            document.getElementById("picResult").src = "assets/images/Juaneco_y_su_Combo.jpg";
        } 
        
        else if (ansWord === "DESTELLOS") {
            document.getElementById("picResult").src = "assets/images/Los_Destellos.jpg";
        } 
        
        else if (ansWord === "DIABLOSROJOS") {
            document.getElementById("picResult").src = "assets/images/Los_Diablos_Rojos.jpg";
        } 
        
        else if (ansWord === "HIJOSDELSOL") {
            document.getElementById("picResult").src = "assets/images/los_hijos_del_sol.jpg";
        } 
        
        else if (ansWord === "LOSMIRLOS") {
            document.getElementById("picResult").src = "assets/images/los_mirlos.jpg";
        } 
        
        else if (ansWord === "RIBERENOS") {
            document.getElementById("picResult").src = "assets/images/los_ribereNos.jpg";
        } 
        
        else if (ansWord === "SHAPIS") {
            document.getElementById("picResult").src = "assets/images/los_shapis.jpg";
        } 
        
        else if (ansWord === "WEMBLERSDEIQUITOS") {
            document.getElementById("picResult").src = "assets/images/los_wemblers_de_Iquitos.jpg";
        } 
        
        else if (ansWord === "PINTURAROJA") {
            document.getElementById("picResult").src = "assets/images/Pintura_Roja.jpg";
        }
            
    }
};
//loosing conditions
function isLoser() {
    
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
       
        document.getElementById("picResult").src = "assets/images/chicha_banner.jpg";
        document.getElementById("numLosses").style.color = "#e12d2e";
    }

};

//Key release condition for end game
document.onkeyup = function(event) {
   
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        
        //convert unicode outside range to uppercase 
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            check(event.key.toUpperCase()); 
            updateScreen();
            isWinner();
            isLoser();
        }
    }
};

//call funtion and print answer word to console
setup();
updateScreen();

console.log(ansWord);
