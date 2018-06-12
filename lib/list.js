'use strict';

const List = module.exports = class {
  // in classes, we use the constructor to initialize the state of our class
  constructor() {
    this.length = 0;
    this.list = [{}];
  }

  // the forEach method calls callback forEach element in this

  forEach(callback) { /*eslint-disable-line*/
    if (typeof callback !== 'function') { 
      throw new Error('Expected a function');
    }
    for (let i = 0; i < this.length; i++) {
      callback(this.list[0][i], i, this.list[0]);
    }
    return undefined;
  }

  // the push method does NOT fall under functional programming because it 
  // is directly modifying our original list
  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this.list[0][this.length] = args[i]; /*eslint-disable-line*/
      this.length += 1;
    }
    return this.length;
  }

  map(callback) {
    if (typeof callback !== 'function') { 
      throw new Error('Expected a function');
    }

    if (!this.length) { 
      throw new Error('List is empty.');
    }
    const result = new List();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this.list[0][i], i));
    }
    return result;
  }

  // filter
  filter(callback) {
    if (typeof callback !== 'function') { 
      throw new Error('Expected a function');
    }
    const returnList = new List();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.list[0][i], i, this.list[0])) returnList.push(this.list[0][i]);
    }
    return returnList;
  }

  // state is the accumulator
  reduce(callback, accumulator) {
    if (typeof callback !== 'function') { 
      throw new Error('Expected a function');
    }
    if (!this.length) { 
      return undefined;
    }
    if (!accumulator) {
      accumulator = this.list[0][0]; /*eslint-disable-line*/
    }
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this.list[0][i], i); /*eslint-disable-line*/
    }
    return accumulator;
  }

  // shift: remove first element of list.
  shift() { /*eslint-disable-line*/

    if (this.length === 0) return undefined;

    const returnVal = this.list[0][0];

    for (let i = 1; i < this.length; i++) {
      this.list[0][i - 1] = this.list[0][i];
    }

    delete this[this.length - 1];
    this.length -= 1;

    return returnVal;
  }

  // unshift: add elements to beginning of list.
  unshift(...items) {
    // console.log(this, 'start of unshift');
    const newList = new List();
    for (let i = 0; i < items.length; i++) {
      newList.push(items[i]);
    }
    for (let i = 0; i < this.length; i++) {
      newList.push(this.list[0][i]);
    }
    // console.log(newList, 'newList in unshift');
    this.list[0] = newList.list[0]; /*eslint-disable-line*/
    this.length = newList.length;
    // console.log(this, 'end of unshift');
    return this.length;
  }
};
