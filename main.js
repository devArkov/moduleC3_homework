// Родительский класс электроприбора
class ElectricalAplience {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    // Метод Показывает потребление энергии прибором
    getPowerInfo = () => {
        console.log(`Прибор '${this.name}' потребляет ${this.power} Ватт`);
    }

    // Метод проверяет включен ли прирбор в розетку
    plugCheck = () => {
        if (this.isPlugged == true) {
            console.log(`${this.name} включен в розетку`);
        } else {
            console.log(`${this.name} выключен из розетки`);
        }
    }

    // метод включает  прирбор в розетку
    plugIn = ()  => {
        console.log(`'${this.name}' включен в розетку!`);
        this.isPlugged = true;
    }

    // метод определяет выключает прирбор из розетки
    plugOut = () => {
        console.log(`'${this.name}' выключен из розетки!`);
        this.isPlugged = false;
    }
}

// Класс лампы наследует класс электроприбора
class Lamp extends ElectricalAplience {
    constructor(name, brand, power, bulbType) {
        super(name, power);
        this.brand = brand;
        this.bulbType = bulbType;
        this.isPlugged = false;
    }
}

// Класс компьютера наследует класс электроприбора
class Computer extends ElectricalAplience {
    constructor(name, brand, power, type, functiopnality) {
        super(name, power);
        this.brand = brand;
        this.power = power;
        this.type = type;
        this.functiopnality = functiopnality;
        this.isPlugged = false;
    }
}

// Класс чайника наследует класс электроприбора
class Kettle extends ElectricalAplience {
    constructor(name, brand, power, bulbType, controls, capacity) {
        super(name, power);
        this.brand = brand;
        this.power = power;
        this.bulbType = bulbType;
        this.console = controls;
        this.capacity = capacity;
        this.isPlugged = true;
    }

    // Метод показывает бренд экземпляра чайника
    showBrand = () => {
        console.log(`The brand of '${this.name}' is "${this.brand}".`);
    }
}

// Экземпляр настольной лампы
const tableLamp = new Lamp('Table lamp', 'Xiaomi', 5, 'LED');

// Экземпляр компьютера
const homePC = new Computer('Home PC', 'Intel', 540, 'Desktop PC', 'home computer');

// Экземпляр чайника
const officeKettle = new Kettle('Office kettle', 'Redmond', 2000, 'Euro', 'sensor', 1.8);


// Проверка включена ли лампа в врозетку и включает, если нет
if (tableLamp.plugCheck === true) {
    tableLamp.plugOut();
} else {
    tableLamp.plugIn;
}
tableLamp.plugCheck();

//Отключить лампу из розетки
tableLamp.plugOut();

// Включить компьютер в розетку
homePC.plugIn();

// Включить чайник в розетку
officeKettle.plugIn();

// Выключить чайник из розетки
officeKettle.plugOut();

officeKettle.plugCheck();

// Если чайник - электроприбор, то выводится его потребление энергии
if ((officeKettle instanceof ElectricalAplience)) {
    officeKettle.getPowerInfo();
}
// Показывает бренд чайника
officeKettle.showBrand();