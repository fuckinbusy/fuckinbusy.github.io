var tg = window.Telegram.WebApp; // Telegram API object
var button = document.querySelectorAll(".btn");

for (let btn of button) {
    btn.addEventListener('click', onClick);
}

tg.ready();
tg.showAlert('Добро пожаловать');

function onClick(event) {
    let text = event.target.parentElement.parentElement.childNodes[3].childNodes[1].textContent
    let descr = event.target.parentElement.parentElement.childNodes[3].childNodes[3].textContent
    let data = {
        order: text, 
        description: descr
    }
    tg.sendData(JSON.stringify(data));
    console.log("Data sent!");
    tg.close();
}
