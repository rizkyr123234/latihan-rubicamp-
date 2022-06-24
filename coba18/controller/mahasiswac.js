import DbMahasiswa from '../model/mahasiswaM.js';
import LOgIn from './utama.js';
import LihatMhs from '../View/lihatMhs.js';
import { rl } from './utama.js';
 export default class MahasiswaController{
    static menu() {
       LihatMhs.menuMhs()
        rl.question('masukkan angka untuk mengakses data mahasiswa', (answer) => {
            switch (answer.trim()) {
                case '1':
                    DbMahasiswa.daftar(function () {
                        MahasiswaController.menu()
                    })

                    break;

                case '2':
                    rl.question('masukkan NIM nya mas', (answer) => {
                        DbMahasiswa.cari(answer.trim(), function () {
                            MahasiswaController.menu()
                        })

                    })

                    break;

                case '3':
                    rl.question('masukkan NIM ', (NIM) => {
                        rl.question('masukkan nama', (nama) => {
                            rl.question('masukkan Id jurusan', (ID) => {
                                DbMahasiswa.tambah(NIM.trim(), nama.trim(), ID.trim(), function () {
                                    MahasiswaController.menu()
                                })

                            })
                        })
                    })

                    break;

                case '4':
                    rl.question('masukan nim', (answer) => {
                        DbMahasiswa.ngedelet(answer.trim(), function () {
                            MahasiswaController.menu()
                        })

                    })
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
}
