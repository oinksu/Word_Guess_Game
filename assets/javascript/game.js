
var words = ["CHACALON", "GRUPOCELESTE", "JUANECO", "DESTELLOS", "DIABLOSROJOS", "HIJOSDELSOL", "LOSMIRLOS", "RIBERENOS", "SHAPIS", "WEMBLERSDEIQUITOS","PINTURAROJA"];

var maxGuess = 8; 
var Letters = []; 
var ansWordArr = []; 
var numWins = 0; 
var numLosses = 0;
var numGuessesRemaining = 0;
var ansWord;
var isFinished = false; 


function setup() {

    ansWord = words[Math.floor(Math.random() * words.length)];

    ansWordArr = [];

 
    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = "_";
    }

    numGuessesRemaining = maxGuess;
    guessedLetters = [];

    
    document.getElementById("picResult").src = "assets/images/cumbia.png";
   
    document.getElementById("numGuesses").style.color = "";

    
    updateScreen();
};


function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuesses").innerText = numGuessesRemaining;
    document.getElementById("answerWord").innerText = ansWordArr.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};


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

function isLoser() {
    
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
       
        document.getElementById("picResult").src = "assets/images/chicha_banner.jpg";
        document.getElementById("numLosses").style.color = "#e12d2e";
    }

};


document.onkeyup = function(event) {
   
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            check(event.key.toUpperCase()); 
            updateScreen();
            isWinner();
            isLoser();
        }
    }
};

setup();
updateScreen();

console.log(ansWord);
