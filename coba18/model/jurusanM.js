import Table from "cli-table"
import { db } from '../controller/utama.js';
var tableJur = new Table({
  head: ['ID', 'nama jurusan'],
  colWidths: [20, 20, 20]
})
var cariJur =new Table({
  head :['ID','Nama Jurusan'],
  colWidths :[10,10]
})
var tambahjur = new Table({
  head :['ID','Nama jurusan'],
  colWidths:[10,10]
})
var hpsJur = new Table({
  head : ['ID', 'Nama jurusan'],
  colWidths : [10,10]
})
export default class DbJurusan{
  static daftar(callback) {
    db.all(`select * from jurusan`, (err, rows) => {
        if (err) return 'gagal mas '
        rows.forEach(row => {
            tableJur.push([row.ID_jurusan,row.nama_jurusan])
        })
        console.log(tableJur.toString())
        callback()
    })

}
static cari(answer, callback) {
    
    db.all(`select * from jurusan WHERE ID_jurusan = "${answer}"`,
        (err, rows) => {
            if (err) return 'gagal mas '
           rows.forEach(row=>{
            cariJur.push([row.ID_jurusan, row.nama_jurusan])
           })
             console.log(cariJur.toString())
            callback()
        })


}
static tambah(id, nama, callback) {
    
    db.run(`INSERT into jurusan(ID_jurusan, nama_jurusan) values("${id}", "${nama}")`, function (err, row) {
        if (err) return err
        db.all(`select* from jurusan `, (err, rows) => {
            rows.forEach(row => {
                tambahjur.push([row.ID_jurusan, row.nama_jurusan])
            })
            console.log(tambahjur.toString())
            callback()
        })
    })

}
static ngedelet(answer, callback) {
    
    db.all(`select * from  jurusan WHERE ID_jurusan = "${answer}"`,(err,rows)=>{
        rows.forEach(row=>{
            hpsJur.push([row.ID_jurusan, row.nama_jurusan])
        })
        console.log(`ID ${answer} telah dihapus`)
        console.log(hpsJur.toString())
        
    })
    db.run(`DELETE from jurusan Where ID_jurusan = "${answer}"`, function (err) {
        if (err) return err
       
        callback()
       
    })


}
kembali() { }
}