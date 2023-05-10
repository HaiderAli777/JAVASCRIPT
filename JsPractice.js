/*const printForecast = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`....${arr[i]}degree in ${i + 1} Day...`);
  }
  //if we wanna do it in single line then
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `....${arr[i]}degree in ${i + 1} Day...`;
  }
  console.log(str);
};
let arr = [10, 3, 4, 3, 1];
printForecast(arr);
//Part 9 Chalange and practice
*/
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const { players: Allplayers } = game;
const [player1, player2] = Allplayers;
const [GKp1, ...p1FielDer] = player1;
const [GKp2, ...p2FielDer] = player2;
const player1Final = [...player1, "Hello", "Peelo", "Neelo"];
const doublearray = [...player1, ...player2];
const {
  odds: { team1: t1, x: draw, team2: t2 },
} = game;
console.log(t1, t2, draw);
console.log(player1, player2);
console.log(Allplayers);
console.log(GKp1, p1FielDer);
console.log(GKp2, p2FielDer);
console.log(doublearray);
function printfgoals(...arr) {
  console.log(`It scored ${arr.length}`);
}
printfgoals("h", "i", "j", "k", "l");
printfgoals("h", "i", "j");
printfgoals(...game.scored);
t1 > t2 && console.log("Team 1 is morelikely to win");
t2 > t1 && console.log("Team 2 is morelikely to win");
*/
//practice
/*
const arr = [1, 2, 3, 4, "Hello", "hy"];

for (const item of arr.entries()) {
  console.log(`The ${item[0] + 1}:${item[0 + 1]}`);
}
//altering Way
for (const [index, value] of arr.entries()) {
  console.log(`The ${index + 1}:${value}`);
}
*/
//challenge
/*
"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
for (const [index, h] of game.scored.entries()) {
  console.log(`${index + 1} : ${h}`);
}
let aver = 0;
for (const index of Object.values(game.odds)) {
  aver += index;
}
console.log(aver / 3);
for (const index of Object.keys(game.odds)) {
  console.log(`Odd of ${game[index] ?? index} is ${game.odds[index]}`);
}*/
/*
const scorers = {};
let count = 0;
for (const player of game.scored) {
  if (count == 0) {
    count++;
    continue;
  }
  scorers[player] = 1;
}
console.log(scorers);
*/
//Set
/*
const h = new Set(["a", "b", "c"]);
const arr = ["A", "B", "C", "D", "A", "B"];
const UniqueArray = new Set(arr);
for (const m of UniqueArray) {
  console.log(m);
}
console.log(h);
console.log(UniqueArray);
UniqueArray.add("E");
UniqueArray.delete("E");
console.log(UniqueArray);
UniqueArray.clear();
console.log(UniqueArray);
*/
/*
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
const arr = gameEvents.values();
const narr = [...new Set(arr)];
console.log(Event);
console.log(narr);
gameEvents.delete(64);
console.log(gameEvents);
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? "First Half" : "Second Half";
  console.log(`${half} ${key} : ${value}`);
}
console.log(gameEvents.size);
*/
/*
const s = "i am haider am";
const r = s.replaceAll("am", "to");
console.log(r);
*/
//Practice
/*
const s = function (n, i) {
  let str = "";
  const d = n.split("_");
  for (const m of d) {
    str = str + (m[0].toUpperCase() + m.slice(1));
  }
  console.log(`${str.trim().padEnd(20)}${"*".repeat(i)}`);
};
const B = ["Hello_Ali", "Qasim_Ali", "Junaid_Ali"];
let i = 1;
for (const h of B) {
  s(h, i);
  i++;
}
*/
//practice
/*
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
//const f = flights.split("+");
for (const f of flights.split("+")) {
  const [D, F, T, H] = f.split(";");
  console.log(
    `${D.startsWith("_Delayed") ? "@" : ""}${D.replaceAll(
      "_",
      " "
    )} from ${F.slice(0, 3).toUpperCase()} to ${T.slice(
      0,
      3
    ).toUpperCase()} (${H.replace(":", "h")})`.padStart(45)
  );
}
*/
//Part 10
//Start  Practice
//default Parameter
/*
const s = function (a = 3, b = 2, c = 1) {
  const l = {
    a,
    b,
    c,
  };
  console.log(l);
};
s(88, 33, 11);
s(1, undefined, 8);
s();
*/
//High Order Fuction
/*
const rep = function (str) {
  return str.replaceAll(" ", "").toUpperCase();
};
//Here We Use High Order Function
const WhenWeUseThisFunction = function (string, Functionname) {
  console.log(`The String Befor Used For Function :: ${string}`);
  console.log(`The String After Used For Function :: ${Functionname(string)}`);
};
WhenWeUseThisFunction("Hell I am Haider", rep);
*/
//Function Returning Function
/*
const f = gree => {
  return name => {
    console.log(`${gree}:${name}`);
  };
};
f("Hello")("Ali");
//Also We Assign it
const n = f("Hello");
n("Qasim");
n("Rauf");
*/
//Call Function Basically used for using a function for another obj but thier prperty name should be changed
//Call Method And Apply Method is not used
/*
const obj = {
  name: "Haider",
  citynameArr: "Karachi",
  booking: [],
  flight(pass, sc) {
    this.booking.push(
      console.log(
        `The ${this.name} flights from ${this.citynameArr} to ${pass} ${sc}`
      )
    );
  },
};
obj.flight(112, "Lahore");
//now make a copy of function for other object using call function
const copyfunction = obj.flight;
//make another function
const obj1 = {
  name: "Qasim",
  citynameArr: "Islamabad",
  booking: [],
};
//another method for assigning value
const ar = [114, "Karachi"];
copyfunction.call(obj1, ...ar); //so call function basically used the function once and call it with referencing the obj by giving the name
copyfunction.call(obj1, 115, "Quetta");
*/
/*
const obj1 = {
  name: "Haider",
  citynameArr: "Karachi",
  booking: [],
};
const obj2 = {
  name: "Haider",
  citynameArr: "Karachi",
  booking: [],
};
const obj3 = {
  name: "Haider",
  citynameArr: "Karachi",
  booking: [],
  flight(pass, sc) {
    this.booking.push(
      `The ${this.name} flights from ${this.citynameArr} to ${pass} ${sc}`
    );
  },
};
const copy = obj3.flight;
const obj3f = copy.bind(obj2);
console.log(obj2);
obj3f(113, "Qalash");
//another way
const obj1f = copy.bind(obj1, 119);
//here constant the first orgament and now we just pass the second one
obj1f("mama");
obj1f("mama");
//basically it just like function return
console.log(obj1);
*/
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  diplayresult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else {
      console.log(`The answer is ${this.answers.join(",")}`);
    }
  },
  registerNewAnswer() {
    const number = Number(
      prompt(`${this.question}\n${this.options.join("\n")}`)
    );
    if (number < this.answers.length) {
      this.answers[number]++;
    } else {
      console.log("number is out of range");
    }
    this.diplayresult();
  },
};
const button = document.querySelector(".bt");
button.addEventListener("click", poll.registerNewAnswer.bind(poll));
poll.diplayresult.call({ answers: [1, 2, 3] }, "string"); //in previous we pass the object that alredy make but here we make object in the call function
*/
//closure example
/*
var r;
const f = function () {
  const s = 10;
  r = function () {
    console.log(s);
  };
};
const g = function () {
  const s = 50;
  r = function () {
    console.log(s);
  };
};
const s = function () {
  const s = 50; //here also we are using closure
  setTimeout(function () {
    console.log(1322);
  }, 2000);
};

//as if we know the result then we can say that always child function grap the parent invironment variable
g();
r();
f();
r();
s();
*/
//coding chalange
/*
(function () {
  const bt = document.querySelector(".h");
  bt.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    bt.style.color = "blue";
  });
})();
*/
//part 11
//Method array
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [11, 12, 13];
const c = console.log.bind(console);
c(arr.slice(1, -1)); //it take the given part
c(arr.splice(2, 2)); //it delete the element in
c(arr.reverse()); //it reverse the original array;
//c(arr2.fill(1, 1, 2)); //it fill the empty array wwith it
c(arr.concat(arr2));
//for joining the arr element
c(arr.join(" "));
//here .at() is used to find the value by giving indecx
c(arr2.at(arr2.length - 1));
c(arr2.at(0));
c(arr.at(-1));
//for using fill function
const m = new Array(4);
c(m.fill(1));
*/
//for each function
/*
const c = console.log.bind(console);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(function (
  value,
  index,
  array
  //for each function have call back function and for each function passes the argument1->value arg2->index arr3->array that we loop
) {
  if (value > 1) {
    c(`The value${value} are greater than 5 with there index${index}`);
    c(array);
  }
});
*/
//for each for set and map
//foreach for set
//LECTURE 6
//
/*
const s = new Set([1, 2, 3, 4, 5, 6, 7]);
s.forEach(function (value, _, m) {
  console.log(`value:${value}:just give that its type:${m}`);
});
//for each for map
const m = new Map();
m.set(1, "Haider").set(2, "Rauf").set(3, "Qasim").set(4, "Ali");
console.log(m);
console.log(m.get(1));
m.forEach(function (value, key, map) {
  console.log(`The map has value:${value} with its key:${key}`);
  console.log(map);
});
*/
//how to create an element in Js And  insert in parent element
/*
const target = document.querySelector(".pa");
const s = [12, -1, 23, 45, -1, -4];
target.innerHTML = "";
s.forEach(function (value, index) {
  const con = value > 0 ? "Deposited" : "Widhrawn";
  const str = `<div style="color: black; padding: 1rem; background-color: rgb(92, 58, 18)">${index} : Hello My Amount is ${con} </div>`;
  target.insertAdjacentHTML("afterbegin", str);
});
*/
//practice
/*
const checkdog = function (arr1, arr2) {
  let ju = arr1.slice(1, arr1.length - 2);
  // const combine = [...ju, ...arr2]; //we also use concat function
  const full = ju.concat(arr1);
  full.forEach(function (value, index) {
    console.log(
      value >= 2
        ? `The Dog number ${index} is Adult`
        : `The Dog number ${index} is Puppy`
    );
  });
};
const j = [1, 5, 6, 4, 1];
const k = [4, 6, 1, 3, 4];
checkdog(j, k);
*/
/*
const obj = {
  account1: {
    name: "Haider Ali",
  },
  account2: {
    name: "Qasim Ali",
  },
  account3: {
    name: "Juniad Ali",
  },
  account4: {
    name: "Hariz Sohail",
  },
  account5: {
    name: "Mider Ali",
  },
};

const acounts = ["account1", "account2", "account3", "account4", "account5"];
const intialize = function (v) {
  //one way to do this
  /*
  const name = obj[v].name.toLowerCase().split(" ");
  const inital = name.map(n => n[0]);
  const j = inital.join("");
  obj[v].world = j;
  */
//second way to do this in short way
/*
  obj[v].word = obj[v].name //important thing is that we can access object in objects by []operator
    .toLowerCase()
    .split(" ")
    .map(value => value[0])
    .join("");
};

acounts.forEach(function (val) {
  intialize(val);
});
console.log(acounts);
console.log(obj);
*/
//filter method
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 1, -1, -33, -12];
const deposit = arr.filter(value => value > 0);
console.log(deposit);
const widhdraw = arr.filter(function (value, index, arr) {
  console.log(index, arr);
  return value < 0;
});
console.log(widhdraw);
*/
//here we Use Reduce Method for sum
/*
const arr = [12, 14, 15, 16, -111, 333, 112, 324, 12, 545, 454, 3];
//for adding
/*
const al = arr.reduce(function (acc, value) {
  console.log(`The value :${acc}`);
  return acc + value;
}, 0);
console.log(al);*/
//for find maximum
/*
arr.reduce(function (count, value, index, arr) {
  if (count > value) {
    return count;
  } else {
    return value;
  }
}, arr[0]);
*/
//
/*
const calAgeAverage = function (arr) {
  const humanage = arr.map(function (value) {
    if (value <= 2) {
      return 2 * value;
    } else {
      return 16 + value * 4;
    }
  });
  const adult = humanage.filter(function (value) {
    if (value >= 18) {
      return value;
    }
  });
  const aver =
    adult.reduce(function (acc, value) {
      return acc + value;
    }, 0) / adult.length;
  console.log(aver);
};
const a = [5, 2, 4, 1, 15, 8, 3];
calAgeAverage(a);
*/
/*
const btn = document.querySelectorAll(".bt"); //it return array
const mod = document.querySelector(".h");
btn.forEach(function (value, i) {
  btn[i].addEventListener("click", function () {
    mod.classList.remove("hidden");
    console.log(i, value);
  });
});
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    mod.classList.add("hidden");
  }
});
*/
//
/*
const aver = function (arr) {
  const humanAv = arr
    .map(value => (value <= 2 ? value * 2 : 16 + value * 4))
    .filter(value => value >= 18)
    .reduce((acc, val, i, arrA) => acc + val / arrA.length, 0);
  console.log(humanAv);
}; //HERE WE NOTICE THAT IF WE FILTER SOMETHNG THEN AFTER IT WE USE REDUCE THEN ARRAY OF REDUCE HAS BEEN USED
aver([5, 2, 4, 1, 15, 8, 3]);
*/
/*
const ac1 = {
  name: "haider",
};
const ac2 = {
  name: "har",
};
const ac3 = {
  name: "haer",
};
const arr = [ac1, ac2, ac3]; //yes for sure its works we does not need to use with string
const a = [1, 2, 3, 4, 5, 6, 7];
const max = arr.find(function (value) {
  return value.name === "haider";
});
console.log(max);
*/
//Game Code
/*
let number = Math.trunc(Math.random() * 10);
const target = document.querySelector(".inp");
const bu = document.querySelector(".check");
const head = document.querySelector(".h");
const but = document.querySelector(".c");
const hel = document.querySelector(".di");
fun = function () {
  const sample = number;
  const val = Number(target.value);
  console.log(sample, val);
  console.log(val);

  if (val < sample) {
    head.textContent = "Your Enter Value Is Lesser Than Answer";
  }
  if (val === sample) {
    head.textContent = "Congragulation !! Your Answer Is Correct";
    hel.style.backgroundColor = "blue";
  }
  if (val > sample) {
    head.textContent = "Your Enter Value Is greater Than Answer";
  }
};
const res = function () {
  number = Math.trunc(Math.random() * 10);
  target.value = 0;
  head.textContent = "The Is Nothing Here";
  hel.style.backgroundColor = "black";
};
bu.addEventListener("click", fun);
but.addEventListener("click", res);
*/
//find index method basically it provide index by satisfying the consdion
/*
const arr = [1, 2, 3, 4, 10, 7, 8, 5];
//n
const index = arr.findIndex(function (value) {
  return value > 5;
});
console.log(index);
*/
//some and every and include method it provide true and false result
/*
const arr = [1, 2, 3, 4, 10, 7, 8, 5];
//basical assignment operator
let n = arr.includes(1);
console.log(n);
//It is function that if any one element in array satisfied then it provide true
n = arr.some(function (val) {
  return val > 5;
});
console.log(n);
//It is function that if all element in array satisfied then it provide true
n = arr.every(function (val) {
  return val > 0;
});
console.log(n);
*/
// flat and (flatmap is the mixture of flat and map function we did in copy)
//it remove the nested array and in depth
/*
const arr = [1, [1, 3, 4], 122];
const a = arr.flat(1); //as there are more nesting so we increse the 1 to level of nesting
console.log(arr);
*/
//Sorted Array
//As sort Array function work properly on alphabets
/*
const a = ["Hello", "My", "Saleh", "Qasim"];
a.sort();
//It mutate the original array
console.log(a);
//it does not work on integars so we have to make a algorithm
const f = [1, 22, 4, 6, 2, 8, 9, 12, 6];
//
f.sort(function (a, b) {
  console.log(a, b);
  return a - b;
});
console.log(f);
/*
f.sort(function (a, b) {
  console.log(a, b);
  return b - a;
});
*/
/*
const initialize = function (teee) {
  const exp = ["a", "the", "is"];
  const s = teee
    .toLowerCase()
    .split(" ")
    .map(function (val) {
      let check = exp.some(v => v === val);
      if (check) {
        return val;
      } else {
        return val[0].toUpperCase() + val.slice(1);
      }
    })
    .join(" ");
  console.log(s);
};
initialize("this is a phone number");
*/
//here we also do reduce method
/*
const s = [1, 23, 12, 1212, 212, 12, 21, 2121, 212, -121, -212];
const m = [1, 23, 12, 1212, 212, 12, 21, 2121, 212, -121, -212];
const redu = s.reduce(
  function (red, value) {
    value > 0 ? (red.depo += value) : (red.with += value); //here we used accomulator as object name and used with prperty and give to variable
    return red;
  },
  { depo: 0, with: 0 }
);
console.log(redu);
//for destructing objects prperty name should be same
const { depos, withs } = m.reduce(
  function (red, value) {
    value > 0 ? (red.depos += value) : (red.withs += value); //here we used accomulator as object name and used with prperty and give to variable
    return red;
  },
  { depos: 0, withs: 0 }
);
console.log(depos, withs);
*/
//
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
dogs.forEach(function (val) {
  val.Foodrecommended = Math.trunc(val.weight ** 0.75 * 28);
});
const h = dogs.find(function (val) {
  return val.owners.includes("Sarah");
});
console.log(h);
console.log(
  h.curFood < h.Foodrecommended ? "it eat too little" : "it eat to  much"
);
console.log(1);
const l = dogs
  .filter(function (vql) {
    return vql.curFood < vql.Foodrecommended; //he return objec
  })
  .map(val => val.owners)
  .flat()
  .join(" and ");
const g = [];
dogs.forEach(function (vql) {
  if (vql.curFood > vql.Foodrecommended) {
    g.push(vql.owners);
  }
});
console.log(l, g.join(" and "));
console.log(
  dogs.filter(function (val) {
    return val.curFood === val.Foodrecommended;
  })
);
//sort the object by its foo
const Copy = dogs.slice();
Copy.sort(function (a, b) {
  //a and b are now objects
  return a.curFood - b.curFood;
});
console.log(Copy);
*/
//number
//how to convert number
//two ways
/*
console.log(Number("123"));
console.log(+"123");
//parse
console.log(Number.parseFloat("3.5312hellio"));
console.log(Number.parseInt("3.5312hellio"));
console.log(Number.isFinite(3)); //is best way to check integar
console.log(Number.isInteger(3));
console.log(Number.isNaN(2));
//Math function
console.log(Math.round(2.3));
console.log(Math.ceil(2.3));
console.log(Math.floor(2.3));
console.log(Math.max(2, 3, 23, 21, 212, 12, 2, 1212));
console.log(Math.min(2, 3, 23, 21, 212, 12, 2, 1212));
console.log(12_12212121_121212);
const ch = function (a, b) {
  return Math.round(Math.random() * (a - b) + 1 + a);
};
console.log(ch(12, 5));
//
*/
//Dates
/*
const s = new Date();
console.log(s);
console.log(s.getDate());
console.log(s.getDay());
console.log(s.getFullYear());
console.log(s.getHours());
console.log(s.getMilliseconds());
console.log(s.getMinutes());
console.log(s.getMonth());
console.log(s.getSeconds());
console.log(s.getTime());
//to check for future inthis day waht happn
s.setFullYear(2040);
console.log(s);
*/
//We can use Date and time Standardly
//document.location.reload();
/*
const options = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  weekday: "long",
  second: "numeric",
};
const date = new Date();
const tar = document.querySelector(".h");
const tar1 = document.querySelector(".h2");
const l = Intl.DateTimeFormat(navigator.language, options).format(date);

tar.textContent = l;
const option = {
  style: "currency",
  currency: "PKR",
};
//We can use Date and time Standardly
const num = 2222323454544;
const nu = Intl.NumberFormat(navigator.language, option).format(num);
console.log(nu);
tar1.textContent = nu;
*/

//Make A Clock
/*
const o = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
let t = 60 * 2;
const s = function () {
  const min = Math.trunc(t / 60);
  const sec = t % 60;
  tar.textContent = `${min}:${sec}`;
  if (t === 115) {
    clearInterval(m);
  }
  t--;
};
const tar = document.querySelector(".h");
s();
const m = setInterval(s, 1000);
*/
//OOP Section
//make constructor function that make an object
/*
const Person = function (name, last, birth) {
  this.name = name; //bascally here this points to the calling obj
  this.lastname = last;
  this.birth = birth;
};
const haider = new Person("haider", "ali", 32);
const hamza = new Person("haider", "ali", 31);
console.log(haider);
console.log(haider instanceof Person); //it mean that is the haider object made by person
//if we wanna make some prpertis or function that must not be a permamnent prperty but used when needed every object has acces in it
//for that
Person.prototype.calculateAge = function () {
  return this.birth * 1;
};
//to make any name property
Person.prototype.class = 12;
console.log(haider.calculateAge());
console.log(hamza.calculateAge());
console.log(haider.hasOwnProperty("class"));
console.log(haider.hasOwnProperty("class")); //it shows that it has not its property it just a property of prototype that it linked ti
*/
//Coding Challenge
/*
const Car = function (speed) {
  this.speed = speed;
};
const BMW = new Car(150);
const Ferari = new Car(95);
Car.prototype.Accelerate = function () {
  console.log((this.speed += 10));
};
Car.prototype.Break = function () {
  console.log((this.speed -= 5));
};
BMW.Accelerate();
Ferari.Accelerate();
BMW.Break();
Ferari.Break();
*/
//In This Example We Learn How To Use Setter And Getter
/*
class Person {
  constructor(name, lastname, bist) {
    this.name = name;
    this.last = lastname;
  }
  //this are added in prototype
  calA = function () //they used just as variale in main
  {
    console.log("Hello");
  };
  set SetAge(bist) {
    if (bist.includes(" ")) {
      this.name = bist;
      console.log("Now I am Done");
    } else {
      alert("Your Previous Name Is not Changed");
    }
  }
  get CurrentAge() {
    return 2037 - this.Age;
  }
}
const Haider = new Person("Qasim", "Ali", 19);
Haider.SetAge = "Haider";
Haider.CurrentAge; //basicallt set and get is just used ass variable when called
console.log(Haider);
*/
//sTATIC kEWWORD
/*
class hello {
  constructor(stat, last) {
    this.stat = stat;
    this.last = last;
  }
  static hel() {
    console.log("Hello My name is Haider");
    console.log(this);
  }
}
const haider = new hello("Haider", "Ali");
//console.log(haider.hel());
console.log(hello.hel());
console.log(haider);
*/
//oject.create
/*
const IamProto = {
  //zaat, //here when we declare it then it is on prtotyoe
  getData(name, last, birth) {
    this.name = name;
    this.birth = birth;
    this.lastname = last;
    this.zaat = name;
  },
  hello() {
    console.log("Hello My name Is Haider");
  },
  calAge() {
    return 2023 - this.birth;
  }, //all the things that we put in the object that we linked it by Object.create() is become meember to prototype
};
//here we see it that all the method that we write in the object is considered in prototyoe even zakat but through this but throuhg another that we pass through this keyword
const haider = Object.create(IamProto);
haider.getData("Haider", "Ali", 28);
console.log(haider.calAge());
haider.hello();
haider.class = "12th Class";
haider.number = 1;
console.log(haider);
*/
//Here We Do Inheritence By Constructor Function
/*
const Parent = function (First, Last, Class, Age) {
  this.name = First;
  this.Last = Last;
  this.class = Class;
  this.Age = Age;
};
Parent.prototype.calAge = function () {
  console.log(2037 - this.Age);
};

const Child = function (first, last, clas, Age) {
  //here we make inheritence
  Parent.call(this, first, last, clas, Age); //here we use call function for this keyword so that valued stored in calling object
};
Child.prototype = Object.create(Parent.prototype); //after creating child first we have to link it
const Haider = new Child("Haider", "Ali", 19, 21);
Child.prototype.instroduce = function () {
  console.log("Helo I am Here");
};
Haider.instroduce();
Haider.calAge();
//now to also sharing prototpy means also acces parent prototype we use

//Now we call the function of Parent ProtoType and the object of Child construction used it
console.log(Haider); //as when i open it so they gave tha child prototpe =parent prototype instead of it we have to give chile prototpe = chile proto
// we have to do
Child.prototype.constructor = Child; //but he did not even changed it
*/
/*
const Parent = function (Name, Speed) {
  this.name = Name;
  this.Speed = Speed;
};
Parent.prototype.accelerate = function () {
  this.Speed += 20;
  this.charge = this.charge - 1;
  console.log(
    `Car is Driving At ${this.Speed} at the charge of ${this.charge}`
  );
};

const Ev = function (Name, Speed, charge) {
  Parent.call(this, Name, Speed);
  this.charge = charge;
};
Ev.prototype = Object.create(Parent.prototype);
const Haider = new Ev("Haider", 230, 100);

Haider.accelerate();
Haider.accelerate();
console.log(Haider);
*/
//ES6 Classs Example
/*
class Parent {
  constructor(First, Last) {
    this.FirstName = First;
    this.LastName = Last;
  }
  calAge() {
    console.log("I am In Parent Class");
  }
  Greet() {
    console.log("Welcome to Parent Class");
  }
}
//now we inherit it by using (extent) function
class Child extends Parent {
  constructor(fname, lname, course) {
    super(fname, lname); //basicaly (super ) it automatically call the parent constructor funtion
    this.Course = course;
  }
  //for overriding function make a function with same name
  calAge() {
    console.log("Now I am Overiding it ");
  }
}

const Obj1 = new Child("Haider Ali", "Ali", "Computer Science");
console.log(Obj1);
Obj1.calAge();
Obj1.Greet();
*/
//now we use inherit for object.create()
/*
const Parent = {
  getFunc(fname, lname) {
    this.FName = fname;
    this.lname = lname;
  },
  calAge() {
    console.log("U are using me");
  },
  greety() {
    console.log("Hello I am in Parent Class");
  },
};
//Now All prperties are inherited in Child class
const Child = Object.create(Parent);
Child.setFunc = function (f, l, c) {
  Parent.getFunc.call(this, f, l);
  this.Course = c;
};
//for overdoing
Child.greety = function () {
  console.log("Now I am Overding the Parent ");
};

//make obj
const Obj1 = Object.create(Child);
console.log(Obj1);
Obj1.setFunc("Haider", "Ali", "Computer Science");
Obj1.greety();
Obj1.calAge();
*/
//
