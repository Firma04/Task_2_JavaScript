'use strict';

let money = prompt("Ваш бюджет на месяц?: ", " "),
    time = prompt("Введите дату в формате YYYY-MM-DD: ", " ");

let appData = {
    cash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

/*<!------------------------Использование цикла do while #1--------------------------!>*/
let i = 0;
    do {
        let a = prompt("Введите обязательную статью расходов в этом месяце ", " "),
            b = prompt("Во сколько обойдется ?", " ");

        if(typeof(a)=== "string" && (typeof(a) != null && (typeof(b) != null && a !="" && b !="" && a.length < 50))){
            console.log("done");
        appData.expenses[a] = b;
        } else {
            console.log("Повтор"); 
            i--;
        }
        i++;
    } while(i < 2);

/*<!------------------------Использование цикла While #1--------------------------!>
let i = 0;
while(i < 2){
    let a = prompt("Введите обязательную статью расходов в этом месяце ", " "),
        b = prompt("Во сколько обойдется ?", " ");

    if(typeof(a)=== "string" && (typeof(a) != null && (typeof(b) != null && a !="" && b !="" && a.length < 50))){
        console.log("done");
    appData.expenses[a] = b;
    } else {
        console.log("Повтор");
        i--;
    }
} 
*/
/*<!------------------------Использование цикла for  #1----------------------!>
for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце ", " "),
        b = prompt("Во сколько обойдется ?", " ");

    if(typeof(a)=== "string" && (typeof(a) != null && (typeof(b) != null && a !="" && b !="" && a.length < 50))){
        console.log("done");
    appData.expenses[a] = b;
    } else {
        console.log("Повтор");
        i--;
    }
}
*/
appData.moneyEveryDay = appData.cash / 30;

alert("Ежедневный бютжет: " + appData.moneyEveryDay + "USD");

if (appData.moneyEveryDay > 1000){
    console.log("Доход слишком большой: " + appData.moneyEveryDay + " USD");
} else if (appData.moneyEveryDay > 400 && appData.moneyEveryDay < 1000){
    console.log("Доход достаточный: " + appData.moneyEveryDay + " USD");
} else if (appData.moneyEveryDay < 400){
    console.log("Нужно улучшать доход: " + appData.moneyEveryDay + " USD");
} else {
    console.log("Ошибка: ");
}