// console.log("\n=== Деструктуризация массивов ===");
// const colors = ["red" , "green" , "blue"];
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1 , color2);
// const [firstColor , secondColor , thirdColor] = colors ; 
// console.log(firstColor , secondColor , thirdColor);
// const [primary ,  , tertiary] = colors ; 
// console.log(primary , tertiary) ; 
// const [c1,c2,c3, c4 = "yellow"] = colors ; 
// console.log(c4); 
// console.log("деструктуризация объектов");
// const user ={
//     name : "алиса" ,
//     age : 25 ,
//     city : "москва" ,
// };
// const {name , age , city} = user ; 
// console.log(name , age , city);
// const {name : fullName, age : years} = user ;
// console.log(fullName , years) ; 
// const {name : personName , country = "Россия"} = user ; 
// console.log(personName , country);
// console.log("деструктуризация в параметрах");
// const user ={
//     name : "алиса" ,
//     age : 25 ,
//     city : "москва" ,
// };
// function printUser({name , age , city}){
//     console.log(`${name}`);
//     console.log(`${age}`);
//     console.log(`${city}`);
// }
// printUser(user);
// console.log();
// printUser(user);
// console.log("Spread для массивов");
// const arr1 = [1,2,3] ;
// const arr2 = [4,5,6]; 
// const combined = [...arr1, ...arr2];
// console.log("объедиенный массив: " , combined) ; 
// const copy = [...arr1];
// console.log("копия массива:" , copy) ; 
// const extended = [0 , ...arr1 , 7,8] ; 
// console.log("расширенный массив" , extended) ; 
// console.log("Spread для объектов")
// const person ={
//     name : "иван" , 
//     age : 30, 
// };
// const address = {
//     city: "санкт-петербург" , 
//     street : "невский проспект" , 
// };
// const fullInfo = {...person , ...address} ; 
// console.log("полная инфмормация:" , fullInfo);
// const personCopy ={...person};
// console.log("копия объекта" , personCopy) ;
// const updated = {...person , age: 31 , occupation: "Developer"};
// console.log("обновленный обьект: " , updated);
// console.log("Rest оператор");
// function sum(...numbers){
//     return numbers.reduce((total , num) => total +num , 0) ;
// }
// console.log("сумма 1,2,3" , sum(1,2,3));
// console.log("сумма 1,2,3,4,5"  , sum(1,2,3,4,5));
// const numbers = [10,20,30,40,50] ;
// const [first , second , ...rest] = numbers;
// console.log("первое число" , first) ; 
// console.log("второе число" , second) ;
// console.log("остальные числа" , rest);
//ЗАДАНИЕ 1 
const arr1 = [1,2,3] ;
const arr2 = [4,5,6]; 
const arr3 = spread(arr1,arr2);
function findMax(...numbers){
    return max(numbers)
};