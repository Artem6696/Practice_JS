let num = 50;

if (num < 49 ) {
    console.log("Не верно")
} else if (num > 100) {  //если предыдущие условие не выполнилось
    console.log("много")          // мы перейдем к следующему
} else {             //если наша N будет не меньше  49 и
    console.log("Верно")            // не больше 100
};
//Тернарный оператор
(num == 50) ? console.log("верно") : console.log("неверно");


switch (num) {
    case num < 49:
        console.log("неверно");
        break;
    case num > 100:
        console.log("много");
        break;
    case num > 80:
        console.log("многоо");
        break;
    case 50:
        console.log("Верно");
        break;
    default:
        console.log("че каго");
}


let value = 50;
while (value < 55) {          // пока num меньше чем 55
    console.log(value);      // мы будем выводить num
    value++;             // каждый раз когда она будет повторяться она будет добавлять +1
}