
import { linkedList } from "./linkedList.js";



const list = new linkedList();
console.log(list);

list.append("dog");
console.log(list);

list.append("cat");
console.log(list);

list.append("parrot");
console.log(list);

list.append("hamster");
console.log(list);

list.append("snake");
console.log(list);

list.append("turtle");
console.log(list);

console.log('START THE TESTS HERE')
console.log(list);

list.prepend('chelsea');
console.log(list);

console.log(list.getSize());

console.log(list.getHead());

console.log(list.tail());


console.log(list.at(3));

console.log(list.pop());

console.log(list.contains('dog'));

console.log(list.findIndex('dog'));

list.toString();

