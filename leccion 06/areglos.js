//let autos = new Array("bmw","ford","fiat");

const autos = ["bmw","fort","fiat"];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for (let i = 0; i < autos.length; i++ ){
console.log(i + " : " + autos[i])
}

autos [1] = "fiat";
console.log(autos[1]);

autos.push("audi");
console.log(autos);
console.log(autos.length);
autos[autos.length]= "cadilac";
console.log(autos);
autos[5] = "porshe";
console.log(autos)

console.log(typeof autos);
array.