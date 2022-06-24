import LOgIn from './utama.js';
import DbKontrak from '../model/kontrakM.js';
import LihatKo from '../View/lihatKo.js';
import { rl } from './utama.js';
export default class Kontrak{
    static menu() {
        LihatKo.menuKo()
        rl.question('masukkan angka untuk mengakses data kotrak', (answer) => {
            switch (answer) {
                case '1':
                    DbKontrak.daftar(function () {
                       Kontrak.menu()
                    })

                    break;
                case '2':
                    rl.question('masukkan ID mahasiswa', (answer) => {
                        DbKontrak.cari(answer.trim(), function () {
                            Kontrak.menu()
                        })

                    })
                    break;
                case '3':
                    rl.question('masukkan ID matkul ', (IDMT) => {
                        rl.question('masukkan ID dosen', (IDD) => {
                            rl.question('masukkan nim', (NIM) => {
                                rl.question('masukkan nilai mahasiswa', (nilai) => {
                                    DbKontrak.tambah(IDMT.trim(), IDD.trim(), NIM.trim(), nilai.trim(), function () {
                                        Kontrak.menu()
                                    })

                                })
                            })
                        })
                    })
                    break;
                case '4':
                    rl.question('masukkan NIM mahasiswa', (answer) => {
                        DbKontrak.ngedelet(answer, function () {
                            Kontrak.menu()
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
}