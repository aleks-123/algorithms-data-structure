//! Arrays : Data Structures
// const strings = ["a", "b", "c", "d"];
// // if we were on 32 bit system 4*4 = 16 bytes of storage

// console.log(strings[2]);
// //push
// strings.push("e"); // O[1]
// //pop
// strings.pop(); // O[1]

// //unshift
// strings.unshift("x"); // O[n]

// //splice
// strings.splice(2, 0, "alien"); // O[n]

// console.log(strings);
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index) {
//     return this.data[index];
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     console.log(this.length);
//     return this.data;
//   }
//   pop() {
//     console.log(this.length);
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   deleteAtIndex(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }
//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     console.log(this.data[this.length - 1]);
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new MyArray();
// newArray.push("aleksandar");
// newArray.push("milosheski");
// console.log(newArray);

// reverse string

// function reverse(str) {
//   // check input
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return "we dont have valid string";
//   }
//   const backwars = [];
//   const arrayStr = str.split("");
//   let startvalue = 0;

//   for (let i = arrayStr.length - 1; i >= 0; i--) {
//     backwars[startvalue] = arrayStr[i];
//     startvalue++;
//   }
//   return backwars.join("");
// }

// function reverse2(str) {
//   if (!str || str.length < 2 || typeof str !== "string")
//     return "we dont have valid string";
//   const reverseString = str.split("").reverse().join("");
//   return reverseString;
// }

// console.log(reverse("Aleksandar aaa aaa eee"));

// console.log(reverse2("Aleksandar aaaa eeee rrrrr"));

// // const mergeSortedArrays = (arra1, arra2) => {
// //   if (!Array.isArray(arra1) && !Array.isArray(arra2)) return "this is error";
// //   return [...arra1, ...arra2].sort((a, b) => a - b);
// // };

// // console.log(mergeSortedArrays([2, 3, 2, 4, 56, 6], [3, 4, 6, 7]));

// function mergeSortedArrays(array1, array2) {
//   const mergedArray = [];
//   let array1Item = array1[0];
//   let array2Item = array2[0];
//   let i = 1;
//   let j = 1;

//   //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
//   if (array1.length === 0) {
//     return array2;
//   }
//   if (array2.length === 0) {
//     return array1;
//   }

//   while (array1Item || array2Item) {
//     if (
//       array2Item === undefined ||
//       array1Item === undefined ||
//       array1Item < array2Item
//     ) {
//       mergedArray.push(array1Item);
//       array1Item = array1[i];
//       i++;
//     } else {
//       mergedArray.push(array2Item);
//       array2Item = array2[j];
//       j++;
//     }
//   }
//   return mergedArray;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));

//! HASH TABLES

// const user = {
//   age: 54,
//   name: "Kylie",
//   magic: true,
//   scream: function () {
//     console.log("ashh1");
//   },
// };

// user.age; // O(1)
// user.spell = "Abra kadabra"; //O(1)
// user.scream(); // O(1)
// console.log(user);
// coulision O(n)

// const a = new Map()
// const b = new Sets()

//! LINKED LIST

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     // const newNode = {
//     //   value: value,
//     //   next: null,
//     // };
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   prepend(value) {
//     // const newNode = {
//     //   value: value,
//     //   next: null,
//     // };
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }

//     return console.log(array);
//   }
//   insert(index, value) {
//     //check params
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const newNode = new Node(value);
//     const leader = this.traverseToIndex(index - 1);

//     newNode.next = leader.next;
//     leader.next = newNode;
//     this.length++;
//     return this.printList();
//   }
//   traverseToIndex(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }

//   remove(index) {
//     //check params
//     if (index == 0) {
//       this.head = this.head.next;
//     } else {
//       const leader = this.traverseToIndex(index - 1);
//       const unwantedNode = leader.next;
//       leader.next = unwantedNode.next;
//     }

//     this.length--;
//     return this.printList();
//   }
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.remove(0);

//!STACK

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.top) {
//       return null;
//     }
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }
//     // const holdingPointer = this.top;
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   }
//   //isEmpty
// }

// const myStack = new Stack();
// myStack.push("Discord");
// myStack.push("Udemy");
// myStack.push("Google");
// myStack.pop();
// console.log(myStack);
// // console.log(myStack.peek());

// //! QUEUES

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.first;
//   }
//   enqueue(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//       this.length++;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//   }
//   dequeue() {
//     if (!this.first) {
//       return null;
//     }
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     const pointerValue = this.first;
//     this.first = this.first.next;
//     this.length--;
//     return this;
//   }
//   //isEmpty;
// }

// const myQueue = new Queue();
// myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.enqueue("aleksandar");
// myQueue.dequeue();

// console.log(myQueue);

//! TREES

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
//     //Code here
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
//     return false;
//   }
//   // remove
// }

// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root), null, 2));
// console.log(tree.lookup(20));
// //     9
// //  4     20
// //1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }

//! GRAPHS

// edge list
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Ajdacent List
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

//Adjacent Matrix
const graph3 = [];

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    //undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
