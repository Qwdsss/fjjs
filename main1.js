// alert('hello world!');
// let name = "Kokodzhambo",
//     // age = 21,
//     // balancce = 23.5,
//     // test = false
//     // x = 10 
//     // y = 5
//     // console.log(x + y)
//     // console.log(x - y)
//     // console.log(x * y)
//     // console.log(x / y)
//     // console.log(x % y)
//     // console.log(x ** y)

//     // console.log(5 == "5")
//     // console.log(5 === 5)
//     // console.log(5 < 4)
//     // console.log(5 <= 5)
//     // console.log(5 != 5)
// let

// let age = 18;
// if( age >= 18 && age < 60) {
//     console.log('вы прошли')
// }else{
//     console.log('вы не прошли')
//     }

// let x = 5;
// x = 4
// if (x == 4) {
//     console.log ('x = 4')
// } else if (x == 3) {
//     console.log('x = 3')
// } else {
//     console.log("Ни одно условие не сработало")
// }

// let x = 5
// let y = 3 
// let z = 6
// if (x > y && x > z) {
//     console.log ("x больше всех")
// } else if (y > x && y > z) {
//     console.log ("y больше всех")
// } else {
//     console.log ("z больше всех")
// }

// let x = +prompt("Введите первое число")
// let y = +prompt("Введите второе число")
// let z = +prompt("Введите третье число")
// alert(x)
// alert(y)
// alert(z)

// if (x > y && x > z) {
//     console.log ("x больше всех")
// } else if (y > x && y > z) {
//     console.log ("y больше всех")
// } else {
//     console.log ("z больше всех")
// }

// if (x < y && x < z) {
//     console.log ("x меньше всех")
// } else if (y < x && y < z) {
//     console.log ("y меньше всех")
// } else {
//     console.log ("z меньше всех")
// }



// let x = prompt("Введите имя")
// while(x.length < 3) {
//    x = prompt('имя не соответсвует норме, введите снова');
// } console.log(x)

// let age = +prompt("Введите возраст")
// while(age < 14 || age > 60) {
//     if(age > 14) {
//         age = +prompt("Ваш возраст не соотвествутет, введите по новой");
//     }
//     else if(age < 60) {
//         age = +prompt("Ваш возраст не соотвествутет, введите по новой");
//     }
// } console.log(age)

// let student = prompt("Вы студент?")
// if(student == "Да") {
//     console.log(true)
// }
// else { 
//     while(student != "Да") {
//         alert('Пока');
//     }
// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i <= 10; i++) {
//     if (a[i] % 2 == 0){
//         console.log(a[i])
//     }
// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < a.length; i++) {
//     if (i == 10) {
//         break;
//     }
    
//     if (a[i] % 2 == 0) {
//         console.log(a[i] + "- четное.")
//     }
//     else {
//         console.log(a[i] + "- нечетное.")
//     }
// }

if (x == "+"){
    alert (a + b)
}
else if (x == "-"){
    alert (a - b)
}
else if (x == "*"){
    alert (a * b)
}
else if (x == "/"){
    alert (a / b)
}
else {
    alert ("Ошибка операции")
}

= prompt("Какое действие вы хотите провести с ними? | + | - | * | / |")