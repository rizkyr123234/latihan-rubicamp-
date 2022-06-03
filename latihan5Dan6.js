// memanipulasi string celeng 5
function stringManupulasi(word) {
    let stringKeaaray = word.charAt(0)
    if (stringKeaaray === 'a' ||
        stringKeaaray === 'i' ||
        stringKeaaray === 'u' ||
        stringKeaaray === 'e' ||
        stringKeaaray === 'o') {
        return word
    } else {
        let kata = 'nyo'
        return word.slice(1) + word[0] + kata


    }   // harus pake toLowerCase.()
}
// // console.log(stringManupulasi('ayam'))
// console.log(stringManupulasi('bebek'))

// challange 6  lanutan 5
function kalimat(jumlah) {
    let arrJum = jumlah.split(' ')
    let hasilJum = []
    for (let i = 0; i < arrJum.length; i++) {
        hasilJum.push(stringManupulasi(arrJum[i]))
    }
    return hasilJum.join(' ')
}
console.log(kalimat('ibu pergi'))

module.exports = {
    kalimat
}