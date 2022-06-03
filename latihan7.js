function perkalian(nomber){
let  numKearray= Array.from(String(nomber), Number)
let hasilKali = numKearray.reduce((hasilnya,nilaiskrg) => hasilnya *nilaiskrg)
if(hasilKali<10){
    return hasilKali
}
 return perkalian(hasilKali)
 
}
console.log(perkalian(39))