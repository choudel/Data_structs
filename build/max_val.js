"use strict";
function max(arrays) {
    for (let i = 0; i < arrays.length - 1; i++) {
        if (arrays[i] > arrays[i + 1]) {
            let temp = arrays[i];
            arrays[i] = arrays[i + 1];
            arrays[i + 1] = temp;
        }
    }
    let max_val = arrays[arrays.length - 1];
    return max_val;
}
let scores = [69, 91, 31, 54, 78, 1];
console.log(`The maximum value is : ${max(scores)}`);
