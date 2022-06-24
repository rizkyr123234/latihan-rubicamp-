import DbDosen from '../model/dosenM.js';
import LOgIn from './utama.js';
import LihatDos from '../View/lihatDos.js';
import readline from 'readline'
import { rl } from './utama.js';
var dbDosen = new DbDosen()
export default class DosenController{
    static menu() {
       LihatDos.menuDos()
        rl.question('masukkan angka untuk mengakses data dosen', (answer) => {
            switch (answer.trim()) {
                case '1':
                    DbDosen.daftar(function () {
                        DosenController.menu()
                    })
    
                    break;
    
                case '2':
                    rl.question('masukkan ID dosen', (answer) => {
                        DbDosen.cari(answer.trim(), function () {
                            DosenController.menu()
                        })
    
                    })
                    break;
    
                case '3':
                    rl.question('masukkan ID dosen ', (ID) => {
                        rl.question('masukkan nama', (nama) => {
                            DbDosen.tambah(ID.trim(), nama.trim(), function () {
                                DosenController.menu()
                            })
    
                        })
                    })
                    break;
                case '4':
                    rl.question('masukan ID dosen', (answer) => {
                        DbDosen.ngedelet(answer.trim(), function () {
                            DosenController.menu()
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
    
}
