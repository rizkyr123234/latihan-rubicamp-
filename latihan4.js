function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
    
 }
// function isPrime(num){
//     let prime = true 
//     for(let i = 2; i<num;i++){
//         if(num%i==0){
//             prime =false 
            
//         }
//     }
//     return prime
// }

function indexPrime(n){
    let arry =[]
    for(let i = 2; i<Infinity;i++){
        if(isPrime(i)){
            arry.push(i)
        }
        if(n==arry.length){break}
    } console.log(arry)
    return arry[arry.length -1]
}
console.log(indexPrime(500))


