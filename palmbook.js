function login(){
    ask = document.getElementById("login_name").value; 

    console.log(ask);
    localStorage.setItem("ask",ask);
    window.location = "ROOM_PALMBOOK.HTML";
};
