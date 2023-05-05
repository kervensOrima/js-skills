const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


// MAP
// Get an array of all names
const names = characters.map(character => { return character.name })
console.log(names)
// Get an array of all heights
const heights = characters.map(character => { return character.height })
console.log(heights)
// Get an array of objects with just name and height properties
console.log('Names and heights using map function')
const namesHeigts = characters.map(character => {
    return { name: character.name, height: character.height }
})
console.log(namesHeigts)
// Get an array of all first names
const firstname = characters.map(character => (character.name.split(' ')[0].toLowerCase()))
console.log(firstname)


// REDUCE
// Get the total mass of all characters
const totalMass = characters.reduce((acc, current) => {
    return acc + current.mass
}, 0)
console.log(`Total mass is ${totalMass}`)

// Get the total height of all characters
const totalHeight = characters.reduce((acc, current) => {
    return acc + current.height
}, 0)

console.log(`Total of height is ${totalHeight}`)
// Get the total number of characters in all the character names
const totalNumberNames = characters.reduce((acc, current) => {
    return acc + current.name.length
}, 0)
console.log(`the total number of characters in all the character names is : ${totalNumberNames}`)

// Get the total number of characters by eye color(hint.a map of eye color to count)
const characterByEyesColor = characters.reduce((acc, current) => {
    const color = current.eye_color
    if (acc[color]) {
        acc[color]++
    } else {
        acc[color] = 1
    }
    return acc
}, {})
console.log(characterByEyesColor)

// FILTER
// Get characters with mass greater than 100
const greater100 = characters.filter(character => {
    return character.mass > 100
})
console.dir(greater100, { depth: null })
// Get characters with height less than 200
const lessHeight200 = characters.filter(character => { return character.height < 200 })
console.dir(lessHeight200, { depth: null })

// Get all male characters
const male = characters.filter(character => { return character.gender.toLowerCase() === "male" })
console.log(male)

// Get all female characters
const female = characters.filter(character => character.gender.toLowerCase() === "female")
console.log(female)



// SORT
// Sort by mass
const sortMass = characters.sort((a, b) => {
    return a.mass - b.mass // ascending
    // return b.mass - a.mass // descending
})
console.log(sortMass)


// Sort by name (ascending)
const byName = characters.sort((a, b) => {
    if (a.name < b.name) return 1
    return -1
})
console.log(byName)

// Sort by height (ascending)
const byHeight = characters.sort((a, b) => {
    return a.height - b.height
})
console.log(byHeight)

// Sort by gender (female first)
const byGenderFemale = characters.sort((a, b) => {
    if (a.b === 'female') return 1
    return -1
})

const byGenederMale = characters.sort((a, b) => {
    if (a.gender === 'male') return 1
    return -1
})
console.log(byGenderFemale)
console.log(byGenederMale)






// EVERY
// Does every character have blue eyes ?
const allBlueEyes = characters.every((character) => {
    return character.eye_color === 'blue'
})
console.log(`${allBlueEyes}`)

// Does every character have mass more than 40 ?
const allMassMore40 = characters.every((character) => {
    return character.mass > 40
})
console.log(allMassMore40)

// Is every character shorter than 200 ?
const allCharacterShoter200 = characters.every(character => {
    (
        character.height < 20
    )
})
console.log(`${allCharacterShoter200}`)

// Is every character male
const allMale = characters.every(character => (character.male === "male"))
console.log(allMale)




//                 SOME
// Is there at least one male character ?
const oneMale = characters.some((character) => {
    return character.gender === "male"
})
console.log(oneMale ? "there is at least one male character" : "No there isn't")


// Is there at least one character with blue eyes ?
const oneBlueEyes = characters.some((character) => (
    character.eye_color.toLowerCase() === "blue"
))
console.log(oneBlueEyes ? `there is at least one character with blue eyes` : `No`)


// Is there at least one character taller than 200 ?
const oneTaller = characters.some((character) => {
    (
        character.height > 200
    )
})
console.log(oneTaller ? `there is at least one character taller than 200` : `No`)

// Is there at least one character that has mass less than 50 ?
const oneLess = characters.some((character) => {
    (
        character.mass < 50
    )
})
console.log(oneLess ? `there is at least one character that has mass less than 50` : `No`)