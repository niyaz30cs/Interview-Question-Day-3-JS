// function show(){
//     let name="NIYAZ ALAM";
//     function display(){
//         console.log(name);
//     }
//     display();
// }
// show();


//Map function-----

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let arr2=arr.map((num)=>{
//     return num*10;
// });
// console.log(arr2);

//filter function----

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let arr2=arr.filter((num)=>{
//     return num%2==0;
// });
// console.log(arr2);


// reduce function---

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let arr2=arr.reduce((pre,cur)=>{
//     return pre+cur;
// });

// console.log(arr2);

// example of object--

// let person={
//     name:"NIYAZ",
//     age:21,
//     Batch:"EA22"
// }
// console.log(person);

// function display(){
//     let game=document.getElementById("game");
//     game.innerText="Welcome to PrepBytes";
//     game.style.color="green";
//     game.style.fontSize="50px";
// }
    
// inheritance----

// let parent={
//     name:"XYZ",
//     age:22,
//     id:101
// }

// let child1=Object.create(parent);

// child1.surname="Sonu";

// console.log(`My name is ${child1.name} and ${child1.age} and surname is${child1.surname}`);

// prototype chain---

// const plusGfather={
//     function1:function(){
//         console.log("I am PlusGfather....!!");
//     }
// }


// let Gfather=Object.create(plusGfather);

// Gfather.function2=function(){
//         console.log("I am Gfather...!!");
//     }


// let father=Object.create(Gfather);

// father.function3=function(){
//         console.log("I am father...!!");
//     }

// let child=Object.create(father);

// child.function1();
// child.function2()
// child.function3();


// prototype example--

// function Person () {
//     this.name="NIYAZ",
//     this.age=22
// }

// const person=new Person();
// console.log(Person.prototype);

// create a clock code

function clock(){
    let timer=document.getElementById("timer");
    let time=new Date().toLocaleTimeString();
    timer.innerHTML=time;
    timer.style.color="blue";
    timer.style.fontSize="50px";
    timer.style.fontWeight="bolder";
    timer.style.display="flex";
    timer.style.justifyContent="center";
}

setInterval(clock(),1000);


// function constructor--

// function Car(name,year,price){
//     this.name=name;
//     this.year=year;
//     this.price=price;
// }

// let value=new Car("audi",2001,"2.5cr");

// console.log(value);


// prototype function--

// function Car(name,year,price){
//     this.name=name;
//     this.year=year;
//     this.price=price;
// }

// Car.prototype.color="black";

// let value=new Car("mercedez",2005,"5.5cr");
// console.log(value,value.color);


// __proto__example

// function Car(name,year,price){
//     this.name=name;
//     this.year=year;
//     this.price=price;
// }

// Car.__proto__.color="yellow";

// let value=new.Car("BMW",2006,"80lakh");
// console.log(value,value.color);



