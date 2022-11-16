// Функционал прототипа электроприбора
function ElectricalAplience(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// Метод включает прибор в розетку
ElectricalAplience.prototype.plugIn = function() {
    console.log(` ${this.name} plugged in!`)
    this.isPlugged = true;
}

// Метод выключает прибор из розетки
ElectricalAplience.prototype.plugOut = function() {
    console.log(` ${this.name} is unplugged!`);
    this.isPlugged = false;
};

// Конструктор лампы
function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
}

Lamp.prototype = new ElectricalAplience();

// Конструктор компьютера
function Computer(name, type, power, brand, functopnality) {
    this.name = name;
    this.type = type;
    this.power = power;
    this.brand = brand;
    this.functopnality = functopnality;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalAplience();

// Экземпляр настольной лампы
const tableLamp = new Lamp('Table lamp', 'Xiaomi', 5, 'LED');

// Экземпляр компьютера
const homePC = new Computer('Home PC', 'Intel', 540, 'Desktop PC', 'home computer');

//Отключить лампу из розетки
tableLamp.plugOut();


// Включить компьютер в розетку
homePC.plugIn();