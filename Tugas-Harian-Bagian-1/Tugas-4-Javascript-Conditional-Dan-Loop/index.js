/* Soal 1 */
var nilai = 90;

if (nilai >= 85 && nilai <= 100) {
    console.log("indeksnya A");
} else if (nilai >= 75 && nilai < 85) {
    console.log("indeksnya B");
} else if (nilai >= 65 && nilai < 75) {
    console.log("indeksnya C");
} else if (nilai >= 55 && nilai < 65) {
    console.log("indeksnya D");
} else if (nilai < 55 && nilai >= 0) {
    console.log("indeksnya E");
} else {
    console.log("nilai tidak valid");
}



/* Soal 2 */
var tanggal = 6;
var bulan = 3;
var tahun = 2020;

switch (bulan) {
    case 1:
        bulan = "Januari";
        break;
    case 2:
        bulan = "Februari";
        break;
    case 3:
        bulan = "Maret";
        break;
    case 4:
        bulan = "April";
        break;
    case 5:
        bulan = "Mei";
        break;
    case 6:
        bulan = "Juni";
        break;
    case 7:
        bulan = "Juli";
        break;
    case 8:
        bulan = "Agustus";
        break;
    case 9:
        bulan = "September";
        break;
    case 10:
        bulan = "Oktober";
        break;
    case 11:
        bulan = "November";
        break;
    case 12:
        bulan = "Desember";
        break;
}

console.log(tanggal + " " + bulan + " " + tahun);



/* Soal 3 */
var n = 7;
for (var i = 0; i < n; i++) {
    for (var j = 0; j <= i; j++) {
        process.stdout.write('*');
    }
    process.stdout.write('\n');
}



/* Soal 4 */
var m = 6;

for (var i = 1; i <= m; i++) {
    // saya tentukan polanya berdasarkan deret aritmatika
    // pola = a + (n-1) * b
    var pola1 = 1 + (i - 1) * 3;
    var pola2 = 2 + (i - 1) * 3;
    var pola3 = 3 + (i - 1) * 3;

    if (pola1 <= m) {
        console.log(pola1 + " - I love programming");
    }
    if (pola2 <= m) {
        console.log(pola2 + " - I love Javascript");
    }
    if (pola3 <= m) {
        console.log(pola3 + " - I love VueJS");
        for (var x = 1; x <= pola3; x++) {
            if (x !== pola3) {
                process.stdout.write('=');
            } else {
                process.stdout.write('=\n');
            }
        }
    }
}


