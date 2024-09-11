function countOccurrences(words){
    const occuredWords = {}
    for (item of words) {
        //this is implicit type conversion. If item is not assign to ocw property yet, 
        //it will be undefined which return false
        if(occuredWords[item]) occuredWords[item]++
        else occuredWords[item] = 1
    }
    return occuredWords
}

const words = ['apple', 'orange', 'apple', 'banana', 'apple'];
const words1 = ['apple', 'banana', 'apple', 'banana', 'apple'];
console.log(countOccurrences(words))
console.log(countOccurrences(words1))
