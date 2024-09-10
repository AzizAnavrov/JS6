//  Задание 1

// let array = [1,2,3,4,5,6,7,8,9,10,11]
// let evenNumbers = []
// let oddNumbers = []

// for(let i = 0; i < array.length; i++) {
//     if(array[i] % 2 === 0) {
//         evenNumbers.push(array[i]);
//     }else {
//         oddNumbers.push(array[i]);
//     }
// }

// console.log('Четные числа : ' + evenNumbers);
// console.log('Нечетные числа : ' + oddNumbers);


// Задание 2

let array = []

for(let i = 0; i < Infinity; i++) {
    let word = prompt('Введите команду : add, del, stop')
    let command = word.split(', ')
    
    if(word == 'stop') {
        break
    }else if(command[0] == 'add') {
        array.push(command[1])
    }else if(word.length > 2 && !array.includes(word)){

    }else if(command[0] == 'del') {
        for(let z = 0; z <array.length; z++) {
            array[z] == command[1] ? array.splice[z,1] : ''
        }
    }
    }
        console.log(array);
