/* 
Дан массив чисел: arr = [1, 40, -5, 10, 0]
Написать функцию, которая сортирует данный массив при помощи
циклов 

Подсказка:
- нужно использовать 2 цикла, вложенных друг в друга;
- нужно сравнивать и менять элементы
*/

const arr = [1, 40, -5, 10, 0];

function minToMax(notSorted) {
    for (let i=0; i<arr.length; i++) {
        for (let j=1; j<=arr.length-1; j++) {
            if (notSorted[j-1]>notSorted[j]) {
            [notSorted[j-1], notSorted[j]] = [notSorted[j], notSorted[j-1]]
            }
        }
    }
    return notSorted;
}

console.log(minToMax(arr))