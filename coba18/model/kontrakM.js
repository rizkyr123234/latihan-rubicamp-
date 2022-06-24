 import { db } from "../controller/utama.js";
 import Table from "cli-table";
 
let daftarKo = new Table({
  head:['no', 'ID matkul', 'ID dosen','NIM','nilai'],
  colWidths:[10,10,10,10,10]
})
var cariKo = new Table({
  head:['no', 'ID matkul', 'ID dosen','NIM','nilai'],
  colWidths:[10,10,10,10,10]
})
let tambahKo = new Table({
  head:['no', 'ID matkul', 'ID dosen','NIM','nilai'],
  colWidths:[10,10,10,10,10]
})
var hpsKo = new Table({
    head:['no', 'ID matkul', 'ID dosen','NIM','nilai'],
  colWidths:[10,10,10,10,10]
})
export default class DbKotrak{
  static daftar(callback) {
        
    db.all(`select * from kontrak_kuliah`, (err, rows) => {
        if (err) return 'gagal mas '
        rows.forEach(row => {
            daftarKo.push([row.angka, row.ID_matkul, row.ID_dosen, row.NIM, row.nilai_mahasiswa])
        })
        console.log(daftarKo.toString())
        callback()
    })

}
static cari(answer, callback) {

    db.all(`select * from kontrak_kuliah WHERE NIM = "${answer}"`,
        (err, rows) => {
            if (err) return 'gagal mas '
           rows.forEach(row=>{
            cariKo.push([row.angka,row.ID_matkul, row.ID_dosen, row.NIM, row.nilai_mahasiswa])
           })
            console.log(cariKo.toString())
            callback()
        })

}
static tambah(IDMT, IDD, NIM, nilai, callback) {
    
    db.run(`INSERT into kontrak_kuliah(ID_matkul, ID_dosen, NIM, nilai_mahasiswa) values("${IDMT}", ${IDD}, "${NIM}","${nilai}")`, function (err, row) {
        if (err) {
            console.log('eror mas ')
        }
        console.log('berhasil')
        db.all(`select * from kontrak_kuliah`, (err, rows) => {
            if (err) return 'gagal mas '
            rows.forEach(row => {
                tambahKo.push([row.angka, row.ID_matkul, row.ID_dosen, row.NIM, row.nilai_mahasiswa])
            })
            console.log(tambahKo.toString())
            callback()
        })
    })

}
static ngedelet(answer, callback) {
    db.all(`select * from kontrak_kuliah WHERE NIM = "${answer}"`,(err,rows)=>{
        rows.forEach(row=>{
            hpsKo.push([row.angka, row.ID_matkul, row.ID_dosen, row.NIM, row.nilai_mahasiswa])
        })
        console.log(`kontrak deengan NIM  ${answer} telah dihapus`)
        console.log(hpsKo.toString())
        
    })
    db.run(`DELETE from kontrak_kuliah Where NIM = "${answer}"`, function (err) {
        if (err) {
            console.log('eror mas ')
        }
        console.log(`sudah di delet mas dengan NIM=${answer}`)
        callback()
    })


}
kembali() { }
}