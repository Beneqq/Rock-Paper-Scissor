const choices = ["rock", "paper", "scissor"];
        const playerdis = document.getElementById("playerdis")
        const computerdis = document.getElementById("computerdis")
        const resultdis = document.getElementById("resultdis")

        function playgame(playerchoice){

            const computerchoice = choices[Math.floor(Math.random() * 3)];
            let result = " ";

            if(playerchoice === computerchoice){
                result = "TABLA!";
            }
            else{
                switch(playerchoice){
                    case "rock":
                    result = (computerchoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                    case "paper":
                    result = (computerchoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                    case "scissor":
                    result = (computerchoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                }
            }

            playerdis.textContent = `PLAYER: ${playerchoice}`; 
            computerdis.textContent = `COMPUTER: ${computerchoice}`;
            resultdis.textContent = result;

            resultdis.classList.remove("greentxt", "redtxt")

            switch(result){
                case "YOU WIN!":
                    resultdis.classList.add("greentxt");
                    break;
                case "YOU LOSE!":
                resultdis.classList.add("redtxt");
                break;
            }


        }
