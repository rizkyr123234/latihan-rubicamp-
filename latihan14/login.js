const readline = require('readline');
const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('./universitas.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
    console.log('sukses mas ')
}

)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class LOgIn {
    constructor(userId, pass) {
        this.userId = userId.trim()
        this.pas = pass


    }
    login() {
        var mahasiswa = new Mahasiswa
        rl.question('user ID mu', (answer) => {
            if (answer == this.userId) {
                rl.question('passwordnya', (answer) => {
                    if (answer == this.pas) {
                        this.nampilin()
                        rl.question('silahkan pilih nomer yg ada di atas ', (answer) => {
                            if (answer == 1) {
                                mahasiswa.menu()
                                rl.question('silahkan pilih nomer', (answer) => { if (answer == 4) { rl.question('masukan nim ',(answer)=>{
                                mahasiswa.ngedelet(answer)
                                }) } })
                            }
                        }
                        )
                    } else { console.log('eror') }
                })
            } else { console.log('salah idnya') }
        }
        )
    }
    nampilin() {
        console.log(`
        selamat datang user ${this.userId}, anda memiliki beberapa data : 
        1. mahasiswa
        2. jurusan 
        3. dosen 
        4. matkul 
        5. kontrak 
        6. keluar`)

    }

}
class Mahasiswa {
    menu() {
        console.log(`menu : 
       1. daftar maahasiswa 
       2. cari mahasiswa 
       3. tambah 
       4. hapus mahasiwa 
       5. kembali`)
    }
    daftar() {
        db.all(`select * from mahasiswa`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
        db.close()
    }
    cari(answer) {
       db.all(`select* from mahasiswa WHERE NIM = "${answer}"`,(err, rows) => {
        if (err) return 'gagal mas '
        rows.forEach(row => { console.log(row) })} )
    }
    tambah(NIM,nama,ID_jurusan) {
        db.run(`INSERT into mahasiswa(NIM, nama, ID_jurusan) values("${NIM}", "${nama}", "${ID_jurusan}")`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            console.log('udah dimasukin ya')
        })
        db.close()
    }
    ngedelet(answer) {
        db.run(`DELETE from mahasiswa Where NIM = "${answer}"`, function (err) {
            if (err) {
                console.log('eror mas ')
            }
            console.log(`sudah di delet mas dengan NIM=${answer}`)
        })
        db.close()

    }
    kembali() {}
}

class Dosen {
    menu() {
        console.log(`menu : 
        1. daftar dosen
        2. cari dosen
        3. tambah dosen
        4. hapus dosen
        5. kembali`)
    }
    daftar() {
        db.all(`select *  from dosen`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
        db.close()
    }
    cari(answer) {
        db.all(`select * from dosen WHERE ID_dosen= "${answer}"`,
        (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
        db.close()
        
    }
    tambah(ID,nama) {
        db.run(`INSERT into dosen(ID_dosen,nama_dosen) values("${ID}", "${nama}")`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            console.log('udah dimasukin ya')
        })
        db.close()
    }
    ngedelet(answer) {
        db.run(`DELETE from dosen Where ID_dosen= "${answer}"`, function (err) {
            if (err) {
                console.log('eror mas ')
            }
            console.log(`sudah di delet mas dengan ID_dosen ${answer}`)
        })
        db.close()

    }
    kembali() { }
}

class Matkul {
    menu() {
        console.log(`menu : 
        1. daftar matkul
        2. cari matkul
        3. tambah matkul
        4. hapus matkul
        5. kembali`)
    }
    daftar() {
        db.all(`select * from matkul`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
        db.close()
    }
    cari(answer) {
        db.all(`select * from matkul WHERE ID_matkul= "${answer}"`,
        (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
        db.close()
        
    }
    tambah(ID, nama, jumlah) {
        db.run(`INSERT into matkul(ID_matkul,nama_matkul, jumlah_sks) values("${ID}", "${nama}", "${jumlah}")`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            console.log('udah dimasukin ya')
        })
        db.close()
    }
    ngedelet(answer) {
        db.run(`DELETE from matkul from matkul Where ID_matkul= "${answer}"`, function (err) {
            if (err) {
                console.log('eror mas ')
            }
            console.log(`sudah di delet mas dengan ID matkul ${answer}`)
        })
        db.close()

    }
    kembali() { }
}
class Jurusan {
    menu() {
        console.log(`menu : 
        1. daftar jurusan 
        2. cari jurusan
        3. tambah jurusan
        4. hapus jurusan
        5. kembali`)
    }
    daftar() {
        db.all(`select * from jurusan`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
        db.close()
    }
    cari(answer) {
        db.all(`select * from jurusan WHERE ID_jurusan = "${answer}"`, 
        (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
        db.close()
        
    }
    tambah(id, nama) {
        db.run(`INSERT into jurusan(ID_jurusan, nama_jurusan) values("${ID}", "${nama}")`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            console.log('udah dimasukin ya')
        })
        db.close()
    }
    ngedelet(answer) {
        db.run(`DELETE from jurusan Where ID_jurusan= "${answer}"`, function (err) {
            if (err) {
                console.log('eror mas ')
            }
            console.log(`sudah di delet mas dengan id jurusan=${answer}`)
        })
        db.close()

    }
    kembali() { }
}
class kontrak {
    menu() {
        console.log(`menu : 
        1. daftar kontrak 
        2. cari kontrak
        3. tambah kontrak
        4. hapus kontrak
        5. kembali`)
    }
    daftar() {
        db.all(`select * from kontrak_kuliah`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
        db.close()
    }
    cari(answer) {
        db.all(`select * from kotrak_kuliah WHERE NIM ="${answer}"`,
        (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
        db.close()
        
    }
    tambah(IDMT,IDD,NIM,nilai) {
        db.run(`INSERT into kontrak_kuliah(ID_matkul, ID_dosen, NIM, nilai_mahasiswa) values("${IDMT}", ${IDD}, "${NIM}","${nilai}")`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            console.log('udah dimasukin ya')
        })
        db.close()
    }
    ngedelet(answer) {
        db.run(`DELETE from kontrak_kuliah Where NIM = "${answer}"`, function (err) {
            if (err) {
                console.log('eror mas ')
            }
            console.log(`sudah di delet mas dengan NIM=${answer}`)
        })
        db.close()

    }
    kembali() { }
}
const bal = new LOgIn('rizky', 123)
bal.login()
const mahasiswa = new Mahasiswa()
// daftar 
// mahasiswa.daftar()

// nambah
// rl.question('masukkan NIM ', (NIM)=>{
//     rl.question('masukkan nama', (nama)=>{
//         rl.question('masukkan Id jurusan', (ID)=>{
//             mahasiswa.tambah(NIM,nama,ID)
//         })
//     })
// })

// hapus
// rl.question('masukan nim', (answer)=>{
//     mahasiswa.ngedelet(answer)
// })

//cari 
// rl.question('masukkan nim ', (answer)=>{
//     mahasiswa.cari(answer)
// })
console.log(mahasiswa)



