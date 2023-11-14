// 1)

// const numb = 101;

// for (let i = 5; i < numb; i++) {
//     console.log(i);
// }

// 2)

// let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// for (let i = 0; i < array1.length; i++) {
//     if (i > 0 && i < 10) {
//         console.log(i);
//     } 
// }

// 3)

// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let hasNumber5 = false; 
// for (let i = 0; i < array2.length; i++) {
//     const numb = array2[i];

//     switch (numb) {
//         case 5:
//             hasNumber5 = true;
//             break;
//     }
// }

// if (hasNumber5) {
//     console.log('It includes number 5');
// } else {
//     console.log('It has no number 5 in it');
// }

// 4)

// let array3 = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < array3.length; i++) {
//     sum += array3[i];
// }

// console.log(sum);

// 5)

// let array4= [1, 2, 3, 4, 5];
// let count = 0;
// let sum = 0;

// for (let i = 0; i < array4.length; i++) {
//     count += 1;
//     sum += array4[i];
// }

// console.log(sum/count);

// 6)

// let array5 = [1, 2, 3, 7, 6, 9];
// for (let i = 0; i < array5.length; i++) {
//     if (array5[i] === 7) {
//         continue;
//     }

//     console.log(i);
// }

// 7) 1. If you mean to output it

// let user = {
//     firstname: "giorgi",
//     lastname: "smith",
//     age: 25,  studentstatus: "active"
//   };

//   console.log(user.studentstatus);

// 7) 2. If you mean to delete it

// let user = {
//         firstname: "giorgi",
//         lastname: "smith",
//         age: 25,  studentstatus: "active"
//       };

//       delete user.studentstatus;
//       console.log(user);

// 8)

// let user = {
//     name: 'giorgi',
//     age:  20,
//     studentstatus: 'active'
// };

// (user.age < 18 && user.studentstatus === 'active')
//   ? console.log('Hello!')
//   : (user.name === 'levan')
//     ? console.log('Hello Levan!')
//     : (user.studentstatus === 'active' || user.age < 25)
//       ? console.log('Hello World!')
//       : console.log('Error');

// 9) evens

// let array = [2, 3, 5, 10, 25, 24, 11, 100 , 6, 7, 10]
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// odds

// let array = [2, 3, 5, 10, 25, 24, 11, 100 , 6, 7, 10]
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//         console.log(array[i]);
//     }
// }

// 10)

//     let users = [
//         {username: 'giorgi', status: false},
//         {username: 'levani', status: false},
//         {username: 'anna', status: true}
//     ]

//     users.forEach(function(user) {
//         if (user.status === true) {
//             console.log(user);
//         }
//     })