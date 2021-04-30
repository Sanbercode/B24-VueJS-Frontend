/* Soal 1 */
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

let temp;
for(let i = 0; i < daftarHewan.length; i++){
    for(let j = i + 1; j < daftarHewan.length; j++){
        if(daftarHewan[j] < daftarHewan[i]){
            temp = daftarHewan[i];
            daftarHewan[i] = daftarHewan[j];
            daftarHewan[j] = temp;
        }
    }
}

console.log(daftarHewan.join('\n'));

process.stdout.write("\n");




/* Soal 2 */
var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }

var introduce = function (param) {
    return "Nama saya " + param.name + ", umur saya "+ param.age +" tahun, alamat saya di "+ param.address +", dan saya punya hobby yaitu " + param.hobby;
}

console.log(introduce(data));

process.stdout.write("\n");




/* Soal 3 */
var hitung_huruf_vokal = function (data) {
    var vokal = ['a', 'i', 'u', 'e', 'o'];
    var count = null;

    for (var i = 0; i < data.length; i++) {
        if (vokal.indexOf(data[i].toLowerCase()) !== -1) {
            count++;
        }
    }

    return count;
}

var hitung_1 = hitung_huruf_vokal("Muhammad")
var hitung_2 = hitung_huruf_vokal("Iqbal")

console.log(hitung_1 , hitung_2) // 3 2

process.stdout.write("\n");





/* Soal 4 */
var hitung = function (x) {
    // menggunakan pola deret aritmatika, modifikasi parameter saya tambahkan dengan 1
    return -2 + ((x + 1) - 1) * 2;
}

console.log(hitung(-2)); // -6
console.log(hitung(0)); // -2
console.log(hitung(1)); // 0
console.log(hitung(2)); // 2
console.log(hitung(3)); // 4
console.log(hitung(4)); // 6
console.log(hitung(5)); // 8