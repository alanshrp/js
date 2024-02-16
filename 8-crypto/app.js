/* 
 Написать 2 функции:
 - шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами какие-то буквы
 по заданному алгоритму и возвращает строку.
 - проверка пароля - принимает зашифрованный пароль и второй пароль. Воспроизводит алгоритм назад над
 зашифрованном паролем и возвращает true, если он совпадает со вторым паролем и false. если нет
 */

function crypto(password) {
    let symbols = password.split('');
    let partSym = symbols.splice(2,3);
    let newArray = partSym.concat(symbols);
    const cipher = newArray.join('');
    return cipher;
}

function check(crypto, password) {
    let symbols =  crypto.split('');
    let newPart = symbols.splice(0,3);
    let finalCipher = symbols.concat(newPart);    
    let finPas = finalCipher.join('');
     if (finPas === password) {
         return console.log(true);
     } else {
         return console.log(false);
     }
}

check(crypto(prompt('Введите пароль:')), prompt('Введите пароль снова:'));