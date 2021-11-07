function zerosAndOnes(s) {
    // have two pointers
    // first pointer is at a value and second pointer is at the value next to it
    // if the first value is 0 and second is 1 OR first value is 1 and second value is 0
    // then remove those both those index from the array
    // iterate through the array starting from position 0 and 1 because the array has been changed and needs to be checked again

    // if neither position is the wanted values
    //    increment both iterators and check again
    // once the second iterator is more than or equal to the length of string
    //    break and return the length of the string that is left

    let pointerOne = 0;
    let pointerTwo = pointerOne + 1;


    while (pointerTwo < s.length) {
        if (
            (s[pointerOne] === "0" && s[pointerTwo] === "1") ||
            (s[pointerOne] === "1" && s[pointerTwo] === "0")
        ) {
            // removing the middle (10 or 01)
                // take the left side of it + the right side of it
            s = s.slice(0, pointerOne) + s.slice(pointerTwo + 1, s.length);
            pointerOne = 0;
            pointerTwo = pointerOne + 1;
        } else {
            pointerOne = pointerTwo;
            pointerTwo += 1;
        }
    }
    return s.length;
}


console.log(zerosAndOnes("1111111111111111111111111111111111111111111111111100000000000000000000000000000000000000000000000000"));
console.log(zerosAndOnes('01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010'));
