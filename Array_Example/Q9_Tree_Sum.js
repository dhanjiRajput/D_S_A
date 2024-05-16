let arr = [1, 2, 3, 4, 3, 5, 6, 10, 20, 30];

const find_tree_sum = (arr) => {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        arr2[i] = arr[i];
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && arr2[i] < arr2[j] + arr[i]) {
                arr2[i] = arr2[j] + arr[i];
            }
        }
    }

    return Math.max(...arr2);
}

console.log(find_tree_sum(arr));