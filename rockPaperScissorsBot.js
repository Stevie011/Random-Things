//this function takes in a string - only "rock", "paper" or "scissors" will be accepted, and the function will correct for case.
//the bot will randomly choose one of the three, and compare it against the human choice and return a winner as well as both choices

function rockPaperScissorsBot(choice){

    function rockPaperScissors(){
        let ranNum = Math.random()
        if(ranNum <= 0.333){
            return "Rock"
        }else if(ranNum <= 0.666){
            return "Paper"
        }else{
            return "Scissors"
        }
    }

    choice = choice.toLowerCase()
    let botAns = rockPaperScissors().toLowerCase()
    let possAns = "rock, paper, scissors"
    if(possAns.includes(choice) == false){
        console.log("That's not a valid choice")
    }else{
        console.log("Valid Choice")
        if(choice == "paper" && botAns == "rock"){
            console.log(`Human wins with ${choice} against the bot's ${botAns}`)
        }else if(choice == "paper" && botAns == "scissors"){
            console.log(`Human loses with ${choice} against the bot's ${botAns}`)
        }else if(choice == "rock" && botAns == "scissors"){
            console.log(`Human wins with ${choice} against the bot's ${botAns}`)
        }else if(choice == "rock" && botAns == "paper"){
            console.log(`Human loses with ${choice} against the bot's ${botAns}`)
        }else if(choice == "scissors" && botAns == "paper"){
            console.log(`Human wins with ${choice} against the bot's ${botAns}`)
        }else if(choice == "scissors" && botAns == "rock"){
            console.log(`Human loses with ${choice} against the bot's ${botAns}`)
        }else{
            console.log(`It's a tie with human's ${choice} against the bot's ${botAns}`)
        
        }   
    
    }
}
