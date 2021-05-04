var readBooks = require('./callback');
var readBooksPromise = require('./promise.js');


/* Soal 1 */
var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

readBooks(10000, books[0], function (sisaWaktu) {
    readBooks(sisaWaktu, books[1], function (sisaWaktu) {
        readBooks(sisaWaktu, books[2], function (sisaWaktu) {
            readBooks(sisaWaktu, books[3], function (sisaWaktu) {
                readBooks(sisaWaktu, books[0], function (sisaWaktu) {

                })
            })
        })
    })
});


