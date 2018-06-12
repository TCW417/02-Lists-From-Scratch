'use strict';

const List = module.exports = class {
  // in classes, we use the constructor to initialize the state of our class
  constructor() {
    this.length = 0;
  }

  // the forEach method calls callback forEach element in this

  forEach(callback) { /*eslint-disable-line*/
    if (typeof callback !== 'function') { 
      throw new Error('Expected a function');
    }
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
    return undefined;
  }

  // the push method does NOT fall under functional programming because it 
  // is directly modifying our original list
  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i]; /*eslint-disable-line*/
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
      result.push(callback(this[i], i));
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
      if (callback(this[i], i, this)) returnList.push(this[i]);
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
      accumulator = this[0]; /*eslint-disable-line*/
    }
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i); /*eslint-disable-line*/
    }
    return accumulator;
  }

  // shift: remove first element of list.
  shift() { /*eslint-disable-line*/

    if (this.length === 0) return undefined;

    const returnVal = this[0];

    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    
    delete this[this.length - 1];
    this.length -= 1;

    return returnVal;
  }
};
