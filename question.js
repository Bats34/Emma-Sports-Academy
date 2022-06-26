function blast() {
    user=localStorage.getItem("user");
    welcomes="<h1>Welcome "+user+"</h1>"
    console.log("gh")
    document.getElementById("welcome").innerHTML=welcomes;
}
function basket() {
    var sport="basketball";
    localStorage.setItem("sport", sport);
    window.location="bla.html";

}
function log() {
    window.location="index.html"
}
function tablet() {
    var sport="table tennis";
    localStorage.setItem("sport", sport);
    window.location="bla.html";

}
function tennis() {
    var sport="tennis";
    localStorage.setItem("sport", sport);
    window.location="bla.html";

}
function cric() {
    var sport="cricket";
    localStorage.setItem("sport", sport);
    window.location="bla.html";

}
function foot() {
    var sport="football";
    localStorage.setItem("sport", sport);
    window.location="bla.html";

}