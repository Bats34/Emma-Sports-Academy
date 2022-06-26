function login() {
    username=document.getElementById("inp").value;
    localStorage.setItem("user",username);
    window.location="question.html";
}

