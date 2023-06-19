function check(){

    if(gkb1==gkb2==gkb3){
        document.getElementById("gkb10").innerHTML="Wins";


    }
    if(gkb1==gkb4==gkb7){
        document.getElementById("gkb10").innerHTML="Wins";
    }
    if(gkb1==gkb5==gkb9){
        document.getElementById("gkb10").innerHTML="Wins";
    }
    if(gkb2==gkb5==gkb8){
        document.getElementById("gkb10").innerHTML="Wins";
    }
    if(gkb4==gkb5==gkb6){
        document.getElementById("gkb10").innerHTML="Wins";
    }
    if(gkb7==gkb8==gkb9){
        document.getElementById("gkb10").innerHTML="Wins";
    }
    if(gkb3==gkb6==gkb9){
        document.getElementById("gkb10").innerHTML="Wins";
    }
    if(gkb3==gkb5==gkb7){
        document.getElementById("gkb10").innerHTML="Wins";
    }
    
}
img=document.getElementById("gkb1");;
var player="player1";
function gkb1(){
    if(player=="player1"){
        img.src="X.jpg";


    }
    else if(player=="player2"){
        img.src="O.png";
    }
    check()
}

