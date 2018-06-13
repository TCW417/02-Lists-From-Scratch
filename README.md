![cf](https://i.imgur.com/7v5ASc8.png) 02: Tools and Context
======
[![Build Status](https://travis-ci.org/TCW417/02-Lists-From-Scratch.svg?branch=master)](https://travis-ci.org/TCW417/02-Lists-From-Scratch)



Implemented the following methods on the List class as part of this lab:

- **class List** exported via modules.exports

- **List.forEach**(callback(current value *[, index [, list]]*))  Takes one argument, a call back function that will be passed the current element in the list and, optionally, the key value of the element and the list itself.

- **List.filter**(callback(current value *[, index [, list]]*))  Takes one argument, a callback to a function that returns true if the current element should be retained and false if it should be excluded. Returns array with "true" values. Callback takes optional index and list arguments.

- **List.shift()** Returns the first item in the list. Returns undefined if list is empty. Resulting list is one element shorter than before the call.

- **List.unshift**(element1 *[, ...[, elementN]]*)  Adds elements to the beginning of the list. Returns length of resultant list.

- **List.get(idx)**  Returns list value at location idx. Hides internal list property. Returns undefined if idx out of range.

- **List.set(idx, value)** Sets list location idx to value. Returns value. Returns undefined if idx out of range.

Additional methods implemented by Judy:

- **List.push()**
- **List.map()**
- **List.reduce()**
