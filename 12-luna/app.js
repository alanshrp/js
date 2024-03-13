/*

    Написать функцию проверки номера карты алгоритмом Луна. В функцию передается 
    карта: 4561-2612-1234-5464, а функция возвращает true, если карта проходит алгоритм
    и false, если нет.

*/

const card = '4561-2612-1234-5467';
let newCard = card.replaceAll('-', '');

function convertCard(card) {
    let res = 0;
    for (let i = 0; i < card.length; i++) {
        if (i % 2 === 0) {
            let evenNumIn = Number(card[i]) * 2;
            if (evenNumIn > 9) {
                evenNumIn -= 9;
            } 
            res += evenNumIn;
        } else {
            let oddNumIn = Number(card[i]);
            res += oddNumIn;
        }
    }

    console.log(res)
    
    if (res % 10 === 0) {
        return true;
    } else {
        return false;   
    }
}

console.log(convertCard(newCard));
