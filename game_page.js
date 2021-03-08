player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn -"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn -"+player2_name;
function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_number = parseInt(number1) * parseInt(number2);
    questionnumber ="<h4>"+number1+"X"+number2+"<h4>";
    inputbox ="<br> Answer:<input type='text' id='input_check_box'>";
    checkbox ="<br><br><button class='btn btn-info'onclick='check()'>check</button>";
    row = questionnumber + inputbox + checkbox;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
function check(){
    questionnumber=document.getElementById("input_check_box").value;
    if(questionnumber=questionnumber)
        {
            if(questionnumber=="player1_name"){
                update_player1_score = player1_score+1;
                document.getElementById("player1_score").innerHTML = update_player1_score;

            }
            else{
                update_player2_score=player2_score+1;
                document.getElementById("player2_score").innerHTML = update_player2_score;
            }
            }
            if(player_question == "player1_name"){
                player_question="player2_name";
                document.getElementById("player_question").innerHTML = "Question turn -"+player2_name;
            }
            else{
                player_question = "player1_name"
                document.getElementById("player_question").innerHTML = "Question turn -" + player1_name
            }
            if(player_answer == "player2_name"){
                player_answer="player1_name";
                document.getElementById("player_answer").innerHTML = "Answer turn -"+player1_name;
            }
            else{
                player_answer = "player2_name"
                document.getElementById("player_answer").innerHTML = "Answer turn -" + player2_name
            }
            }
