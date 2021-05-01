/* Soal 1 : Function Penghasil Tanggal Hari Esok */
var next_date = function (tanggal , bulan , tahun ) {
    var months = [
        "Januari", "Februari", "Maret",
        "April", "Mei", "Juni",
        "Juli", "Agustus", "September",
        "Oktober", "November", "Desember"
    ];
    var d = new Date();
    d.setDate(tanggal);
    d.setMonth(bulan - 1);
    d.setFullYear(tahun);

    d.setDate(d.getDate() + 1); // mengeset hari besok
    var formatDate = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();

    console.log(formatDate);
}

var tanggal = 31
var bulan = 12
var tahun = 2020

next_date(tanggal , bulan , tahun ) // output : 1 Januari 2021



/* Soal 2 : Penghitung Jumlah Kata */
var jumlah_kata = function (kalimat) {
    var arrKalimat = kalimat.trim().split(" ");
    console.log(arrKalimat.length);
}

var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok"
var kalimat_2 = "Saya Iqbal"

jumlah_kata(kalimat_1); // 6
jumlah_kata(kalimat_2); // 2