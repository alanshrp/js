// Исходные данные

const adressLat = 10;
const adressLong = 15;
const positionLat = 5;
const positionLong = 5;

// Расстояние от позиции до адреса

console.log(Math.sqrt((adressLong - positionLong)**2+(adressLat - positionLat)**2));