import { on_click } from "./functions";

var tg = window.Telegram.WebApp;
var insert_data_button = document.getElementById("insert_data_button");
var exit_button = document.getElementById("exit_button");

insert_data_button.addEventListener("click", on_click());
exit_button.addEventListener("click", tg.close());
