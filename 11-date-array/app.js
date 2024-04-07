/*

Дан массив строк [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`]

Необходимо написать функцию, которая бы удаляла бы из массива все строки,
которые нельзя перевести в дату (можно:10-02-2022 11/12/2023)
и возвращала бы новый массив вида:
- [`10-02-2022`, `12-11-2023`] 

*/

const arr = [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`]

function data(arr) { 
    return arr
    .filter(num => num.includes('-' & '/'))
    .map(num => {
        if (num.includes('/')){
            let day = num.substring(0, 2)
            let month = num.substring(3, 5)
            let temp = day;
            day = month;
            month = temp;
            num = num;
            return (day + '-' + month + '-' + num.substring(6))
        }
        return num;
    }).filter(num => Number(num.substring(0, 2)) <= 31)
      .filter(num => Number(num.substring(3, 5)) <= 12) 
      .filter(num => Number(num.substring(3, 5)) !== 0) 
      .filter(num => {
        const year = Number(num.substring(6));
        return year >= 2000 && year <= 2050; 
    })
}

console.log(data(arr))