
function spiral(num) {
    let matrix = []
    let bilangan = 0
    for (let i = 0; i < num; i++) {
        matrix[i] = []
        for (let j = 0; j < num; j++) {
            matrix[i][j] = bilangan
            bilangan++
        }

    }
    let jawaban = []
    let x = 0
    let y = 0
    let batasBawah = 0
    let batasAatas = num
    while (jawaban.length < num * num) {



        while (x < batasAatas) {
            jawaban.push(matrix[y][x])
            x++
        }
        x--
        y++

        while (y < batasAatas) {
            jawaban.push(matrix[y][x])
            y++

        }
        y--
        x--
        while (x >= batasBawah) {

            jawaban.push(matrix[y][x])
            x--
        }
        x++
        y--

        while (y > batasBawah) {
            jawaban.push(matrix[y][x])
            y--

        }
        x++
        y++
        batasBawah++
        batasAatas--
    }
    console.log(jawaban)
}
spiral(6)
spiral(5)