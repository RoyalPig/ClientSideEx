function selectComputer(){
    //Get the selected creature from the dropdown
    let selectedComputer = document.getElementById("computerSelector").value;

    //Use switch to determine costume based on user selection of guest animal
    let computerInfo;
    
    switch (selectedComputer) {
    case "Old":
        //document.getElementById("costumeInfo").innerHTML = "Wizards should wear pointy hats and carry wands!";
        computerInfo = "<br>Old Slow Bad";
        break;
    case "Modern":
        computerInfo = "🌈 <br>Ight you can play a game or two";
        break;
    case "Future":
        computerInfo = "✨ <br>Wow super Computer";
        break;
    case "Quantum":
        computerInfo = "🚀 <br> You can see into the future";
        break;
    default:
        computerInfo = "🎉 <br> Hmm, I'm not sure what to think of that.";
    }

    //Display the costume info on the web page
    document.getElementById("computerInfo").innerHTML = computerInfo;

}

    