const menu = document.getElementById("menu");
const menuButtons = Array.from(document.getElementsByClassName("menu-button"));
const content = document.getElementById("content");

menu.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) {
        return;
    }
    const prevActiveButton = menuButtons.find(button => button.classList.contains("active"));
    if (prevActiveButton) prevActiveButton.classList.remove("active");
    event.target.classList.add("active");

    switch (event.target.id) {
        case "task1":
            task1();
            break;
        case "task2":
            task2(10);
            break;
        case "task3":
            task3();
            break;
        case "task4":
            task4();
            break;
    }
});

function task1() {
    content.innerHTML = "<h1>Завдання 1</h1></br></br>";

    content.insertAdjacentHTML("beforeend", "<h2>Гра “Передбачувач майбутнього”</h2></br>");

    const children = [0, 1, 2, 3, 4];
    const professions = ["Лікарь", "Програміст", "Юрист", "Поліцейський", "Менеджер", "Учитель", "Бізнесмен"];
    //const partnerFemale = ["Альона", "Настя", "Аня", "Оля", "Катерина", "Крістіна"];
    //const partnerMale = ["Богдан", "Максим", "Діма", "Вова", "Андрій", "Влад", "Микита", "Олександр"];
    const countries = ["США", "Канада", "Україна", "Германія", "Франція", "Японія", "Фінляндія", "Італія"];

    let isEntered = false;
    let willGetMarried;
    while (!isEntered) {
        willGetMarried = confirm("Ви збираєтеся укладати шлюб?");
        if (willGetMarried != null) isEntered = true;
    }

    let partnername;
    let numberOfChildren;
    if (willGetMarried) {
        isEntered = false;
        while (!isEntered) {
            partnername = prompt("Яке б ім'я вашого партнера вам хотілося?");
            if (partnername != null && partnername.length > 1) isEntered = true;
        }
        
        isEntered = false;
        while (!isEntered) {
            for (let i = 0; i < children.length; i++) {
                isEntered = confirm(`Виб хотіли мати ${children[i]} дітей?`);
                if (isEntered) {
                    numberOfChildren = children[i];
                    break;
                }
            }
        }
    }

    isEntered = false;
    let profession;
    while (!isEntered) {
        for (let i = 0; i < professions.length; i++) {
            isEntered = confirm(`Виб хотіли мати наступну професію: ${professions[i]}?`);
            if (isEntered) {
                profession = professions[i];
                break;
            }
        }
    }

    isEntered = false;
    let country;
    while (!isEntered) {
        for (let i = 0; i < countries.length; i++) {
            isEntered = confirm(`Виб хотіли жити в наступній країні: ${countries[i]}?`);
            if (isEntered) {
                country = countries[i];
                break;
            }
        }
    }

    if (willGetMarried) {
        alert(`Ви укладете шлюб з ${partnername} та у вас буде ${numberOfChildren} дітей.`);
    }
    alert(`Ви переїдете в країну ${country} на посаду - ${profession}`);
}

function task2(n) {
    content.innerHTML = "<h1>Завдання 2</h1></br></br>";

    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(i+1);
        for (let j = 0; j < arr[i].length; j++) {
            if (j == 0 || j == arr[i].length-1) {
                arr[i][j] = 1;
                continue;
            }
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
        }
        //console.log(arr[i]);
    }

    const blockWidth = arr[arr.length-1][Math.floor(arr[arr.length-1].length/2 + 0.5)].toString().length;
    arr.forEach(row => {
        row.forEach(el => {
            content.insertAdjacentHTML("beforeend", `<span style="display: inline-block; width: ${blockWidth}em">${el}</span>`);
        })
        content.insertAdjacentHTML("beforeend", "</br>");
    });
}

function task3() {
    content.innerHTML = "<h1>Завдання 3</h1></br></br>";

    let bottles = Number(prompt("Введіть початкову кількість пляшок:", 50));

    content.insertAdjacentHTML("beforeend", "<h2>Гра “Скільки лишилось пляшок на стіні”</h2></br>");

    if (!bottles || bottles <= 0) {
        content.insertAdjacentHTML("beforeend", `<p>0 пляшок стоїть на стіні, 0 упало і залишилось жодної!</p></br>`);

    } else {
        while (bottles > 1) {
            content.insertAdjacentHTML("beforeend", `<p>${bottles} пляшок стоїть на стіні, одна упала і залишилось ${bottles -= 1}</p></br>`);
        }
        content.insertAdjacentHTML("beforeend", `<p>${bottles} пляшок стоїть на стіні, одна упала і залишилось жодної!</p></br>`);
    }
    content.insertAdjacentHTML("beforeend", `<button id="playAgaingButton" onclick="task3()">Зіграти ще раз</button>`);
}

function task4() {
    content.innerHTML = "<h1>Завдання 4</h1></br></br>";

    const arr = [
        {value: 100, type: 'USD'},
        {value: 215, type: 'EUR'},
        {value: 7, type: 'EUR'},
        {value: 99, type: 'USD'},
        {value: 354, type: 'USD'},
        {value: 12, type: 'EUR'},
        {value: 77, type: 'USD'},
    ];

    const arr1 = arr.filter(el => el.type == 'USD' && el.value < 100);
    const sum = arr1.reduce((acc, curElement) => acc + curElement.value, 0);

    const arr2 = arr.filter(el => el.type == 'EUR').map(el => {
        return {value: el.value * 2, type: el.type};
    });

    console.log(arr);
    console.log(arr1);
    console.log(`Сума всіх значень value у яких тип ‘USD’ та value менше за 100: ${sum}`);
    console.log(arr2);

    content.insertAdjacentHTML("beforeend", `<p>Сума всіх значень value у яких тип ‘USD’ та value менше за 100: ${sum}</p></br>`);
    content.insertAdjacentHTML("beforeend", `<p>Масив всіх об’єктів з типом ‘EUR’ та для кожного об’єкту
    подвоїти значення value:</p></br>`);
    arr2.forEach(el => {
        content.insertAdjacentHTML("beforeend", `{value: ${el.value}, type: ${el.type}}</br>`);
    });
}
