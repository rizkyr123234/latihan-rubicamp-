// add
const fs = require('fs');
const kerjaLama = fs.readFileSync('pekerjaan.json', 'utf-8')
let parse = JSON.parse(kerjaLama)
if (process.argv[2] === 'add') {

    let slice = process.argv.slice(3)
    let strink = slice.join(' ')
    parse.push({
        complet: false,
        pekerjaan: strink,
        tag: ''

    })
    const strik = JSON.stringify(parse)
    const edit = fs.writeFileSync('pekerjaan.json', strik)
}

// ngelist 
else if (process.argv[2] === 'list') {
    for (let i = 0; i < parse.length; i++) {
        console.log(`${i + 1}.[${parse[i].complet ? 'x' : ' '}] ${parse[i].pekerjaan}`)
    }
}
// delete 

else if (process.argv[2] === 'delet') {
    let ngeDelet = parse.splice(process.argv[3], 1)
    console.log(ngeDelet)
    fs.writeFileSync('pekerjaan.json', JSON.stringify(ngeDelet))

    // sudah dikerjakan ataau belum 
} else if (process.argv[2] === 'komplit') {
    parse[process.argv[3] - 1].complet = true
    fs.writeFileSync('pekerjaan.json', JSON.stringify(parse))
    console.log(parse)
}
else if (process.argv[2] === 'unkomplit') {
    parse[process.argv[3] - 1].complet = false
    fs.writeFileSync('pekerjaan.json', JSON.stringify(parse))
    console.log(parse)
}

// tampil sudah dikerjakan atau belum 
else if (process.argv[2] === 'cekKomplit') {
    for (let i = 0; i < parse.length; i++) {
        if (parse[i].complet === true) {
            console.log(`${i + 1}.[x] ${parse[i].pekerjaan}`)
        }
    }
}
else if (process.argv[2] === 'cekGkKomplit') {
    for (let i = 0; i < parse.length; i++) {
        if (parse[i].complet === false) {
            console.log(`${i + 1}.[ ] ${parse[i].pekerjaan}`)
        }
    }
}
// ngetag
else if (process.argv[2] === 'ngeTag') {
    let slice = process.argv.slice(4)
    parse[process.argv[3]-1 ].tag = slice.toString()

    fs.writeFileSync('pekerjaan.json', JSON.stringify(parse))
    console.log(parse)
}

// ngefilter
else if (process.argv[2] === 'tampilTag') {
    for (let i = 0; i < parse.length; i++) {
        console.log(parse[i].tag[i] === process.argv[3])
        if (parse[i].tag.includes(process.argv[3])) {
            console.log(`${i + 1}.[${parse[i].complet ? 'x' : ' '}] ${parse[i].pekerjaan}`)
        }
    }
}