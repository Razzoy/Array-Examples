
//Her oprettes min array
const cars = ['Audi', 'BMW', 'Mazda', 'Subaru', 'Dodge', 'Ford'];

//console logger min array. Her skulle det gerne vise nuværende indhold af arrayet
console.log(cars);

// pop()
// - Denne metode fjerner det sidste element fra en array og retunerer det element tilbage til brugeren.
// - Hvis man bruger pop() på en tom array, retunerer den "undefined".

//her fjerner jeg det sidste element i min array, og console logger det. Her skulle det gerne vise 'Ford'.
console.log(cars.pop());


// push()
// - Denne metode tilføjer specifikke elementer til enden af et array, og retunerer den nye længde på arrayet.

//Jeg opretter en variabel som pusher både Honda og Mitsubishi til arrayet.
const addCars1 = cars.push('Honda', 'Mitsubishi');

//Her kalder jeg variablen til arrayet. Honda skal gerne have taget Ford's plads, efterfulgt af Mitsubishi.
console.log(addCars1);


// shift()
// - Denne metode har samme oførsel som pop(), men hvor den fjerner det første element og retunerer det fra et array.

//Her fjerner jeg ddet første element i min array og console logger det, Her skulle det gerne vise 'Audi'
console.log(cars.shift());


// unshift()
// - Denne metode har samme opførsel som push(), men hvor elementerne bliver tilføjet i starten af arrayet i stedet for.

//Jeg opretter endnu en variabel til næste eksempel.
const addPorsche = cars.unshift('Porsche');

//Jeg kalder variablen addPorsche til mit array, så at Porsche gerne skulle komme først, og have erstattet Audi's plads.
console.log(addPorsche);


// slice()
// - Denne metode er en kopi metode, som retunerer en kopi af en portion fra en array og laver et nyt array med de udvalgte elementer.
// - Man kan definere et startpunkt og slutpunkt på den array man bruger slice() på, til hvis man kun skal bruge bestemte elementer i arrayet.

//her bruges slice metoden til at oprette et ny array der er en snippit af det forrige array.
console.log(cars.slice(2, 4));
// Her skal det nye array gerne display ['Mazda', 'Subaru'], da de er de udvalgte elementer imellem 2 og 4 i det orriginale array.


// forEach()
// - Denne metode gør det muligt at uddele en funktion, en gang, til hvert element i en bestemt array.
// - Hvor de øvrie metoder er generisk, er denne iterativ.
// - forEach() retunerer altid "undefined" og er ikke ´chainable´.

//her bruges forEach metoden til i dette eksempel at oprette en liste, over alle elementer i arrayet
cars.forEach((car) => console.log(car));
//elementerne i arrayet har fået tildelt parameteret 'car', og forEach metoden kalder på alle elementerne og så console logges de for hver element der er.




