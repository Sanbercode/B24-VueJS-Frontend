var readBooksPromise = require('./promise.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000}
]

/* Soal 2 */

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000}
]

readBooksPromise(10000, books[0])
    .then(function (time) {
        readBooksPromise(time, books[1])
            .then(function (time) {
                readBooksPromise(time, books[2])
                    .then(function (time) {
                        readBooksPromise(time, books[0])
                            .then(function (time) {

                            })
                            .catch(function (error) {
                                console.log("timeout")
                            })
                    })
            })
    });