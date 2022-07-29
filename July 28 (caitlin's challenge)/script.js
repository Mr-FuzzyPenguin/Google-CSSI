function max_of_arr(an_array)
{
    // credit:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    an_array.sort(function(a, b){return b-a});
    return an_array[0]
}

// Returns first value of index of reverse sorted list
console.log(max_of_arr([10, 2, 29, 0])) // yields 29


function permutation_checker(string1, string2)
{
    string1 = string1.split('')
    string2 = string2.split('')
    temp_s1 = string1
    temp_s2 = string2
    temp_s1.sort()
    temp_s2.sort()

    return (temp_s1.join('') === temp_s2.join(''))
}

console.log(permutation_checker("dog ","god ")) // yields true
console.log(permutation_checker("dogs", "god")) // yields false
console.log(permutation_checker("abcd", "dabc")) // yields true
