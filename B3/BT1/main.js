// var fruits = [
//     ["Grape", 15],
//     ["Apple", 12],
//     ["Banana", 9],
//     ["Papaja", 2]
// ]
// console.log(fruits)

//while

// // var i = 0;
// // while (i<=3) {
// //     console.log("I have "+ fruits[i][i+1]+" "+fruits[i][i]);
// //     i++;
// // }

//do while

// // var i = 0;
// // do {
// //     console.log("I have "+fruits[i][i+1]+ " "+fruits[i][i]);
// //     i++;
// // }while(i<=3)

//for

// for (let i =0; i<=3; i++) {
//     console.log("I have "+ fruits[i][i+1]+" "+ fruits[i][i])
// }

// BAI2: CHO OBJECT

var myDog = {
    "name": "Ngao",
    "legs": 4,
    "friends": ["everything"]
}
delete myDog.name
console.log(myDog);
//Thay Doi ten myDog thanh husky
myDog.newName = "HUSKY"
//Them property cho myDog la Color voi gia tri la Brown
myDog.color = "Brown"
//xoa di properties friends
delete myDog.friends