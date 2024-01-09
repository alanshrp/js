// Заданные условия

const age = 20;
const hasLicence = true;
const isDrunk = false;

// Проверка возможности выполнения заданных параметров 

const canDrive = (age > 18) 
&& hasLicence 
&& !isDrunk;

// Вывод в консоль

console.log(`Пользователь может вести машину: ${canDrive ? `Может` : `Не может`}`);