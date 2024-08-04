let imageId1 = null;
let imageId2 = null;
let tries = 0;
let guess1 = null;
let guess2 = null;
let allmatched = [0,0,0,0];
let flag = 0;
const paths = ["PNG-cards-1.3/PNG-cards-1.3/5_of_diamonds.png","PNG-cards-1.3/PNG-cards-1.3/5_of_clubs.png","PNG-cards-1.3/PNG-cards-1.3/5_of_clubs.png","PNG-cards-1.3/PNG-cards-1.3/5_of_diamonds.png"];

document.querySelectorAll(".clickImage").forEach(image => {
    image.addEventListener('click', function() {
        let guess = document.getElementById(this.id);
        let num1 = this.id.charAt(6);  
        guess.src = paths[num1];
        tries++;
        const updateText = `Now match the cards <br><br> Number of tries: ${tries}`;
        document.getElementById('guessTries').innerHTML = updateText;
        if (guess1 === null) {
            guess1 = guess;
        } 
        else if (guess2 === null) {
            guess2 = guess;
        }
        if (guess1 !== null && guess2 !== null) {
            if (guess1.id !== guess2.id && guess1.src !== guess2.src) {
                setTimeout(function() {
                    guess1.src = "PNG-cards-1.3\PNG-cards-1.3\black_joker.png";
                    guess2.src = "PNG-cards-1.3\PNG-cards-1.3\black_joker.png";
                    guess1 = null;
                    guess2 = null;
                }, 1000); 
            } 
            else{
                allmatched[guess1.id.charAt(6)] = 1;
                allmatched[guess2.id.charAt(6)] = 1;
                if (allmatched.every(match => match === 1)) {
                    setTimeout(function() {
                        alert("You have won!!");
                        location.reload();
                    }, 500);
                }
                guess1 = null;
                guess2 = null;
            }
        }
        
    });
});


