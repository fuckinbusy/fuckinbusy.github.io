var tg = window.Telegram.WebApp; // Telegram API object

var list_inputs = document.getElementById("inputs").children;
var input_username = list_inputs[0];
var input_password = list_inputs[1];

var send_data_button = document.getElementById("send_data_button");
var exit_button = document.getElementById("exit_button");
var error = document.getElementById("error");


function print_error(text) { 
    /* Inserts text into #error <p> tag */
    error.style.display = "inline";
    error.textContent = text;
}
function clear_error() {
    /* Clears text in #error <p> tag */
    error.textContent = "";
    error.style.display = "none";
}

tg.ready();
tg.showAlert('Добро пожаловать');

send_data_button.addEventListener("click", () => {
    /* Click listener for send_data_button */
    clear_error();
    let username = input_username.value;
    let password = input_password.value;
    if (!username || username == "" && !password || password == "") {
        print_error("Username and password cannot be empty");
        return;
    }
    
    if (username.length < 2) {
        print_error("Username is too short");
        return;
    }

    if (password.length < 2) {
        print_error("Password is too short");
        return;
    }

    let data = {username: username, password: password}
    tg.sendData(JSON.stringify(data));
    // tg.close();
});

exit_button.addEventListener("click", () => {
    tg.close();
});
