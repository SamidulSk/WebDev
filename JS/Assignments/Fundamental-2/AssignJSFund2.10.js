//check occurance of each word in sentence using map
function wordCounter(sentence) {
    const wordMap = new Map();
    const words = sentence.split(" ");

    for (const word of words) {
        const cleanWord = word.toLowerCase().replace(/[.,?!]/g, '');

        if (cleanWord.length > 0) {
            wordMap.set(cleanWord, (wordMap.get(cleanWord) || 0) + 1);
        }
    }

    return wordMap;
}

const sentence = "please please submit your assignment on time, your assingment are important";
const result = wordCounter(sentence);
console.log(result);
//output:::::::
// Map(9) {
//     'please' => 2,
//     'submit' => 1,
//     'your' => 2,
//     'assignment' => 1,
//     'on' => 1,
//     'time' => 1,
//     'assingment' => 1,
//     'are' => 1,
//     'important' => 1
//   }