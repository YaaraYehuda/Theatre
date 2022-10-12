
import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

export const dotService = {
    createCinema,

}

// const STORAGE_KEY = 'dots'


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
    constructor(i, j) {
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

