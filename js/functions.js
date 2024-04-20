var tg = window.Telegram.WebApp;
var p_username = document.getElementById("username");
var p_is_premium = document.getElementById("is_premium");

var insert_data_button = document.getElementById("insert_data_button");
var exit_button = document.getElementById("exit_button");

var is_filled = false;


function on_click() {
    if (!is_filled) {
        let _user = tg.initDataUnsafe.user;
        let username = _user.username;
        let is_premium = _user.is_premium;

        p_username += username;
        p_is_premium.textContent += is_premium;
        is_filled = true;
    }
}

insert_data_button.addEventListener("click", on_click);
exit_button.addEventListener("click", tg.close);