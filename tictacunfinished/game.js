var lastdisplayed = "O";
count = 0;

function displayLetter(id){
    if(lastdisplayed=="O"){

        document.getElementById(id).innerHTML = "X";
        lastdisplayed = "X";
        count++;
        if(count>=5){
            checkWinner("X", id);
        }
}
else{
    document.getElementById(id).innerHTML = "O";
    lastdisplayed = "O";
    count++;
    if(count>=5){
        checkWinner("O", id);
        }
    }
}

function checkWinner(letter, id){

    if(id=="c9"){
        
        var c9 = document.getElementById("c9").innerHTML;
        var c5 = document.getElementById("c5").innerHTML;
        var c1 = document.getElementById("c1").innerHTML;
        var c6 = document.getElementById("c6").innerHTML;
        var c3 = document.getElementById("c3").innerHTML;
        var c8 = document.getElementById("c8").innerHTML;
        var c7 = document.getElementById("c7").innerHTML;
        if (c1==c5 && c1==c9){
            document.getElementByID("result").innerHTML = "Player" + letter + "wins";
        }
        else if(c9==c6 && c9==c3){
            document.getElementByID("result").innerHTML = "Player" + letter + "wins";
        }
        else if(c9==c8 && c9==c7){
            document.getElementByID("result").innerHTML = "Player" + letter + "wins";
        }

    }

    else if(id=="c8"){
        var c9 = document.getElement
    }
}
    

    
