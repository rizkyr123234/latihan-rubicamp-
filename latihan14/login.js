const { fstat } = require('fs');
const readline = require('readline');
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
        this.userId = userId.trim()
        this.pas = pass


    }
    login() {
        var mahasiswa = new Mahasiswa()
        var matkul = new Matkul()
        var dosen = new Dosen()
        var jurusan = new Jurusan()
        var kontrak = new Kontrak()
        rl.question('masukkan user', (answer)=>{
            if(answer == this.userId){
                rl.question('masukkan pass', (answer)=>{
                    if(answer == this.pas){
                        this.nampilin()
                        rl.question('pilih data yang anda inginkan',(answer)=>{
                            switch(answer){
                                case '1':
                                    mahasiswa.menu()
                                    rl.question('masukkan angka untuk memilih menu',(answer)=>{
                                        switch(answer){
                                            case '1' :
                                                mahasiswa.daftar()
                                                
                                                break;
                                            case '2' : 
                                                rl.question('masukkan NIM nya mas',(answer)=>{
                                                    mahasiswa.cari(answer)
                                                } )
                                                break;
                                            case '3' :
                                                rl.question('masukkan NIM ', (NIM)=>{
                                                    rl.question('masukkan nama', (nama)=>{
                                                        rl.question('masukkan Id jurusan', (ID)=>{
                                                            mahasiswa.tambah(NIM,nama,ID)
                                                        })
                                                    })
                                                })
                                                break;
                                            case '4':
                                                rl.question('masukan nim', (answer)=>{
                                                    mahasiswa.ngedelet(answer)

                                                })
                                                break
                                            case '5':
                                                mahasiswa.kembali()
                                                break;
                                            default : 
                                            console.log('hasil not found')
                                                
                                                

                                        }
                                    })
                                
                                    break 
                                case '2': 
                                    jurusan.menu()
                                    rl.question('masukkan angka yang ingin diakses',(answer)=>{
                                        switch(answer){
                                            case '1':
                                                jurusan.daftar()
                                                break; 
                                                
                                            case '2' : 
                                            rl.question('masukkan ID_jurusannya nya mas',(answer)=>{
                                                jurusan.cari(answer)
                                            } )
                                                break;
                                            case '3': 
                                            rl.question('masukkan ID_jurusan ', (id)=>{
                                                rl.question('masukkan nama jurusan', (nama)=>{
                                                    jurusan.tambah(id,nama)
                                                })
                                            })
                                                break
                                            case '4' : 
                                            rl.question('masukan id_jurusan', (answer)=>{
                                                jurusan.ngedelet(answer)

                                            })
                                                break
                                            case '5':
                                                jurusan.kembali()
                                                break
                                            default :
                                            console.log('data not faund')
                                            
                                        }
                                    })
                                    break
                                case '3':
                                    dosen.menu()
                                    rl.question('masukkan angka untuk mengakses menu', (answer)=>{
                                        switch(answer){
                                            case '1':
                                                dosen.daftar()
                                                break;
                                            case '2': 
                                            rl.question('masukkan ID dosen', (answer)=>{
                                                dosen.cari(answer)
                                            })
                                                break;
                                            case '3':
                                                rl.question('masukkan ID dosen ', (ID)=>{
                                                    rl.question('masukkan nama', (nama)=>{
                                                        dosen.tambah(ID,nama)
                                                    })
                                                })
                                                break;
                                            case '4' :
                                                rl.question('masukan ID dosen', (answer)=>{
                                                    dosen.ngedelet(answer)
    
                                                })
                                                break
                                            case '5' :
                                                dosen.kembali()
                                                break
                                            default : 
                                                console.log('angka yang di masukkan salah')
                                                break


                                        }
                                    })
                                    break
                                case '4':
                                    matkul.menu()
                                    rl.question('masukkan angka untuk mengakses',(answer)=>{
                                        switch(answer){
                                            case '1' : 
                                                matkul.daftar()
                                                break
                                            case '2' : 
                                            rl.question('masukkan ID matkul', (answer)=>{
                                                matkul.cari(answer)
                                            })
                                                break
                                            case '3' : 
                                            rl.question('masukkan ID matkul ', (ID)=>{
                                                rl.question('masukkan nama', (nama)=>{
                                                    rl.question('masukkan jumlah sks',(jumlah)=>{
                                                        matkul.tambah(ID,nama,jumlah)
                                                    })
                                                })
                                            })
                                                break;
                                            case '4': 
                                            rl.question('masukan ID matkul', (answer)=>{
                                                matkul.ngedelet(answer)

                                            })
                                                break;
                                            case '5' : 
                                            matkul.kembali()
                                                break
                                            default : 
                                            console.log('eror mas ')
                                        }
                                    })
                                    break
                                case '5': 
                                    kontrak.menu()
                                    rl.question('masukkan angka untuk mengakses data', (answer)=>{
                                        switch(answer){
                                            case '1':
                                                kontrak.daftar()
                                                break;
                                            case '2':
                                                rl.question('masukkan ID mahasiswa', (answer)=>{
                                                    kontrak.cari(answer)
                                                })
                                                    break;
                                            case '3': 
                                            rl.question('masukkan ID matkul ', (IDMT)=>{
                                                rl.question('masukkan ID dosen', (IDD)=>{
                                                    rl.question('masukkan nim', (NIM)=>{
                                                        rl.question('masukkan nilai mahasiswa',(nilai)=>{
                                                            kontrak.tambah(IDMT,IDD, NIM, nilai)
                                                        })
                                                    })
                                                })
                                            })
                                                break;
                                            case '4':
                                                rl.question('masukkan NIM mahasiswa',(answer)=>{
                                                    kontrak.ngedelet(answer)
                                                })
                                                break
                                            case '5' : 
                                            kontrak.kembali()
                                                break
                                            default :
                                            console.log('data not found')

                                                
                                        }
                                    })
                                    break
                                case '6': 
                                    rl.close()
                                    break
                                default : 
                                    console.log('data not found')
                            }
                        })
                    }else(console.log('anda orang asing'))
                })
            } else{console.log('anda orang asing ')}
        })
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
        db.run(`INSERT into matkul(ID_matkul,nama_matkul, jumlah_sks) values("${ID}", "${nama}", ${jumlah})`, function (err, row) {
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
class Kontrak {
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



