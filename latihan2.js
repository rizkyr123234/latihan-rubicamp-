function deret(n){
    let hasil = []
    let deret1 = n*3 
    for(let i = 1; i<=n; i++){
        hasil.push(i*3)
        
        
        }
        for(let i = 0; i<hasil.length;i++){
            if(hasil[i]%5 &&hasil[i]%6== 0 ){
                hasil[i] = 'kaskus'
            } else if (hasil[i]%6 == 0 ){
                hasil[i] = 'kus'
            }else if( hasil[i]%5 == 0 ){
                hasil[i] = 'kas'
            }
        }
        return hasil 
    } 
