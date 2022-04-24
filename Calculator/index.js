let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screen_value = '';
for (item of buttons) {
    item.addEventListener('click', function (e) {
        let button_text = e.target.innerText;
        if (button_text == '*') {
            screen_value += button_text;
            screen.value = screen_value;
        }
        else if (button_text == 'AC') {
            screen_value = "";
            screen.value = screen_value;
        }
        else if (button_text == '=') {
            screen.value = eval(screen_value);
        }
        else {
            screen_value += button_text;
            screen.value = screen_value;
        }
    })
}
