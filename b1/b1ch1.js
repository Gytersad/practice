const phoneCost = 30;
const accessoryCost = 5;
let moneyLimit = 990;
let phones = 0;

function calculateTax (money) {
    const tax = 0.05;
    money = money + (money * tax);
    console.log(`Цена с налогом ${money} у.е.`)
    return money;
}

function currentBalance (money, phones) {
    console.log(`Куплено телефонов ${phones}`)
    console.log(`На счету осталось ${money} у.е.`)
}

while (moneyLimit > 0) {
    moneyLimit = moneyLimit - calculateTax(phoneCost + accessoryCost);
    phones++;
    currentBalance(moneyLimit, phones);
}