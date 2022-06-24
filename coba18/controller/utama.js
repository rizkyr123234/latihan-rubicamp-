import readline from 'readline'
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
import sqlite3 from 'sqlite3';
 export const db = new sqlite3.Database('./universitas.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)

})

import LihatMenu from '../View/lihatMenu.js';
import Kontrak from './kontrakc.js';
import Jurusan from './jurusanc.js';
import MatkulController from './matkulc.js';
import DosenController from './dosenc.js';
import MahasiswaController from './mahasiswac.js';
export default class LOgIn {
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
        
        LihatMenu.utama()
        rl.question('pilih data yang anda inginkan', (answer) => {
            switch (answer.trim()) {
                case '1':
                    MahasiswaController.menu()
                    break

                case '2':
                    Jurusan.menu()
                    break

                case '3':
                    DosenController.menu()
                    break

                case '4':
                    MatkulController.menu()
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
var logIn = new LOgIn('rizky',123)
logIn.login()
