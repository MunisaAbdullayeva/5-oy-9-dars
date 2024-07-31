let TOKEN = '7258066773:AAF0WGwPB9Jp9zay76ZM6qBSGxkhbbOdSTg'
let CHAT_ID = '-1002075267842'

let input = document.querySelector('input')
let textarea = document.querySelector('textarea')
let button = document.querySelector('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    let inputMessage = input.value;
    let textareaMessage = textarea.value;

    let message = `
    От кого: ${inputMessage} \n
    Сообщение: ${textareaMessage}
    `;
    sendMessage(message);

    input.value = '';
    textarea.value = '';
});

function sendMessage(message) {
    let url = `https://api.telegram.org/bot${TOKEN}/sendMessage`
    fetch(url, {
        headers:{ 'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    })
        .then((response) => response.json())
}