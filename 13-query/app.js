const query = {
    search: "Вася",
    take: 10
}

function fromObjToStr(obj) {
    let names = Object.keys(obj);
    let values = Object.values(obj);
    return `${names[0]}=${values[0]}&${names[1]}=${values[1]}`;
}

console.log(fromObjToStr(query))   //        search=Вася&take=10
