//! TIME COMPLEXITY
const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "martin",
  "nemo",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const large = new Array(10000).fill("nemo");

const findNemo = (array) => {
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  // let t1 = performance.now();
  // console.log("Call to find Nemo took " + (t1 - t0) + " miliseconds");
};
// findNemo(nemo);
// findNemo(everyone);
// findNemo(large); //! findNemo notacija ima O(n) --> Linear time

const boxes = ["box1", "box2", "box3", "box4"];

const copressFirstbox = (array) => console.log(array[0]);

//! O(1) => constant time
copressFirstbox(boxes);

function anotherfunction() {
  console.log("another function"); //0(n)
}

function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    anotherfunction(); // O(n)
    let stranger = true; // 0(n)
    a++; //O(n)
  }
  return a; //O(1)
}
// 3 + n + n + n + n;   => BIG O(3+4n)

const challenge = ["first", "second", "last", "morelast"];

// funChallenge(challenge);

//! Rule Book
//* Worst Case
//* Remove constants
//* Different terms for inputs
//* Drop Non Dominants

const logAllPairs = [1, 2, 3, 4, 5];

const funcLogAllPairs = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let y = 0; y < input.length; y++) {
      console.log(input[i], input[y]);
    }
  }
};

// funcLogAllPairs(logAllPairs);

//! imame constant linear and quadratic basic and factorial type of O notations

//! SPACE COMPLEXITY
