// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// function findFactorialRecursive(number) {
//   if (number < 1) {
//     return 1;
//   }

//   return number * findFactorialRecursive(number - 1);
// }

// console.log(findFactorialRecursive(3));

// function findFactorialIterative(number) {
//   let answer = 1;
//   for (let i = 1; i <= number; i++) {
//     answer = answer * i;
//   }
//   return answer;
// }

// console.log(findFactorialIterative(2));

////! Fibonachi

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// function fibonacciIterative(n) {
//   let arr = [0, 1];

//   for (let i = 2; i < n + 1; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }
//   return arr[n];
//   //code here;
// }
// fibonacciIterative(3);

// function fibonacciRecursive(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// console.log(fibonacciRecursive(8));

//! SORTIG ALGORITHMS

// const basket = [2, 65, 34, 2, 1, 7, 8];

// console.log(basket.sort((a, b) => a - b));

//!Bubble Sort

// const numbers = [99, 44, 5, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// const BubbleSort = (array) => {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if (array[j] > array[j + 1]) {
//         //swap numbers
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
// };

// BubbleSort(numbers);
// console.log(numbers);

//! Selection Sort
// const numbers1 = [99, 44, 5, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// const selectionSort = (array) => {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     let min = i;
//     for (let j = i + 1; j < length; j++) {
//       if (array[j] < array[min]) {
//         min = j;
//       }
//     }
//     let temp = array[i];
//     array[i] = array[min];
//     array[min] = temp;
//   }
// };

// selectionSort(numbers1);
// console.log(numbers1);

// //! Insertion Sort

// const number2 = [99, 44, 5, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSort(array) {
//   for (let i = 1; i < array.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (array[j] < array[j - 1]) {
//         const temp = array[j];
//         array[j] = array[j - 1];
//         array[j - 1] = temp;
//       } else {
//         break;
//       }
//     }
//   }
// }
// insertionSort(number2);
// console.log(number2);

//! Merge sort
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function mergeSort(array) {
//   if (array.length === 1) {
//     return array;
//   }
//   const length = array.length;
//   const middle = Math.floor(length / 2);
//   const left = array.slice(0, middle);
//   const right = array.slice(middle);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   const result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// const answer = mergeSort(numbers);
// console.log(answer);

//! Linear search
// var beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

// beasts.indexOf("Godzilla");

// beasts.findIndex(function (item) {
//   return item === "Godzilla";
// });

// beasts.find(function (item) {
//   return item === "Godzilla";
// });

// beasts.includes("Godzilla");

//! BFS/Traversal  - Breadth first search
//! DFS - Depth First Search/Traversal
//If you know a solution is not far from the root of the tree:
// BFS

//If the tree is very deep and solutions are rare,
// BFS (DFS will take long time. )

//If the tree is very wide:
// DFS (BFS will need too much memory)

//If solutions are frequent but located deep in the tree
// DFS

//determining whether a path exists between two nodes
// DFS

//Finding the shortest path
// BFS

//!BFS

// class Node {
//   constructor(value) {
//     this.left = null;
//     this.right = null;
//     this.value = value;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     const newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       let currentNode = this.root;
//       while (true) {
//         if (value < currentNode.value) {
//           //Left
//           if (!currentNode.left) {
//             currentNode.left = newNode;
//             return this;
//           }
//           currentNode = currentNode.left;
//         } else {
//           //Right
//           if (!currentNode.right) {
//             currentNode.right = newNode;
//             return this;
//           }
//           currentNode = currentNode.right;
//         }
//       }
//     }
//   }
//   lookup(value) {
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root;
//     while (currentNode) {
//       if (value < currentNode.value) {
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         return currentNode;
//       }
//     }
//     return null;
//   }
//   remove(value) {
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root;
//     let parentNode = null;
//     while (currentNode) {
//       if (value < currentNode.value) {
//         parentNode = currentNode;
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         parentNode = currentNode;
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         //We have a match, get to work!

//         //Option 1: No right child:
//         if (currentNode.right === null) {
//           if (parentNode === null) {
//             this.root = currentNode.left;
//           } else {
//             //if parent > current value, make current left child a child of parent
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.left;

//               //if parent < current value, make left child a right child of parent
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.left;
//             }
//           }

//           //Option 2: Right child which doesnt have a left child
//         } else if (currentNode.right.left === null) {
//           currentNode.right.left = currentNode.left;
//           if (parentNode === null) {
//             this.root = currentNode.right;
//           } else {
//             //if parent > current, make right child of the left the parent
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.right;

//               //if parent < current, make right child a right child of the parent
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.right;
//             }
//           }

//           //Option 3: Right child that has a left child
//         } else {
//           //find the Right child's left most child
//           let leftmost = currentNode.right.left;
//           let leftmostParent = currentNode.right;
//           while (leftmost.left !== null) {
//             leftmostParent = leftmost;
//             leftmost = leftmost.left;
//           }

//           //Parent's left subtree is now leftmost's right subtree
//           leftmostParent.left = leftmost.right;
//           leftmost.left = currentNode.left;
//           leftmost.right = currentNode.right;

//           if (parentNode === null) {
//             this.root = leftmost;
//           } else {
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = leftmost;
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = leftmost;
//             }
//           }
//         }
//         return true;
//       }
//     }
//   }
//   BreadthFirstSearch() {
//     let currentNode = this.root;
//     let list = [];
//     let queue = [];
//     queue.push(currentNode);

//     while (queue.length > 0) {
//       currentNode = queue.shift();
//       list.push(currentNode.value);
//       if (currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//       }
//     }
//     return list;
//   }
// }

// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// tree.remove(170);
// JSON.stringify(traverse(tree.root));

// console.log(tree.BreadthFirstSearch());

// //     9
// //  4     20
// //1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }

//! DPS
// inorder [1,4,6,9,15,20,170]
// preorder [9,4,1,6,20,15,170]
// postorder [1,6,4,15,170,20,9]

// class Node {
//   constructor(value) {
//     this.left = null;
//     this.right = null;
//     this.value = value;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     const newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       let currentNode = this.root;
//       while (true) {
//         if (value < currentNode.value) {
//           //Left
//           if (!currentNode.left) {
//             currentNode.left = newNode;
//             return this;
//           }
//           currentNode = currentNode.left;
//         } else {
//           //Right
//           if (!currentNode.right) {
//             currentNode.right = newNode;
//             return this;
//           }
//           currentNode = currentNode.right;
//         }
//       }
//     }
//   }
//   lookup(value) {
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root;
//     while (currentNode) {
//       if (value < currentNode.value) {
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         return currentNode;
//       }
//     }
//     return null;
//   }
//   remove(value) {
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root;
//     let parentNode = null;
//     while (currentNode) {
//       if (value < currentNode.value) {
//         parentNode = currentNode;
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         parentNode = currentNode;
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         //We have a match, get to work!

//         //Option 1: No right child:
//         if (currentNode.right === null) {
//           if (parentNode === null) {
//             this.root = currentNode.left;
//           } else {
//             //if parent > current value, make current left child a child of parent
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.left;

//               //if parent < current value, make left child a right child of parent
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.left;
//             }
//           }

//           //Option 2: Right child which doesnt have a left child
//         } else if (currentNode.right.left === null) {
//           if (parentNode === null) {
//             this.root = currentNode.left;
//           } else {
//             currentNode.right.left = currentNode.left;

//             //if parent > current, make right child of the left the parent
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.right;

//               //if parent < current, make right child a right child of the parent
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.right;
//             }
//           }

//           //Option 3: Right child that has a left child
//         } else {
//           //find the Right child's left most child
//           let leftmost = currentNode.right.left;
//           let leftmostParent = currentNode.right;
//           while (leftmost.left !== null) {
//             leftmostParent = leftmost;
//             leftmost = leftmost.left;
//           }

//           //Parent's left subtree is now leftmost's right subtree
//           leftmostParent.left = leftmost.right;
//           leftmost.left = currentNode.left;
//           leftmost.right = currentNode.right;

//           if (parentNode === null) {
//             this.root = leftmost;
//           } else {
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = leftmost;
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = leftmost;
//             }
//           }
//         }
//         return true;
//       }
//     }
//   }
//   BreadthFirstSearch() {
//     let currentNode = this.root;
//     let list = [];
//     let queue = [];
//     queue.push(currentNode);

//     while (queue.length > 0) {
//       currentNode = queue.shift();
//       list.push(currentNode.value);
//       if (currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//       }
//     }
//     return list;
//   }
//   BreadthFirstSearchR(queue, list) {
//     if (!queue.length) {
//       return list;
//     }
//     const currentNode = queue.shift();
//     list.push(currentNode.value);

//     if (currentNode.left) {
//       queue.push(currentNode.left);
//     }
//     if (currentNode.right) {
//       queue.push(currentNode.right);
//     }

//     return this.BreadthFirstSearchR(queue, list);
//   }
//   DFTPreOrder(currentNode, list) {
//     return traversePreOrder(this.root, []);
//   }
//   DFTPostOrder() {
//     return traversePostOrder(this.root, []);
//   }
//   DFTInOrder() {
//     return traverseInOrder(this.root, []);
//   }
// }

// function traversePreOrder(node, list) {
//   list.push(node.value);
//   if (node.left) {
//     traversePreOrder(node.left, list);
//   }
//   if (node.right) {
//     traversePreOrder(node.right, list);
//   }
//   return list;
// }

// function traverseInOrder(node, list) {
//   if (node.left) {
//     traverseInOrder(node.left, list);
//   }
//   list.push(node.value);
//   if (node.right) {
//     traverseInOrder(node.right, list);
//   }
//   return list;
// }

// function traversePostOrder(node, list) {
//   if (node.left) {
//     traversePostOrder(node.left, list);
//   }
//   if (node.right) {
//     traversePostOrder(node.right, list);
//   }
//   list.push(node.value);
//   return list;
// }

// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// // tree.remove(170);
// // JSON.stringify(traverse(tree.root))

// console.log("BFS", tree.BreadthFirstSearch());
// console.log("BFS", tree.BreadthFirstSearchR([tree.root], []));
// console.log("DFSpre", tree.DFTPreOrder());
// console.log("DFSin", tree.DFTInOrder());
// console.log("DFSpost", tree.DFTPostOrder());

// //     9
// //  4     20
// //1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }

// // BFS - shorrtest past , whaty is most lerarated items on amazon who are our closest friend or closes connection
// // DFS - check if somerthing exist

//! Caching
//learn to cache
function addTo80(n) {
  return n + 80;
}

addTo80(5);

let cache = {};
function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("long time");
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}

// console.log(1, memoizeAddTo80(6))
// // console.log(cache)
// // console.log('-----------')
// console.log(2, memoizeAddTo80(6))

// let's make that better with no global scope. This is closure in javascript so.
function memoizeAddTo80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  };
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6));
// console.log(cache)
// console.log('-----------')
console.log(2, memoized(6));

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;
function fibonacci(n) {
  //O(2^n)

  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster() {
  //O(n)
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log("Slow", fibonacci(35));
console.log("DP", fasterFib(100));
console.log("DP2", fibonacciMaster2(100));
console.log("we did " + calculations + " calculations");
