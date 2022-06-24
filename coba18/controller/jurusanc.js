import LOgIn from './utama.js';
import DbJurusan from '../model/jurusanM.js';
import LihatJur from '../View/lihatJur.js';
import readline from 'readline'
import { rl } from './utama.js';

export default class Jurusan{
    static menu() {
       LihatJur.menuJur()
        rl.question('masukkan angka untuk mengakses data jurusan', (answer) => {
            switch (answer.trim()) {
                case '1':
                    DbJurusan.daftar(function () {
                        Jurusan.menu()
                    })

                    break;

                case '2':
                    rl.question('masukkan ID_jurusannya nya mas', (answer) => {
                        DbJurusan.cari(answer.trim(), function () {
                            Jurusan.menu()
                        })

                    })
                    break;
                case '3':
                    rl.question('masukkan ID_jurusan ', (id) => {
                        rl.question('masukkan nama jurusan', (nama) => {
                            DbJurusan.tambah(id.trim(), nama.trim(), function () {
                                Jurusan.menu()
                            })

                        })
                    })
                    break
                case '4':
                    rl.question('masukan id_jurusan', (answer) => {
                        DbJurusan.ngedelet(answer.trim(), function () {
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
}