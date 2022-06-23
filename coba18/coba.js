var Table = require('cli-table');
const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('./universitas.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)

})
// instantiate
var table = new Table({
    head: ['NIM', 'Nama','Jurusan']
  , colWidths: [10, 10,10]
});
db.all(`select NIM, nama, ID_jurusan from mahasiswa`, (err, rows) => {
    if (err) return 'gagal mas '
    rows.forEach(row => {
      table.push([row.NIM,row.nama, row.ID_jurusan])
    })
    console.log(table.toString());
})
// table is an Array, so you can `push`, `unshift`, `splice` and friends


