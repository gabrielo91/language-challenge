'use strict'

const GooglonUtils = require('./googlonUtils')

class GooglonEvaluator {

    evalText(text){
        const splittedText = text.split(' ')
        const sortedVocabulary = GooglonUtils.sortWordsByAlphabeticalOrder(splittedText)
        let totalPrepositions = 0
        let totalVerbs = 0
        let totalsubjunctiveVerbs = 0
        let totalPrettyNumbers = 0
        const prettyNumbersArray = []

        splittedText.forEach(word => {
            if (GooglonUtils.isPreposition(word)) totalPrepositions++
            if (GooglonUtils.isVerb(word)) totalVerbs++
            if (GooglonUtils.isSubjunctiveVerb(word)) totalsubjunctiveVerbs++
            if (!prettyNumbersArray.includes(word) && GooglonUtils.isPrettyNumber(word)) prettyNumbersArray.push(word), totalPrettyNumbers++
        });

        console.log(`1) There are ${totalPrepositions} prepositions in the text`)
        console.log(`2) There are ${totalVerbs} verbs in the text`)
        console.log(`3) There are ${totalsubjunctiveVerbs} subjunctive in the text`)
        console.log(`4) Vocabulary list ${sortedVocabulary}`)
        console.log(`5) There are ${totalPrettyNumbers} distinct pretty numbers in the text`)

        return {
            totalPrepositions, totalVerbs, totalsubjunctiveVerbs, sortedVocabulary, totalPrettyNumbers
        }
    }
}

module.exports = new GooglonEvaluator()
