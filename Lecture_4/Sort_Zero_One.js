let arr = [0, 1, 0, 1, 0, 1, 1, 1, 0];

const sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) 
    {
        for (let j = 0; j < arr.length - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                // Swap the elements.
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sort(arr));


