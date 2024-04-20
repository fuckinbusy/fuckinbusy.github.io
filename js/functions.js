var tg = window.Telegram.WebApp;
var p_username = document.getElementById("username");
var p_is_premium = document.getElementById("is_premium");
var insert_data_button = document.getElementById("insert_data_button");
var exit_button = document.getElementById("exit_button");
var img_photo = document.getElementById("photo");
var error = document.getElementById("error");
var is_filled = false;

tg.expand();
tg.ready();
var user = tg.initDataUnsafe.user;
if (!user) {
    print_error();
    tg.close();
}
tg.showAlert('Добро пожаловать, ' + tg.initDataUnsafe.user.username);

function print_error() {
    error.textContent = "Error";
}

insert_data_button.addEventListener("click", () => {
    if (!is_filled) {
        let username = user.username;
        let photo_url = user.photo_url;
        let is_premium = "No";

        if (user.is_premium == true)
        {
            is_premium = "Yes";
        }

        img_photo.src = photo_url;
        p_username.textContent += username;
        p_is_premium.textContent += is_premium;
        is_filled = true;
    }
});

exit_button.addEventListener("click", () => {
    tg.close();
});
