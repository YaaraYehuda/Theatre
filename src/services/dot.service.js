
import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

// export const dotService = {
//     query,
//     save,
//     remove,
//     getById,
// }

// const STORAGE_KEY = 'dots'

const gTheatre = createMat()

function createMat(ROWS, COLS) {
    var mat = []
    for (var i = 0; i < ROWS; i ++){
        var row = []
        for (var j = 0; j < COLS; j++) {
            let dot = createDot()
            dot.row = i
            dot.col = j
            row.push(dot)
        }
    }
    return mat
}

function getTheatre() {
    return gTheatre
}

function createDot() {
    return {
        isReserved: false,
        isSelected: false,
    }
}


// const gDefaultToys = [
//     { _id: 'r2', name: 'Talking Doll', price: 80, labels: ['Doll','Baby'], createdAt: 1631031801011, isInStock: true },
//     { _id: 'r3', name: 'Buges Bunnie', price: 60, labels: ['box game', 'Puzzle'], createdAt: 1631031801011, isInStock: true },
//     { _id: 'r4', name: 'Race Car', price: 100, labels: ['on wheel', 'outDoor'], createdAt: 1631031801011, isInStock: true },
//     { _id: 'r5', name: 'Bath Duck', price: 30, labels: ['Art', 'Baby'], createdAt: 1631031801011, isInStock: true },
   
// ]

// function query(filterBy) {
    
//     return storageService.query(STORAGE_KEY).then(toys => {
        
        
//         if (!toys || !toys.length) {
//             storageService.postMany(STORAGE_KEY, gDefaultToys)
//             toys = gDefaultToys
                   
//         }
//         if (filterBy) {
//             console.log('filterBy:', filterBy)
//             console.log('toys1:', toys)
            
            
//             const { name, maxPrice, isInStock } = filterBy
//             if(name) {
//                 const regex = new RegExp(name, 'i')
//                 toys = toys.filter((toy) => regex.test(toy.name))
//                 console.log('toys1:', toys)
//             }
//             if (maxPrice) {
//                 toys = toys.filter((toy) => toy.price < maxPrice)
//                 console.log('toys2:', toys)
//             }
//             if (isInStock) {
//                 toys = toys.filter((toy) => (!toy.isInStock && isInStock === 'out-of-stock') || (toy.isInStock && isInStock === 'in-stock'))
//                 console.log('toys3:', toys)
//             }     
//         }
       
//         return toys
//     })
// }

// function getById(toyId) {
//     return storageService.get(STORAGE_KEY, toyId)
//         .then((toy) => {
//             toy.reviews = [
//                 {
//                     _id: 'm101',
//                     rete: 8,
//                     txt: 'nice!',
//                     author: 'Nancy',
//                     date: 1631031801011
//                 },
//                 {
//                     _id: 'm102',
//                     rate: 10,
//                     txt: 'my kids LOVED it!',
//                     author: 'Thor',
//                     date: 1631031801023
//                 },
//                 {
//                     _id: 'm103',
//                     rate: 4,
//                     txt: 'arrived broken',
//                     author: 'Wonder Woman12',
//                     date: 16310318010243
//                 },
//             ]

//             return toy
//         })
// }

// function remove(toyId) {
//     return storageService.remove(STORAGE_KEY, toyId)
// }

// function save(toy) {
//     if (toy._id) {
//         return storageService.put(STORAGE_KEY, toy)
//     } else {
//         toy.createdAt = Date.now()
//         toy.isInStock = true
//         toy.labels = []
//         return storageService.post(STORAGE_KEY, toy)
//     }
// }
