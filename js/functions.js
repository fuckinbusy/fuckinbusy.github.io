var tg = window.Telegram.WebApp;
var p_username = document.getElementById("username");
var p_is_premium = document.getElementById("is_premium");
var is_filled = false;

export function on_click() {
    if (!is_filled) {
        let _user = tg.initDataUnsafe.user;
        let username = _user.username;
        let is_premium = _user.is_premium;

        p_username += username;
        p_is_premium.textContent += is_premium;
    }
}