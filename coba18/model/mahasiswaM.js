import { db } from '../controller/utama.js';
import Table from 'cli-table';
var tableMhs = new Table({
    head: ['NIM', 'Nama', 'Jurusan'],
    colWidths: [10, 10, 10]
});
var cariMhs = new Table({
  head: ['NIM', 'Nama', 'Jurusan'],
  colWidths: [10, 10, 10]
});
var TambahMhs = new Table({
  head: ['NIM', 'Nama', 'Jurusan'],
  colWidths: [10, 10, 10]
});
var hpsMhs = new Table({
  head: ['NIM', 'Nama', 'Jurusan'],
  colWidths: [10, 10, 10]
});
export default class DbMahasiswa {
    static daftar(callback) {
        db.all(`select NIM, nama, ID_jurusan from mahasiswa`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => {
                tableMhs.push([row.NIM, row.nama, row.ID_jurusan])
            })
            console.log(tableMhs.toString())
            callback()
        })

    }
    static cari(answer, callback,hai) {
        
        db.all(`select NIM, nama, ID_jurusan from mahasiswa WHERE NIM = "${answer}"`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => {

                cariMhs.push([row.NIM, row.nama, row.ID_jurusan])
            })
            console.log(cariMhs.toString())
            
            callback()
        })
    }
    static tambah(NIM, nama, ID_jurusan, callback) {
        
        db.run(`INSERT into mahasiswa(NIM, nama, ID_jurusan) values("${NIM}", "${nama}", "${ID_jurusan}")`, (err, row) => {
            if (err) return 'eror'
            db.all(`select NIM, nama, ID_jurusan from mahasiswa `, (err, rows) => {
                rows.forEach(row => {
                    TambahMhs.push([row.NIM, row.nama, row.ID_jurusan])
                })
                console.log(TambahMhs.toString())
                callback()
            })

        })

    }
    static ngedelet(answer, callback) {
       
        db.all(`select NIM, nama, ID_jurusan from mahasiswa WHERE NIM = "${answer}"`,(err,rows)=>{
            rows.forEach(row=>{
                hpsMhs.push([row.NIM, row.nama, row.ID_jurusan])
            })
            console.log(`NIM ${answer} telah dihapus`)
            console.log(hpsMhs.toString())
            
        })
        db.run(`DELETE from mahasiswa Where NIM = "${answer}"`, function (err) {
            if (err) return err
           
            callback()
           
        })
    }

}