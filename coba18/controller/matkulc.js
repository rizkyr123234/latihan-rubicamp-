import LOgIn from './utama.js';
import DbMatkul from '../model/matkulM.js';
import LihatMat from '../View/lihatMat.js';

import { rl } from './utama.js';

export default class MatkulController{
    static menu() {
      LihatMat.menuMat()
        rl.question('masukkan angka untuk mengakses data matkul', (answer) => {
            switch (answer) {
                case '1':
                    DbMatkul.daftar(function () {
                        MatkulController.menu()
                    })

                    break
                case '2':
                    rl.question('masukkan ID matkul', (answer) => {
                        DbMatkul.cari(answer.trim(), function () {
                            MatkulController.menu()
                        })

                    })
                    break
                case '3':
                    rl.question('masukkan ID matkul ', (ID) => {
                        rl.question('masukkan nama', (nama) => {
                            rl.question('masukkan jumlah sks', (jumlah) => {
                                DbMatkul.tambah(ID.trim(), nama.trim(), jumlah.trim(), function () {
                                    MatkulController.menu()
                                })
                                
                            })
                        })
                    })
                    break;
                case '4':
                    rl.question('masukan ID matkul', (answer) => {
                        DbMatkul.ngedelet(answer.trim(), function () {
                            MatkulController.menu()
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
}