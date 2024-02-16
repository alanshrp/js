/* Написать функцию, которая получает на вход строку с:
- суммой средств - 1000
- валютой средств - руб
- целевой валютой - $
Возвращает число в новой валюте, если конвертация
поддерживается, или null, если нет. Ставки конвертации хранятся
внутри функции. */

function convertRub(amount, fromCurrency, toCurrency) {
    const amountUSD = amount*0.011;
    const currencyUSD = fromCurrency = null;

    const amountEUR = amount*0.0103;
    const currencyEUR = fromCurrency = null;

    if (toCurrency === '$') {
        return amountUSD + ' ' + toCurrency;
    } else if (toCurrency === '€') {
        return amountEUR + ' ' + toCurrency;
    }
    else {
        return null;
    }
}

console.log(convertRub(12000, 'руб', 'Р'));
