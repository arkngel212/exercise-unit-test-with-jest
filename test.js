// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// 09-The-first-test
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * oneEuroIs["USD"];

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(3.5);

    // Si 1 euro son 1.07 dólares y 156.5 yenes, entonces 3.5 dólares debe ser (3.5 / 1.07 * 156.5)
    const expected = 3.5 / oneEuroIs["USD"] * oneEuroIs["JPY"];

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724); // 1 euro son 1.07 dólares y 156.5 yenes, entonces 3.5 dólares deberían ser = (3.5 / 1.07 * 156.5)
})

test("One yen should be 50.03 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(9000);

    // Si 1 euro son 156.5 yenes y 0.87 pounds, entonces 3.5 dólares debe ser (900 / 156.5 * 0.87)
    const expected = 9000 / oneEuroIs["JPY"] * oneEuroIs["GBP"];

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(9000)).toBe(50.031948881789134); // 1 euro son 1.07 dólares, entonces 900 yenes deberían ser = (900 / 156.5 * 0.87)
})