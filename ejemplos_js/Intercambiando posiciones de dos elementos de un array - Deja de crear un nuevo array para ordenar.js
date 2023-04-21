let arr = [2,-1,5,7,1,-7,0,14,4]

function swap(arr, index1, index2){
    let aux = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = aux;
}

swap(arr, 1, 5)

console.log(arr)    //[2, -7, 5, 7, 1, -1, 0, 14, 4]