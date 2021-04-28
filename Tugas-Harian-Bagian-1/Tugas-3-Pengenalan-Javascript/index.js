/* Soal 1 */
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

var a = pertama.substr(0,5);
var b = pertama.substr(12,7);
var c = kedua.substr(0, 8);
var d = (kedua.substr(8,11)).toUpperCase();

var output1 = a + b + c + d;

console.log(output1);


/* Soal 2 */
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var int1 = parseInt(kataPertama);
var int2 = parseInt(kataKedua);
var int3 = parseInt(kataKetiga);
var int4 = parseInt(kataKeempat);

var output2 = int1 + int2 * int3 + int4;

console.log(output2);


/* Soal 3 */
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4,14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);