
function largestOfFour(arr) {
    var len = arr.length;
    var resultArray = [];
    for (var i = 0; i < len; i++) {
    	var max = Math.max.apply(null, arr[i]);
    	resultArray.push(max);
    }
    console.log(resultArray);
    return resultArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);// returns : [5, 27, 38, 1001]