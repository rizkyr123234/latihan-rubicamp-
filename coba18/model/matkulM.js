import Table from "cli-table"
import { db } from '../controller/utama.js';
var tableMat = new Table({
  head: ['ID_matkul', 'nama matkul', 'jumlah sks'],
  colWidths: [20, 20, 20]
})
let cariMat= new Table({
  head : ['ID matkul', 'nama matkul', 'jumlah sks'],
  colWidths:[10,10,10]
})
let tambahMat = new Table({
  head : ['ID matkul', 'nama matkul', 'jumlah sks'], 
  colWidths : [10,10,10]
})
var hpsMat = new Table({
  head : ['ID', 'nama Matkul', 'jumlah sks'],
  colWidths:[10,10,10]
})
export default class DbMatkul{

    static daftar(callback) {
        db.all(`select * from matkul`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => { 
                tableMat.push([row.ID_matkul, row.nama_matkul, row.jumlah_sks])
             })
             console.log(tableMat.toString())
            callback()
        })

    }
    static cari(answer, callback) {
        
        db.all(`select * from matkul WHERE ID_matkul= "${answer}"`,
            (err, rows) => {
                if (err) return 'gagal mas '
                rows.forEach(row => {
                    cariMat.push([row.ID_matkul, row.nama_matkul, row.jumlah_sks])
                 })
                 console.log(cariMat.toString())
                callback()
            })


    }
    static tambah(ID, nama, jumlah, callback) {
        
        db.run(`INSERT into matkul(ID_matkul,nama_matkul, jumlah_sks) values("${ID}", "${nama}", ${jumlah})`, function (err, row) {
            if (err) {
                console.log('eror mas ')
            }
            db.all(`select * from matkul`, (err,rows)=>{
                rows.forEach(row=>{
                    tambahMat.push([row.ID_matkul, row.nama_matkul, row.jumlah_sks])
                })
                console.log(tambahMat.toString())
                callback()
            })
            
            
        })

    }
    static ngedelet(answer, callback) {
        
        db.all(`select * from matkul WHERE ID_matkul = "${answer}"`,(err,rows)=>{
            rows.forEach(row=>{
                hpsMat.push([row.ID_matkul, row.nama_matkul, row.jumlah_sks])
            })
            console.log(`ID ${answer} telah dihapus`)
            console.log(hpsMat.toString())
            
        })
        db.run(`DELETE from matkul Where ID_matkul= "${answer}"`, function (err) {
            if (err) return err
           
            callback()
           
        })


    }
    kembali() { }
}