
var lastDisplayed="O";
var count = 0;

function displayLetter(id){
    if(document.getElementById(id).innerHTML==""){
        if(lastDisplayed=="O"){
            document.getElementById(id).innerHTML = "X";
            lastDisplayed = "X";
            count++;
            if(count >= 5){
                checkWinner("X", id);
            }
        }else{
            document.getElementById(id).innerHTML = "O";
            lastDisplayed = "O";
            count++;
            if(count >= 5){
                checkWinner("O", id);
            }
        }
    }   
    
}

function checkWinner(letter, id){
    if(id=="c9"){ 
        var c1 = document.getElementById("c1").innerHTML;
        var c3 = document.getElementById("c3").innerHTML;
        var c5 = document.getElementById("c5").innerHTML;
        var c6 = document.getElementById("c6").innerHTML;
        var c7 = document.getElementById("c7").innerHTML;
        var c8 = document.getElementById("c8").innerHTML;
        var c9 = document.getElementById("c9").innerHTML;
        if(c1==c5 && c1==c9){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        } else if(c9==c6 && c9==c3){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        } else if(c9==c8 && c9==c7){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        }else if(count>8){
            document.getElementById("result").innerHTML = "Game ends in a draw!";
        }  

    }else if(id=="c7"){
        var c1 = document.getElementById("c1").innerHTML;
        var c3 = document.getElementById("c3").innerHTML;
        var c4 = document.getElementById("c4").innerHTML;
        var c5 = document.getElementById("c5").innerHTML;
        var c7 = document.getElementById("c7").innerHTML;
        var c8 = document.getElementById("c8").innerHTML;
        var c9 = document.getElementById("c9").innerHTML;
        if(c7==c4 && c7==c1){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        } else if(c7==c5 && c7==c3){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        } else if(c7==c8 && c7==c9){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        }else if(count>8){
            document.getElementById("result").innerHTML = "Game ends in a draw!";
        }  
    }else if(id=="c1"){
        var c1 = document.getElementById("c1").innerHTML;
        var c2 = document.getElementById("c2").innerHTML;
        var c3 = document.getElementById("c3").innerHTML;
        var c4 = document.getElementById("c4").innerHTML;
        var c5 = document.getElementById("c5").innerHTML;
        var c7 = document.getElementById("c7").innerHTML;
        var c9 = document.getElementById("c9").innerHTML;
        if(c1==c2 && c1==c3){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        } else if(c1==c4 && c1==c7){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        } else if(c1==c5 && c1==c9){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        }else if(count>8){
            document.getElementById("result").innerHTML = "Game ends in a draw!";
        }  
    }else if(id=="c3"){
        var c1 = document.getElementById("c1").innerHTML;
        var c2 = document.getElementById("c2").innerHTML;
        var c3 = document.getElementById("c3").innerHTML;
        var c5 = document.getElementById("c5").innerHTML;
        var c6 = document.getElementById("c6").innerHTML;
        var c7 = document.getElementById("c7").innerHTML;
        var c9 = document.getElementById("c9").innerHTML;
        if(c3==c2 && c3==c1){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        } else if(c3==c5 && c3==c7){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        } else if(c3==c6 && c3==c9){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        }else if(count>8){
            document.getElementById("result").innerHTML = "Game ends in a draw!";
        }  
    }else if(id=="c8"){
        var c2 = document.getElementById("c2").innerHTML;
        var c5 = document.getElementById("c5").innerHTML;
        var c7 = document.getElementById("c7").innerHTML;
        var c8 = document.getElementById("c8").innerHTML;
        var c9 = document.getElementById("c9").innerHTML;
        if(c8==c5 && c8==c2){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        } else if(c8==c9 && c9==c7){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        }else if(count>8){
            document.getElementById("result").innerHTML = "Game ends in a draw!";
        }  
    }else if(id=="c4"){
        var c1 = document.getElementById("c1").innerHTML;
        var c4 = document.getElementById("c4").innerHTML;
        var c5 = document.getElementById("c5").innerHTML;
        var c6 = document.getElementById("c6").innerHTML;
        var c7 = document.getElementById("c7").innerHTML;
        if(c4==c5 && c4==c6){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        } else if(c4==c1 && c4==c7){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        }else if(count>8){
            document.getElementById("result").innerHTML = "Game ends in a draw!";
        }  
    }else if(id=="c2"){
        var c1 = document.getElementById("c1").innerHTML;
        var c2 = document.getElementById("c2").innerHTML;
        var c3 = document.getElementById("c3").innerHTML;
        var c5 = document.getElementById("c5").innerHTML;
        var c8 = document.getElementById("c8").innerHTML;
        if(c2==c5 && c2==c8){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        } else if(c2==c1 && c2==c3){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        }else if(count>8){
            document.getElementById("result").innerHTML = "Game ends in a draw!";
        }  
    }else if(id=="c6"){
        var c3 = document.getElementById("c3").innerHTML;
        var c4 = document.getElementById("c4").innerHTML;
        var c5 = document.getElementById("c5").innerHTML;
        var c6 = document.getElementById("c6").innerHTML;
        var c9 = document.getElementById("c9").innerHTML;
        if(c6==c5 && c6==c4){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        } else if(c6==c9 && c6==c3){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        }else if(count>8){
            document.getElementById("result").innerHTML = "Game ends in a draw!";
        }  
    }else if(id=="c5"){
        var c1 = document.getElementById("c1").innerHTML;
        var c2 = document.getElementById("c2").innerHTML;
        var c3 = document.getElementById("c3").innerHTML;
        var c4 = document.getElementById("c4").innerHTML;
        var c5 = document.getElementById("c5").innerHTML;
        var c6 = document.getElementById("c6").innerHTML;
        var c7 = document.getElementById("c7").innerHTML;
        var c8 = document.getElementById("c8").innerHTML;
        var c9 = document.getElementById("c9").innerHTML;
        if(c5==c1 && c5==c9){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        } else if(c5==c3 && c5==c7){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        }else if(c5==c4 && c5==c6){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        }else if(c5==c2 && c5==c8){
            document.getElementById("result").innerHTML = "Player "+letter+" wins";
            disableTab();
        }else if(count>8){
            document.getElementById("result").innerHTML = "Game ends in a draw!";
        }  
    }
}

function disableTab(){
    document.getElementById("tab").style.pointerEvents = "none";
}

function startOver(){
    lastDisplayed="O";
    count = 0;
    document.getElementById("tab").style.pointerEvents = "auto";
    document.getElementById("result").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById("c4").innerHTML = "";
    document.getElementById("c5").innerHTML = "";
    document.getElementById("c6").innerHTML = "";
    document.getElementById("c7").innerHTML = "";
    document.getElementById("c8").innerHTML = "";
    document.getElementById("c9").innerHTML = "";
}

//1 2 3
//4 5 6
//7 8 9