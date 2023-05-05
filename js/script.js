const valorElemento = document.querySelector('.valor');
const elementoValorConvertido = document.querySelector('.valor-convertido');
const submitButton = document.querySelector('.submit-button');
let valorDolar = ''

async function apiDolar() {

    try {
        const response = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL')
        valorDolar = response.data.USDBRL.low;
        return;
    } catch (error) {
        return console.log(error);
    };

};

apiDolar();

function Converter(dolar) {

    let valorEmDolarNumerico = parseFloat(valorElemento.value) / dolar;
    let valorConvertido = '';

    if (valorElemento.value < 0) {
        elementoValorConvertido.textContent = `Por favor, insira um número válido.`
        return;
    };

    if (valorElemento.value !== '') {
        valorConvertido = `O resultado em dólar é US$${valorEmDolarNumerico.toFixed(2)}`
        elementoValorConvertido.textContent = valorConvertido;
        return;
    } else {
        return elementoValorConvertido.textContent = '';
    };

};

submitButton.addEventListener('click', function () {
    Converter(valorDolar);
});

