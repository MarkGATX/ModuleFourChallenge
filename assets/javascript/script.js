//Durstenfeld shuffle - found https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array from user https://stackoverflow.com/users/310500/laurens-holst and edited by https://stackoverflow.com/users/8112776/ashleedawg

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // console.log(i);
        const j = Math.floor(Math.random() * (i + 1));
        // console.log(j);
        // console.log(array);
        // console.log([array[i], array[j]]);
        // console.log([array[j], array[i]]);
        [array[i], array[j]] = [array[j], array[i]];
        // console.log([array[i], array[j]]);
        // console.log([array[j], array[i]]);
    }
    console.log(array)
}
shuffleArray([1,2,3,4]);
