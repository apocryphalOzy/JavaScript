/**
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A people History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        getCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.getCountSummary);
console.log(otherBookSummary.summary);
**/


// Challenge Area
// Create function that takes fahrenheit in - return object with Celsius, Kelvin and Fahrenheit


let fahrenheitConvert = function (fahrenheit) {
    return {
        kelvinConvert: (fahrenheit - 32) * 5/9 + 273.15,
        celsiusConvert:(fahrenheit - 32) * 5/9,
        fConvert: fahrenheit
    }
}


let resultKelvin = fahrenheitConvert(30);
let resultCelsius = fahrenheitConvert(30);
let resultFahrenheit = fahrenheitConvert(30);

console.log(resultKelvin.kelvinConvert);
console.log(resultCelsius.celsiusConvert);
console.log(resultFahrenheit.fConvert);

let temps = fahrenheitConvert(74);
console.log(temps);
