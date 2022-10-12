
import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

export const dotService = {
    createCinema
}

// const STORAGE_KEY = 'dots'

class Dot {
    constructor(i, j) {
        this.row = i
        this.col = j
        this.price = 40
        this.isReserved = false
        this.isSelected = false
    }

    get dotPrice() {
        return this.price
    }

    set dotPrice(newPrice) {
        if(!isNaN(newPrice)) this.price = newPrice
        else console.log('Invalid price!')
    }

   toggleSelectDot() {
    if(this.isReserved) return
    this.isSelected = !this.isSelected
   }

   reserveDot() {
    this.isReserved = true
   }

}


function createCinema(ROWS, COLS, pass) {
    var mat = []
    for (var i = 0; i < ROWS; i ++){
        var row = []
        for (var j = 0; j < COLS; j++) {
            let dot = new Dot(i, j)
            row.push(dot)
        }
        mat.push(row)
    }
    return mat
}




// function createDot() {
//     return {
//         isReserved: false,
//         isSelected: false,
//     }
// }

