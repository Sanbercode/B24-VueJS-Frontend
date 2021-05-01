/* Soal 2 : Penghitung Jumlah Kata */
var jumlah_kata = function (kalimat) {
    var arrKalimat = kalimat.split(" ");
    console.log(arrKalimat.length);
}

var kalimat_1 = "Halo nama saya Muhammad Iqbal Mubarok"
var kalimat_2 = "Saya Iqbal"

jumlah_kata(kalimat_1); // 6
jumlah_kata(kalimat_2); // 2

