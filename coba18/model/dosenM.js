import Table from "cli-table";
import { db } from "../controller/utama.js";
var tableMhs = new Table({
    head: ['NIM', 'Nama', 'Jurusan'],
    colWidths: [10, 10, 10]
});
var tableDos = new Table({
  head: ['ID dosen', 'nama dosen'],
  colWidths: [20, 20, 20]
})
var cariDos =new Table({
  head :['ID','Nama dosen'],
  colWidths :[10,10]
})
var tambahDos = new Table({
  head :['ID','Nama dosen'],
  colWidths:[10,10]
})
var hpsDos = new Table({
  head : ['ID', 'Nama dosen'],
  colWidths : [10,10]
})
 export default class DbDosen{
    static daftar(callback) {
        db.all(`select *  from dosen`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => {
                tableDos.push([row.ID_dosen,row.nama_dosen])
             })
             console.log(tableDos.toString())
            callback()
        })

    }
    static cari(answer, callback) {
        
        db.all(`select * from dosen WHERE ID_dosen= "${answer}"`,
            (err, rows) => {
                if (err) return 'gagal mas '
                rows.forEach(row => {
                    cariDos.push([row.ID_dosen, row.nama_dosen])
                 })
                 console.log(cariDos.toString())
                callback()
            })


    }
    static tambah(ID, nama, callback) {
        
        db.run(`INSERT into dosen(ID_dosen,nama_dosen) values("${ID}", "${nama}")`, function (err, row) {
            if (err) return err
            db.all(`select* from dosen `, (err, rows) => {
                rows.forEach(row => {
                    tambahDos.push([row.ID_dosen, row.nama_dosen])
                })
                console.log(tambahDos.toString())
                callback()
            })
            
           
            
        })

    }
    static ngedelet(answer, callback) {
       
        db.all(`select * from  dosen WHERE ID_dosen = "${answer}"`,(err,rows)=>{
            rows.forEach(row=>{
                hpsDos.push([row.ID_dosen, row.nama_dosen])
            })
            console.log(`ID ${answer} telah dihapus`)
            console.log(hpsDos.toString())
            
        })
        db.run(`DELETE from dosen Where ID_dosen = "${answer}"`, function (err) {
            if (err) return err
           
            callback()
           
        })

    }
    
}