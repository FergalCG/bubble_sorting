function split(wholeArray) {
    if(wholeArray.length === 1) {
        return wholeArray
    } else {
        const halfIndex = Math.floor(wholeArray.length/2)
        const firstHalf = wholeArray.slice(0,halfIndex)
        const secondHalf = wholeArray.slice(halfIndex)
        return [firstHalf, secondHalf];
    }
    
}

function merge(arr1 , arr2) {
    let returnArr = []
    let i = 0
    let j = 0
    while(arr1[i] !== undefined || arr2[j] !== undefined) {
        if(arr1[i] === undefined) {
            returnArr.push(arr2[j])
            j++
        }
        else if(arr2[j] === undefined) {
            returnArr.push(arr1[i])
            i++
        }
        else if(arr1[i] <= arr2[j]) {
            returnArr.push(arr1[i])
            i++
        } else {
            returnArr.push(arr2[j])
            j++
        }
        
    }
    return returnArr
}

function mergeSort(array) {
    if(array.length === 1) {
        return array
    } else {
        let tempArr = split(array)
        return merge(mergeSort(tempArr[0]), mergeSort(tempArr[1]))
    }
  
}
