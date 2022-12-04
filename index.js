let obj = {
    a: 1,
    b: 2

}

function printAllValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            printAllValues(obj[key])
        } else {
            console.log(obj[key])
        }
    }
}
printAllValues(obj)