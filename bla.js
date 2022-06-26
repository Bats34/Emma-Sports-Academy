function add() {
sporty=localStorage.getItem("sport");
    document.getElementById("amaze").innerHTML="What level of "+sporty+" do you play?";
}
function gol() {
    window.location="question.html"
}
function begin() {
    type="beginners";
    time="6-7 pm";
    document.getElementById("old").innerHTML="For "+type+",please join "+sporty+" classes at "+time;
    document.getElementById("new").innerHTML="If any queries, please contact- 9820605707";

}
function adv() {
    type="advanced";
    time="7-8 pm";
    document.getElementById("old").innerHTML="For "+type+",please join "+sporty+" classes at "+time;
    document.getElementById("new").innerHTML="If any queries, please contact- 9820605707";
}
function back() {
    window.location="index.html";
}