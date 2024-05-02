var tg = window.Telegram.WebApp; // Telegram API object
var p_welcome = document.getElementById("welcome");

var user = tg.initDataUnsafe.user;
if (user) {
    p_welcome += " " + user.first_name;
}