// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini


// let a;
// a = 5 % 2 ;
// alert("qoldiq =" + a)

// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

// let random ;
// random= Math.floor(Math.random() * 10)
// alert(random)


// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!

// let a;
// a = Math.floor(12.510)
// alert(a)


// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 
// let text = "MARS IT SCHOOL"
// let text2 = text.replace(/ /g, "")
// console.log("MARS IT SCHOOL = " + text.length );




// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"
// let a = "Mars it school"
//  for (let i = 0; i < 10; i++) {
//     console.log(a);  
    
//  }

     



// 6-savol Array methods



// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering
// let harflar = ["a","b","d","d","e","f","g","i","i","j","l","l","m","n","o","p","q","r","s","t","u","v","x","u","z","'o","sh","ch"]
// const myname = [harflar[0],harflar[10],harflar[7]].join('')
// console.log(myname);


// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering
// let yosh = prompt("yoshingizni kiriting")
// if (yosh > 18) {
//     console.log( "siz balogat yoshiga yetgansiz");  
// }else{
//     console.log( "siz hali balogat yoshiga yetmagansiz");
// }


// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

// let name1 = prompt("ismingizni kiriting");
// alert(name1.split('').reverse().join(''))


// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов
// let array = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0;  i< array.length; i++) {
//     let check = array[i] % 2;
//     if (check === 0) {
//         console.log("Bu juft son" +  array[i]);
        
//     }else{
//         console.log("Bu toq son" + array[i]);
//     }
// }

// Javob :Kodini yozib bering

