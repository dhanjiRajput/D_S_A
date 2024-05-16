let str1 = "nayan";
let str2 = "yaanm";

let l1 = str1.length;
let l2 = str2.length;

if (l1 != l2) {
    console.log("Not Equal...");
} else {

    let arr1 = str1.split("");
    let arr2 = str2.split("");

    let flag = true;

    arr1.sort();
    arr2.sort();

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i]!= arr2[i]) {
            flag = false;
            break;
        }
    }

    if (flag) {
        console.log("Both String Are Equal....!");
    } else {
        console.log("Both string are Not equal...!");
    }
}
