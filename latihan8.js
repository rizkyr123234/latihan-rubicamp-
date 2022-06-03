function pola(strink){
    for(let i = 0;i<10;i++){
       for(let j = 0; j<10;j++){
            a=strink.replace('#',`${i}`)
          b=a.replace(`#`,`${j}`)
          let d = b.split('=')
          let hasil = eval(d[0])
          let convert  = parseInt(d[1])
    if(hasil==convert){m
        
        return [i,j]
    }
          
       }
    }
}
console.log(pola('42#3 * 188  = 80#204') )

