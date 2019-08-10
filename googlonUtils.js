'use strict'

const ABECEDARY = 'sxocqnmwpfyheljrdgui'

class GooglonUtils {
    static getFooLetters(){
        return ['u', 'd', 'x', 's', 'm', 'p', 'f']
    }

    static isFooLetter(letter) {
        return this.getFooLetters().includes(letter)
    }

    static getBarLetters(){
        return [ 'o', 'c', 'q', 'n', 'w', 'y', 'h', 'e', 'l', 'j', 'r', 'g', 'i' ]
    }

    static isBarLetter(letter){
        return this.getBarLetters().includes(letter)
    }

    static getABECEDARY () {
        return ABECEDARY.split('')
    }

    static isPreposition (word) {
        const length = word.length
        const requiredLength = length === 6
        const endsInFooLetter = this.isFooLetter(word[length-1])
        const doesNotHaveU = !word.includes('u')
        return requiredLength && endsInFooLetter && doesNotHaveU
    }

    static isVerb (word) {
        const length = word.length
        const requiredLength = length >= 6
        const endsInFooLetter = this.isBarLetter(word[length-1])

        return requiredLength && endsInFooLetter
    }

    static isSubjunctiveVerb (word) { 
        return this.isVerb(word) && this.isBarLetter(word[0])
    }

    static convertBase20ToBase10(number = '') {
        let convertedNumber = 0
        let digits = number.split('')
        for (let index = 0; index < digits.length; index++) {
            let base10Digit = Math.pow(20, index) * ABECEDARY.indexOf(digits[index])
            convertedNumber += base10Digit
        }

        return convertedNumber
    }

    static isPrettyNumber (number) {
        const base10Number = this.convertBase20ToBase10(number)
        const prettyNumber = 81827
        return  base10Number >= prettyNumber && base10Number%3 === 0
    }

    static sortWordsByAlphabeticalOrder(textArray){
        const clonedArray = [...textArray]
        const sortedArray = clonedArray.sort(this.sorterFunction)
        
        return sortedArray
    }

    sorterFunction(word1, word2) {
        if(ABECEDARY.indexOf(word1[0]) > ABECEDARY.indexOf(word2[0])) {
            return 1
        } else if (ABECEDARY.indexOf(word1[0]) > ABECEDARY.indexOf(word2[0])) {
            return -1
        } else if ((ABECEDARY.indexOf(a) === ABECEDARY.indexOf(b))) {
            return this.sorterFunction(word1.substring(1), word2.substring(1))
        }
    }

    
}

module.exports = GooglonUtils
