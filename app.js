






// const myCar = {
//     mark: 'BMW'
// }
//
// console.log(`Кол-во букв в марке: ${myCar.mark.length}`);


// class Car {
//     constructor(speed) {
//         this.speed = speed;
//     }
//
//     viewSpeed() {
//         return `Моя скорость: ${this.speed} км/ч`;
//     }
// }
//
// let audi = new Car(200);
//
// document.querySelector('#car').innerText = audi.viewSpeed();
//
// audi.speed = 300;
//
// document.querySelector('#car2').innerText = audi.viewSpeed();


// let element = {
//     class: 'First',
//     value: 40
// }
//
// let findElement = document.querySelector('.First');
// findElement.value = element.value;
//
// console.log(findElement)


// class Blogger {
//     constructor(firstName, lastName, channelName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.channelName = channelName;
//     }
//
//     sayName(){
//         console.log(`Канал ${this.channelName} [автор канала: ${this.firstName} ${this.lastName}]`);
//     }
// }
//
// let blogger = new Blogger('DKA', "Developer", "LetsCode");
// blogger.sayName();


// let drivers = ['Ivan', 'Sergei', 'Egor'];
//
// for (let i = drivers.length - 1; i >= 0; i--) {
//     console.log(drivers[i])
// }


// let car = {
//     color: 'red',
//     drivers: ['Chuck', 'Norris'],
//     getDriver(driver){
//         console.log('Текущий водитель - ' + this.drivers[driver])
//     },
// }
//
// car.getDriver(0)

// let we = () => 'Мы стрелочная функция';
// console.log(we());


// let color = changeColor;
//
// color();
// color('yellow');
//
// function changeColor(color = 'red'){
//     if(color === 'red'){
//         return ;
//     }
//     console.log(color);
// }


// let car = {
//     maxSpeed: 240
// };
//
// speedChange(car)
//
// function speedChange(speed){
//     console.log("Скорость была: " + car.maxSpeed)
//     speed.maxSpeed = 300;
//     console.log("Скорость стала: " + car.maxSpeed)
// }


// let car = {
//     colour: 'green',
//     maxSpeed: 250,
//     audio: {
//         brand: 'Sony',
//         speakers: 12
//     },
//     cost: 530000
// };
//
// if(car.cost > 1000000){
//     console.log('Автомобиль дорогой');
// }else{
//     console.log('Автомобиль недорогой');
// }


// Конструкция иначе если:
//
// if (car.color == 'red') {
// 	console.log('Автомобиль красный');
// }else if (car.color == 'green') {
// 	console.log('Автомобиль зеленый');
// }else{
// 	console.log('Цвет не определен');
// }
// Оператор отрицания:
//
// if(!true) {s
//   console.log('Истина');
// }
// Тернарный оператор, присвоение значения переменной:
//
// let color = car.color == 'red' ? 'Красный' : 'Зеленый';
// console.log(color);


// let car = {
//     colour: 'green',
//     maxSpeed: 250,
//     audio: {
//         brand: 'Sony',
//         speakers: 12
//     }
// };
//
// let jeep = {
//     colour: 'black',
//     maxSpeed: 110
// }
// car.colour = jeep.colour
// console.log(car.colour)


// car.colour = 'red';
//
// console.log(typeof car);
//
// console.log(car);

// alert('Test alert')


// let a = 2;
// let b = 4;
//
// console.log(a + b);
//
// let age = 2;

// alert('U DO IT');