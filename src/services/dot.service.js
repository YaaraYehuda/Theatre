
import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

export const dotService = {
    query,

}

// const STORAGE_KEY = 'dots'

function query(ROWS, COLS) {
    const cinema = storageService.loadFromStorage('cinema')
    if(!cinema) return createCinema(ROWS, COLS)
    return cinema
}

function createCinema(ROWS, COLS) {
    var mat = []
    for (var i = 0; i < ROWS; i++) {
        var row = []
        for (var j = 0; j < COLS; j++) {
            let dot = new Dot(i, j)
            row.push(dot)
        }
        mat.push(row)
    }
    return mat
}
class Dot {
    static nextId = 101

    constructor(i, j) {
        this.id = Dot.nextId++
        this.i = i
        this.j = j
        this.price = 40
        this.isReserved = false
        this.isSelected = false
    }

    get dotPrice() {
        return this.price
    }

    set dotPrice(newPrice) {
        if (!isNaN(newPrice)) this.price = newPrice
        else console.log('Invalid price!')
    }

    toggleSelectDot() {
        if (this.isReserved) return
        this.isSelected = !this.isSelected
    }

    reserveDot() {
        this.isReserved = true
    }

}





// function createDot() {
//     return {
//         isReserved: false,
//         isSelected: false,
//     }
// }

