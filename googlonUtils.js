'use strict'

const ABECEDARY = 'sxocqnmwpfyheljrdgui'

function getFooLetters(){
    return ['u', 'd', 'x', 's', 'm', 'p', 'f']
}

function isFooLetter(letter) {
    return getFooLetters().includes(letter)
}

function getBarLetters(){
    return [ 'o', 'c', 'q', 'n', 'w', 'y', 'h', 'e', 'l', 'j', 'r', 'g', 'i' ]
}

function isBarLetter(letter){
    return getBarLetters().includes(letter)
}

function isPreposition (word) {
    const length = word.length
    const requiredLength = length === 6
    const endsInFooLetter = isFooLetter(word[length-1])
    const doesNotHaveU = !word.includes('u')

    return requiredLength && endsInFooLetter && doesNotHaveU
}

function isVerb (word) {
    const length = word.length
    const requiredLength = length >= 6
    const endsInFooLetter = isBarLetter(word[length-1])

    return requiredLength && endsInFooLetter
}

function isSubjunctiveVerb (word) { 
    return isVerb(word) && isBarLetter(word[0])
}

function convertBase20ToBase10(number = '') {
    let convertedNumber = 0
    let digits = number.split('')
    for (let index = 0; index < digits.length; index++) {
        let base10Digit = Math.pow(20, index) * ABECEDARY.indexOf(digits[index])
        convertedNumber += base10Digit
    }

    return convertedNumber
}

function isPrettyNumber (number) {
    const base10Number = convertBase20ToBase10(number)
    const prettyNumber = 81827

    return  base10Number >= prettyNumber && base10Number%3 === 0
}

function sortWordsByAlphabeticalOrder(textArray){
    const clonedArray = [...textArray]
    const sortedArray = clonedArray.sort(sorterFunction)
    const sortedArrayWithoutDuplicates =  new Set(sortedArray) // Set does not allow duplicated values

    return Array.from(sortedArrayWithoutDuplicates).join(' ')
}

function sorterFunction(word1, word2) {
    if(ABECEDARY.indexOf(word1[0]) > ABECEDARY.indexOf(word2[0])) {
        return 1
    } else if (ABECEDARY.indexOf(word1[0]) < ABECEDARY.indexOf(word2[0])) {
        return -1
    } else if ((ABECEDARY.indexOf(word1[0]) === ABECEDARY.indexOf(word2[0])) && (word1 || word2)) {
        return sorterFunction(word1.substring(1), word2.substring(1))
    }

    return 0
    
}


module.exports = {
    getFooLetters,
    isFooLetter,
    getBarLetters,
    isBarLetter,
    isPreposition,
    isVerb,
    isSubjunctiveVerb,
    convertBase20ToBase10,
    isPrettyNumber,
    sortWordsByAlphabeticalOrder
}
