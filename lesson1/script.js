var my_var = "null"
var my_var_1 = "undefined ehe  w929"

console.log(my_var.charAt(1))
console.log(my_var_1.search(' ehe'))
console.log(my_var_1.slice(0, 5))
console.log(my_var_1.split(' '))
console.log(my_var_1.trim())


const words = ['Merder', 'Shit', 'Merde', 'Fuck', 'Bitch', 'Other']

const theWords = words.map(word => word.toLowerCase())

const treatWord = (value = '') => {
    if (value.length > 0) {
        let lowerValue = value.toLowerCase()

        theWords.forEach(badWord => {
            if (lowerValue.includes(badWord)) {
                lowerValue = lowerValue.replace(badWord, numberOfStars(badWord))
            }
        })
        return lowerValue
    }
    return ''
}

const numberOfStars = (badWord) => {
    console.log(badWord.length)
    let stars = ''
    for (let index = 0; index < badWord.length; index++) {
        stars += '*'
    }
    return stars
}

console.log(treatWord(`Hello world Merde, i m ORIMA Kervens a professional web developper!! Fuck.`))