const { fstat } = require('fs');
const readline = require('readline');
const { urlToHttpOptions } = require('url');
const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('./universitas.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)

}

)
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
        
        rl.question('masukkan user', (answer) => {
            if (answer.trim() == this.userId) {
                rl.question('masukkan pass', (answer) => {
                    if (answer.trim() == this.pas) {
                        this.menuUtama()
                    } else (console.log('anda orang asing'))
                })
            } else { console.log('anda orang asing ') }
        })
    }
    menuUtama() {
        var mahasiswa = new Mahasiswa()
        var matkul = new Matkul()
        var dosen = new Dosen()
        var jurusan = new Jurusan()
        var kontrak = new Kontrak()
        console.log(`
        selamat datang user ${this.userId}, anda memiliki beberapa data : 
        1. mahasiswa
        2. jurusan 
        3. dosen 
        4. matkul 
        5. kontrak 
        6. keluar`)
        rl.question('pilih data yang anda inginkan', (answer) => {
            switch (answer.trim()) {
                case '1':
                    mahasiswa.menu()
                    break

                case '2':
                    jurusan.menu()
                    break

                case '3':
                    dosen.menu()
                    break

                case '4':
                    matkul.menu()
                    break

                case '5':
                    kontrak.menu()
                    break

                case '6':
                    rl.close()
                    break

                default:
                    console.log('data not found')
            }
        })

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
        rl.question('masukkan angka untuk mengakses data mahasiswa', (answer) => {
            switch (answer.trim()) {
                case '1':
                    this.daftar()
                    this.menu()
                    break;

                case '2':
                    rl.question('masukkan NIM nya mas', (answer) => {
                        this.cari(answer.trim())
                        this.menu()
                    }) 
                    
                    break;

                case '3':
                    rl.question('masukkan NIM ', (NIM) => {
                        rl.question('masukkan nama', (nama) => {
                            rl.question('masukkan Id jurusan', (ID) => {
                                this.tambah(NIM.trim(), nama.trim(), ID.trim())
                                this.menu()
                            })
                        })
                    }) 
                    this.menu()
                    break;

                case '4':
                    rl.question('masukan nim', (answer) => {
                        this.ngedelet(answer.trim())
                        this.menu()
                    }) 
                    this.menu()
                    break
                    
                case '5':
                    var menuUtama = new LOgIn()
                    menuUtama.menuUtama()
                    break;

                default:
                    console.log('hasil not found')
                    break
            }
        })
    }
    daftar() {
        db.all(`select * from mahasiswa`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
        
    }
    cari(answer) {
        db.all(`select* from mahasiswa WHERE NIM = "${answer}"`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
    }
    tambah(NIM, nama, ID_jurusan) {
        db.run(`INSERT into mahasiswa(NIM, nama, ID_jurusan) values("${NIM}", "${nama}", "${ID_jurusan}")`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            console.log('udah dimasukin ya')
        })
        
    }
    ngedelet(answer) {
        db.run(`DELETE from mahasiswa Where NIM = "${answer}"`, function (err) {
            if (err) {
                console.log('eror mas ')
            }
            console.log(`sudah di delet mas dengan NIM=${answer}`)
        })
        

    }
    kembali() { }
}

class Dosen {
    menu() {
        console.log(`menu : 
        1. daftar dosen
        2. cari dosen
        3. tambah dosen
        4. hapus dosen
        5. kembali`)
        rl.question('masukkan angka untuk mengakses data dosen', (answer) => {
            switch (answer.trim()) {
                case '1':
                    this.daftar()
                    this.menu()
                    break;

                case '2':
                    rl.question('masukkan ID dosen', (answer) => {
                        this.cari(answer.trim())
                        this.menu()
                    })
                    break;

                case '3':
                    rl.question('masukkan ID dosen ', (ID) => {
                        rl.question('masukkan nama', (nama) => {
                            this.tambah(ID.trim(), nama.trim())
                            this.menu()
                        })
                    })
                    break;
                case '4':
                    rl.question('masukan ID dosen', (answer) => {
                        this.ngedelet(answer.trim())
                        this.menu()

                    })
                    break
                case '5':
                    var menuUtama = new LOgIn()
                    menuUtama.menuUtama()
                    break
                default:
                    console.log('angka yang di masukkan salah')
                    break


            }
        })
    }
    daftar() {
        db.all(`select *  from dosen`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
        
    }
    cari(answer) {
        db.all(`select * from dosen WHERE ID_dosen= "${answer}"`,
            (err, rows) => {
                if (err) return 'gagal mas '
                rows.forEach(row => { console.log(row) })
            })
        

    }
    tambah(ID, nama) {
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
        rl.question('masukkan angka untuk mengakses data matkul', (answer) => {
            switch (answer) {
                case '1':
                    this.daftar()
                    this.menu()
                    break
                case '2':
                    rl.question('masukkan ID matkul', (answer) => {
                        this.cari(answer.trim())
                        this.menu
                    })
                    break
                case '3':
                    rl.question('masukkan ID matkul ', (ID) => {
                        rl.question('masukkan nama', (nama) => {
                            rl.question('masukkan jumlah sks', (jumlah) => {
                                this.tambah(ID.trim(), nama.trim(), jumlah.trim())
                                this.menu()
                            })
                        })
                    })
                    break;
                case '4':
                    rl.question('masukan ID matkul', (answer) => {
                        this.ngedelet(answer)
                        this.menu()

                    })
                    break;
                case '5':
                    var menuUtama = new LOgIn()
                    menuUtama.menuUtama()
                    break
                default:
                    console.log('eror mas ')
            }
        })
    }
    daftar() {
        db.all(`select * from matkul`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
        
    }
    cari(answer) {
        db.all(`select * from matkul WHERE ID_matkul= "${answer}"`,
            (err, rows) => {
                if (err) return 'gagal mas '
                rows.forEach(row => { console.log(row) })
            })
        

    }
    tambah(ID, nama, jumlah) {                                                                                                                       
        db.run(`INSERT into matkul(ID_matkul,nama_matkul, jumlah_sks) values("${ID}", "${nama}", ${jumlah})`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            console.log('udah dimasukin ya')
        })
        
    }
    ngedelet(answer) {
        db.run(`DELETE from matkul from matkul Where ID_matkul= "${answer}"`, function (err) {
            if (err) {
                console.log('eror mas ')
            }
            console.log(`sudah di delet mas dengan ID matkul ${answer}`)
        })
        

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
        rl.question('masukkan angka untuk mengakses data jurusan', (answer) => {
            switch (answer.trim()) {
                case '1':
                    this.daftar()
                    this.menu()
                    break;

                case '2':
                    rl.question('masukkan ID_jurusannya nya mas', (answer) => {
                        this.cari(answer.trim())
                        this.menu()
                    })
                    break;
                case '3':
                    rl.question('masukkan ID_jurusan ', (id) => {
                        rl.question('masukkan nama jurusan', (nama) => {
                            this.tambah(id.trim(), nama.trim())
                            this.menu()
                        })
                    })
                    break
                case '4':
                    rl.question('masukan id_jurusan', (answer) => {
                        this.ngedelet(answer.trim())
                        this.menu()

                    })
                    break
                case '5':
                    var menuUtama = new LOgIn()
                    menuUtama.menuUtama()
                    break
                default:
                    console.log('data not faund')

            }
        })
    }
    daftar() {
        db.all(`select * from jurusan`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
        })
        
    }
    cari(answer) {
        db.all(`select * from jurusan WHERE ID_jurusan = "${answer}"`,
            (err, rows) => {
                if (err) return 'gagal mas '
                rows.forEach(row => { console.log(row) })
            })
        

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
        

    }
    kembali() { }
}
class Kontrak {
    menu() {
        console.log(`menu : 
        1. daftar kontrak 
        2. cari kontrak
        3. tambah kontrak
        4. hapus kontrak
        5. kembali`)
        rl.question('masukkan angka untuk mengakses data kotrak', (answer) => {
            switch (answer) {
                case '1':
                    this.daftar()
                    this.menu
                    break;
                case '2':
                    rl.question('masukkan ID mahasiswa', (answer) => {
                        this.cari(answer.trim())
                        this.menu()
                    })
                    break;
                case '3':
                    rl.question('masukkan ID matkul ', (IDMT) => {
                        rl.question('masukkan ID dosen', (IDD) => {
                            rl.question('masukkan nim', (NIM) => {
                                rl.question('masukkan nilai mahasiswa', (nilai) => {
                                    this.tambah(IDMT.trim(), IDD.trim(), NIM.trim(), nilai.trim())
                                    this.menu()
                                })
                            })
                        })
                    })
                    break;
                case '4':
                    rl.question('masukkan NIM mahasiswa', (answer) => {
                        this.ngedelet(answer)
                        this.menu
                    })
                    break
                case '5':
                    var menuUtama = new LOgIn()
                    menuUtama.menuUtama()
                    break
                default:
                    console.log('data not found')


            }
        })
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
        

    }
    tambah(IDMT, IDD, NIM, nilai) {
        db.run(`INSERT into kontrak_kuliah(ID_matkul, ID_dosen, NIM, nilai_mahasiswa) values("${IDMT}", ${IDD}, "${NIM}","${nilai}")`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            console.log('udah dimasukin ya')
        })
        
    }
    ngedelet(answer) {
        db.run(`DELETE from kontrak_kuliah Where NIM = "${answer}"`, function (err) {
            if (err) {
                console.log('eror mas ')
            }
            console.log(`sudah di delet mas dengan NIM=${answer}`)
        })
    

    }
    kembali() { }
}
const bal = new LOgIn('rizky', 123)
bal.login()
// const mahasiswa = new Mahasiswa()
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
// console.log(mahasiswa)



