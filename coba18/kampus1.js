const readline = require('readline');
const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('./universitas.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)

})
var Table = require('cli-table');
var tableMhs = new Table({
    head: ['NIM', 'Nama', 'Jurusan'],
    colWidths: [10, 10, 10]
});
var tableDos = new Table({
    head: ['ID dosen', 'nama dosen'],
    colWidths: [20, 20, 20]
})
var tableMat = new Table({
    head: ['ID_matkul', 'nama matkul', 'jumlah sks'],
    colWidths: [20, 20, 20]
})
var tableJur = new Table({
    head: ['ID', 'nama jurusan'],
    colWidths: [20, 20, 20]
})
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Table = require('cli-table')
var table = new Table()
class LOgIn {
    constructor(userId, pass) {
        this.userId = userId
        this.pas = pass


    }
    login() {

        rl.question('masukkan user', (answer1) => {
            if (answer1.trim() == this.userId) {
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
        selamat datang user , anda memiliki beberapa data : 
        1. mahasiswa
        2. jurusan 
        3. dosen 
        4. matkul 
        5. kontrak 
        6. keluar`)
        rl.question('pilih data yang anda inginkan', (answer) => {
            switch (answer.trim()) {
                case '1':
                    Mahasiswa.menu()
                    break

                case '2':
                    Jurusan.menu()
                    break

                case '3':
                    Dosen.menu()
                    break

                case '4':
                    Matkul.menu()
                    break

                case '5':
                    Kontrak.menu()
                    break

                case '6':
                    console.log('dadah')
                    rl.close()
                    break

                default:
                    console.log('data not found')
            }
        })

    }

}
class Mahasiswa {
    static menu() {
        console.log(`menu : 
       1. daftar maahasiswa 
       2. cari mahasiswa 
       3. tambah 
       4. hapus mahasiwa 
       5. kembali`)
        rl.question('masukkan angka untuk mengakses data mahasiswa', (answer) => {
            switch (answer.trim()) {
                case '1':
                    Mahasiswa.daftar(function () {
                        Mahasiswa.menu()
                    })

                    break;

                case '2':
                    rl.question('masukkan NIM nya mas', (answer) => {
                        Mahasiswa.cari(answer.trim(), function () {
                            Mahasiswa.menu()
                        })

                    })

                    break;

                case '3':
                    rl.question('masukkan NIM ', (NIM) => {
                        rl.question('masukkan nama', (nama) => {
                            rl.question('masukkan Id jurusan', (ID) => {
                                Mahasiswa.tambah(NIM.trim(), nama.trim(), ID.trim(), function () {
                                    Mahasiswa.menu()
                                })

                            })
                        })
                    })

                    break;

                case '4':
                    rl.question('masukan nim', (answer) => {
                        Mahasiswa.ngedelet(answer.trim(), function () {
                            Mahasiswa.menu()
                        })

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
    static daftar(callback) {
        db.all(`select NIM, nama, ID_jurusan from mahasiswa`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => {
                tableMhs.push([row.NIM, row.nama, row.ID_jurusan])
            })
            console.log(tableMhs.toString())
            callback()
        })

    }
    static cari(answer, callback,hai) {
        let cariMhs = new Table({
            head: ['NIM', 'Nama', 'Jurusan'],
            colWidths: [10, 10, 10]
        });
        db.all(`select NIM, nama, ID_jurusan from mahasiswa WHERE NIM = "${answer}"`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => {

                cariMhs.push([row.NIM, row.nama, row.ID_jurusan])
            })
            console.log(cariMhs.toString())
            hai()
            callback()
        })
    }
    static tambah(NIM, nama, ID_jurusan, callback) {
        let TambahMhs = new Table({
            head: ['NIM', 'Nama', 'Jurusan'],
            colWidths: [10, 10, 10]
        });
        db.run(`INSERT into mahasiswa(NIM, nama, ID_jurusan) values("${NIM}", "${nama}", "${ID_jurusan}")`, (err, row) => {
            if (err) return 'eror'
            db.all(`select NIM, nama, ID_jurusan from mahasiswa `, (err, rows) => {
                rows.forEach(row => {
                    TambahMhs.push([row.NIM, row.nama, row.ID_jurusan])
                })
                console.log(TambahMhs.toString())
                callback()
            })

        })

    }
    static ngedelet(answer, callback) {
        let hpsMhs = new Table({
            head: ['NIM', 'Nama', 'Jurusan'],
            colWidths: [10, 10, 10]
        });
        db.all(`select NIM, nama, ID_jurusan from mahasiswa WHERE NIM = "${answer}"`,(err,rows)=>{
            rows.forEach(row=>{
                hpsMhs.push([row.NIM, row.nama, row.ID_jurusan])
            })
            console.log(`NIM ${answer} telah dihapus`)
            console.log(hpsMhs.toString())
            
        })
        db.run(`DELETE from mahasiswa Where NIM = "${answer}"`, function (err) {
            if (err) return err
           
            callback()
           
        })
       

    }
    kembali() { }
}

class Dosen {
    static menu() {
        console.log(`menu : 
        1. daftar dosen
        2. cari dosen
        3. tambah dosen
        4. hapus dosen
        5. kembali`)
        rl.question('masukkan angka untuk mengakses data dosen', (answer) => {
            switch (answer.trim()) {
                case '1':
                    Dosen.daftar(function () {
                        Dosen.menu()
                    })

                    break;

                case '2':
                    rl.question('masukkan ID dosen', (answer) => {
                        Dosen.cari(answer.trim(), function () {
                            Dosen.menu()
                        })

                    })
                    break;

                case '3':
                    rl.question('masukkan ID dosen ', (ID) => {
                        rl.question('masukkan nama', (nama) => {
                            Dosen.tambah(ID.trim(), nama.trim(), function () {
                                Dosen.menu()
                            })

                        })
                    })
                    break;
                case '4':
                    rl.question('masukan ID dosen', (answer) => {
                        Dosen.ngedelet(answer.trim(), function () {
                            Dosen.menu()
                        })


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
    static daftar(callback) {
        db.all(`select *  from dosen`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
            callback()
        })

    }
    static cari(answer, callback) {
        db.all(`select * from dosen WHERE ID_dosen= "${answer}"`,
            (err, rows) => {
                if (err) return 'gagal mas '
                rows.forEach(row => { console.log(row) })
                callback()
            })


    }
    static tambah(ID, nama, callback) {
        db.run(`INSERT into dosen(ID_dosen,nama_dosen) values("${ID}", "${nama}")`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            console.log('udah dimasukin ya')
            callback()
        })

    }
    static ngedelet(answer, callback) {
        
        db.run(`DELETE from dosen Where ID_dosen= "${answer}"`, function (err) {
            if (err) {
                console.log('eror mas ')
            }
            
            callback()
        })


    }
    kembali() { }
}

class Matkul {
    static menu() {
        console.log(`menu : 
        1. daftar matkul
        2. cari matkul
        3. tambah matkul
        4. hapus matkul
        5. kembali`)
        rl.question('masukkan angka untuk mengakses data matkul', (answer) => {
            switch (answer) {
                case '1':
                    Matkul.daftar(function () {
                        Matkul.menu()
                    })

                    break
                case '2':
                    rl.question('masukkan ID matkul', (answer) => {
                        Matkul.cari(answer.trim(), function () {
                            Matkul.menu()
                        })

                    })
                    break
                case '3':
                    rl.question('masukkan ID matkul ', (ID) => {
                        rl.question('masukkan nama', (nama) => {
                            rl.question('masukkan jumlah sks', (jumlah) => {
                                Matkul.tambah(ID.trim(), nama.trim(), jumlah.trim(), function () {
                                    Matkul.menu()
                                })
                                t
                            })
                        })
                    })
                    break;
                case '4':
                    rl.question('masukan ID matkul', (answer) => {
                        Matkul.ngedelet(answer.trim(), function () {
                            Matkul.menu()
                        })


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
    static daftar(callback) {
        db.all(`select * from matkul`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
            callback()
        })

    }
    static cari(answer, callback) {
        db.all(`select * from matkul WHERE ID_matkul= "${answer}"`,
            (err, rows) => {
                if (err) return 'gagal mas '
                rows.forEach(row => { console.log(row) })
                callback()
            })


    }
    static tambah(ID, nama, jumlah, callback) {
        db.run(`INSERT into matkul(ID_matkul,nama_matkul, jumlah_sks) values("${ID}", "${nama}", ${jumlah})`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            console.log('udah dimasukin ya')
            callback()
        })

    }
    static ngedelet(answer, callback) {
        db.run(`DELETE from matkul from matkul Where ID_matkul= "${answer}"`, function (err) {
            if (err) {
                console.log('eror mas ')
            }
            console.log(`sudah di delet mas dengan ID matkul ${answer}`)
            callback()
        })


    }
    kembali() { }
}
class Jurusan {
    static menu() {
        console.log(`menu : 
        1. daftar jurusan 
        2. cari jurusan
        3. tambah jurusan
        4. hapus jurusan
        5. kembali`)
        rl.question('masukkan angka untuk mengakses data jurusan', (answer) => {
            switch (answer.trim()) {
                case '1':
                    Jurusan.daftar(function () {
                        Jurusan.menu()
                    })

                    break;

                case '2':
                    rl.question('masukkan ID_jurusannya nya mas', (answer) => {
                        Jurusan.cari(answer.trim(), function () {
                            Jurusan.menu()
                        })

                    })
                    break;
                case '3':
                    rl.question('masukkan ID_jurusan ', (id) => {
                        rl.question('masukkan nama jurusan', (nama) => {
                            Jurusan.tambah(id.trim(), nama.trim(), function () {
                                Jurusan.menu()
                            })

                        })
                    })
                    break
                case '4':
                    rl.question('masukan id_jurusan', (answer) => {
                        Jurusan.ngedelet(answer.trim(), function () {
                            Jurusan.menu()
                        })


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
    static daftar(callback) {
        db.all(`select * from jurusan`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
            callback()
        })

    }
    static cari(answer, callback) {
        db.all(`select * from jurusan WHERE ID_jurusan = "${answer}"`,
            (err, rows) => {
                if (err) return 'gagal mas '
                rows.forEach(row => { console.log(row) })
                callback()
            })


    }
    static tambah(id, nama, callback) {
        db.run(`INSERT into jurusan(ID_jurusan, nama_jurusan) values("${id}", "${nama}")`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            console.log('udah dimasukin ya')
            callback()
        })

    }
    static ngedelet(answer, callback) {
        db.run(`DELETE from jurusan Where ID_jurusan= "${answer}"`, function (err) {
            if (err) {
                console.log('eror mas ')
            }
            console.log(`sudah di delet mas dengan id jurusan=${answer}`)
            callback()
        })


    }
    kembali() { }
}
class Kontrak {
    static menu() {
        console.log(`menu : 
        1. daftar kontrak 
        2. cari kontrak
        3. tambah kontrak
        4. hapus kontrak
        5. kembali`)
        rl.question('masukkan angka untuk mengakses data kotrak', (answer) => {
            switch (answer) {
                case '1':
                    Kontrak.daftar(function () {
                        Kontrak.menu
                    })

                    break;
                case '2':
                    rl.question('masukkan ID mahasiswa', (answer) => {
                        Kontrak.cari(answer.trim(), function () {
                            Kontrak.menu
                        })

                    })
                    break;
                case '3':
                    rl.question('masukkan ID matkul ', (IDMT) => {
                        rl.question('masukkan ID dosen', (IDD) => {
                            rl.question('masukkan nim', (NIM) => {
                                rl.question('masukkan nilai mahasiswa', (nilai) => {
                                    Kontrak.tambah(IDMT.trim(), IDD.trim(), NIM.trim(), nilai.trim(), function () {
                                        Kontrak.menu
                                    })

                                })
                            })
                        })
                    })
                    break;
                case '4':
                    rl.question('masukkan NIM mahasiswa', (answer) => {
                        Kontrak.ngedelet(answer, function () {
                            Kontrak.menu
                        })

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
    static daftar(callback) {
        db.all(`select * from kontrak_kuliah`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { console.log(row) })
            callback()
        })

    }
    static cari(answer, callback) {
        db.all(`select * from kotrak_kuliah WHERE NIM ="${answer}"`,
            (err, rows) => {
                if (err) return 'gagal mas '
                rows.forEach(row => { console.log(row) })
                callback()
            })


    }
    static tambah(IDMT, IDD, NIM, nilai, callback) {
        db.run(`INSERT into kontrak_kuliah(ID_matkul, ID_dosen, NIM, nilai_mahasiswa) values("${IDMT}", ${IDD}, "${NIM}","${nilai}")`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            console.log('udah dimasukin ya')
            callback()
        })

    }
    static ngedelet(answer, callback) {
        db.run(`DELETE from kontrak_kuliah Where NIM = "${answer}"`, function (err) {
            if (err) {
                console.log('eror mas ')
            }
            console.log(`sudah di delet mas dengan NIM=${answer}`)
            callback()
        })


    }
    kembali() { }
}
const bal = new LOgIn('rizky', 123)
bal.login()