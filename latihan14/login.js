const readline = require('readline');
const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('./universitas.db')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class LOgIn {
    constructor(userId, pass) {
        this.userId = userId
        this.pas = pass
        

    }
    login() {
        rl.question('user ID mu', (answer) => {
            if (answer == this.userId) {
                rl.question('passwordnya', (answer) => {
                    if (answer == this.pass){}
                })
            }
        }
        )
    }
    nampilin(){
        console.log(`
        selamat datang user ${this.userId}, anda memiliki beberapa data : 
        1. mahasiswa
        2. jurusan 
        3. dosen 
        4. matkul 
        5. kontrak 
        6. keluar`)
    }
    ngedelet(){
        db.run(`DELETE from  where${answer}NIM = ${answer}`, function(err){
    if(err){
        console.log('eror mas ')
    }
    console.log('sudah dihapus mas ')
})
db.close()

    }
    tambah(){
        db.run(`INSERT into ${answer}(NIM, nama, jurusan) values(${answer}, ${answer}, ${answer})`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            console.log('udah dimasukin ya')
        })
        db.close()
    }
    ngecek(){
        db.all(`SELECT * from ${answer}`, [], (err,rows)=>{
            if(err) return 'eror mas '
            rows.forEach((row)=>{console.log(row)})
        })
        db.close()
    }
    seleksi()
}




//ngedelete di sql via js 
// const sqlite = require('sqlite3').verbose()
// let db = new sqlite.Database('./coba.db')
// db.run('DELETE from mahasiswa where NIM = "M001"', function(err){
//     if(err){
//         console.log('eror mas ')
//     }
//     console.log('sudah dihapus mas ')
// })
// db.close()

// // nge add 
// db.run('INSERT into mahasiswa(NIM, nama, jurusan) values("M001", "rizky", 4)', function (err, row) {
//     if (err) {
//         console.log('eror mas ')
//     }
//     console.log('udah dimasukin ya')
// })