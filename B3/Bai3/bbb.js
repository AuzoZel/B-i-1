var fruits = [
    ["Grape", 15],
    ["Apple", 12],
    ["Banana", 9],
    ["Papaja", 2]
]
// console.log(fruits);
// //Vong lap FOR IN
// for (i in fruits) {
//     console.log(i); //in ra vi tri cua cac phan tu
// }

// //Vong Lap FOR OF
// for (i of fruit) {
//     console.log(i);
// }

//Thuc hand xay dung thanh search
var nameInp = prompt("Nhap Ten Trai Cay")
for (let i=0; i<=3; i++) {
    if (nameInp == fruits[i][0]) {
        console.log("Co Trai Cay");
    } else {
        console.log("Ko Co Trai Cay")
    }
}
