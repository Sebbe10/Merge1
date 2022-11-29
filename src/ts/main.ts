class Person {
  namn: string;
  constructor(namn: string) {
    this.namn = namn;
  }
}

let p = new Person("Hej");

let p1 = new Person("Tja");

let p2 = new Person("Hejsan");

let names = 0;

let myuls = [p, p1, p2];

let ulTag = document.getElementById("myUL");

for (let i = 0; i < myuls.length; i++) {
  let li = document.createElement("li");

  let span = document.createElement("span");

  var txt = document.createTextNode("\u00D7");

  let ull = document.createElement("button");
  li.innerHTML = myuls[i].namn;

  li.appendChild(span);
  ull.appendChild(span);
  ulTag?.appendChild(li);
}
