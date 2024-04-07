/* 
Напишите функцию, которая принимает:

-Массив чисел
-Функцию удаления элементов

И возвращает отфильтрованный массив. 
При этом функция удаления элементов принимает число и возвращает true, 
если его надо удалить и false, если надо оставить
*/


let arr = [33, 5, 11, 3330, 4, 99, 2];

function deleteEl(num) {
    if (num > 5) {
        return true;
    } else {
        return false;
    }
}

function editArr(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === false) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let filteredArr = editArr(arr, deleteEl);
console.log(filteredArr);