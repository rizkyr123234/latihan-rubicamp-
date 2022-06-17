export default class Matematika{
    #angka=1
    
   
    tambah(num){
        this.#angka+= num
        
        return this
    }
    kurang(num){
        this.#angka-=num
        return this
    }
    kali(num){
        this.#angka*=num
        return this
    }
    bagi(num){
        this.#angka/=num
        return this
    }
    square(){
        this.#angka*=this.#angka
        return this
    }
    eksponen(num){
        this.#angka= this.#angka**num
    }
    akar(){
        this.#angka = Math.sqrt(this.#angka)
    }
    get angka(){return this.#angka}
    set angka(num){
        this.#angka= num
    }

}
