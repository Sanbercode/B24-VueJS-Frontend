/* Soal 1 */
let luas = (p, l) => {
    return p * l;
}

let keliling = (p, l) => {
    return 2 * (p + l);
}

console.log(luas(10,6)); //60
console.log(keliling(10,6)); //32



/* Soal 2 */
const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName: () => {
        console.log(firstName + " " + lastName)
      }
    }
}

newFunction("William", "Imoh").fullName() 



/* Soal 3 */
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}

const {firstName, lastName, address, hobby} = newObject;
console.log(firstName, lastName, address, hobby);


/* Soal 4 */
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east];

console.log(combined);


/* Soal 5 */
const planet = "earth" 
const view = "glass" 
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`;
console.log(before);