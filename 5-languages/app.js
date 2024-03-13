const ask = prompt('Введите язык \nEn Ru De');

switch (ask) {
    case 'En':
        console.log('Hello!')
        break;
    case 'Ru':
        console.log('Здравствуйте!')
        break;
    case 'De':
        console.log('Guten Tag!')      
        break;
        default:
            console.log('Выбран неизвестный язык')  
}