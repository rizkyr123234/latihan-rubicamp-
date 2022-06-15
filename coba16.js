class Pabrik {
    constructor(name) {
        this.namaPabrik = name
    }
    produksi(user) {
        let perhitungan = Math.floor(Math.random() * 1000);
        let hitungType = Math.floor(Math.random() * 50)
        console.log(`hai ${user}, selamat datang di ${this.namaPabrik}
        kami memproduksi mobil dengan berbagai jenis sekitar perbulan 
        ${perhitungan + hitungType} `)
        for (let i = 0; i < perhitungan; i++) {
            const brand = new Car('mercy')
            brand.introduce()
        }
        for (let i = 0; i < hitungType; i++) {
            const type = new CarWitType('BMW', 'sedan', 2, 2, 'dunlop', 'level tinggi ')
            type.perkenalan('lutpi')
            console.log(type.garansi())
        }
    }
}
class Car {
    constructor(nama) {
        this.nama = nama
       

    }
    introduce() {
        console.log(`ini mobil dengan brand ${this.nama}`)
    }
    garansi() {
         let tahunGaransi = Math.floor(Math.random() * 10)
       let  tahunPemkaian =Math.floor(Math.random() * 10) 
        if (tahunGaransi <= tahunPemkaian){
           return true
        } else{return false}
        
    }
}
class CarWitType extends Car {
    constructor(nama,  type, pintu, kursi, brand, jenisKaret) {
        super(nama)
        this.door = pintu
        this.kursi = kursi
        this.ban = new Ban(brand, jenisKaret)
        this.type = type
    }
    perkenalan(user) {
        console.log(`hai ${user} kami memiliki mobil dengan brand ${this.nama} bertype ${this.type}
        dengan ciri" :
        1. berpintu = ${this.door}
        2. jumlah kursi = ${this.kursi}
        3.  ban = ${this.ban.nyinyi()} `)
    }
    kecepatan() {
        console.log(`mobil bertype ${this.type}, memiliki kecepatan 300km/h`)
    }
}
class Ban {
    constructor(nama, jenisKaret) {
        this.brand = nama
        this.jenis = jenisKaret
    }
    nyinyi() {
        return (`bannya brand ${this.brand}, dengan jenis karet${this.jenis}`)
    }

}
const pabdrik = new Pabrik('jaya sentosa')
pabdrik.produksi('rizky')


