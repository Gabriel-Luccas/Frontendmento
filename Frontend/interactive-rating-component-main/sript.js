let buttons = document.querySelectorAll('.rates button');
let thanks = document.querySelector('.thanks');
let rated = document.querySelector('#rate');
let selectedButton = null;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (selectedButton !== null) {
            selectedButton.classList.remove('active'); // Remove 'active' do botão previamente selecionado
        }
        buttons[i].classList.add('active'); // Adiciona 'active' ao botão clicado
        selectedButton = buttons[i]; // Atualiza o botão selecionado
        rate = i + 1;
    });
}

let btn = document.querySelector('#bti');

btn.onclick = function () {
    if (rate === 0) {
        alert('Select a rate');
    } else {
        thanks.classList.add('active');
        rated.innerText = rate;
    }
}
