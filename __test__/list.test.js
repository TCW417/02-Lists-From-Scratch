'use strict';

const List = require('../lib/list');

describe('testing methods of List class', () => {
  let myList;

  // runs this code before each test block
  beforeEach(() => {
    myList = new List();
    myList.push(0, 1, 2, 3, 4, 5);
  });

  // runs this code after each test block
  afterEach(() => {
    myList = null;
  });

  test('FOREACH: demonstrate proper operation of the forEach method', () => {
    let acc = 0;
    myList.forEach(el => acc += el); /*eslint-disable-line*/
    expect(acc).toEqual(15);
  });

  test('FOREACH: test passing non-function callback', () => {
    expect(() => {
      myList.forEach('a string. Doh!');
    }).toThrow();
  });

  test('PUSH: should show that the push method adds new items into the array', () => {
    expect(myList).toHaveLength(6);
    myList.push(6);
    expect(myList).toHaveLength(7);
    myList.push();
    expect(myList).toHaveLength(7);
    expect(myList.list[0][myList.length - 1]).toEqual(6);
    expect(myList.push(7, 8, 9)).toEqual(10);
  });

  // error test: checking for undefined
  test('MAP: throws error if list is empty', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.map(e => e);
    }).toThrow();
  });

  test('MAP: throws error if a function is not passed in', () => {
    expect(() => {
      myList.map('not a function');
    }).toThrow();
  });

  test('MAP: should return a new list', () => {
    const newList = myList.map((num) => {
      return num * 2;
    });
    expect(newList.length).toEqual(myList.length);
    for (let i = 0; i < newList.length; i++) {
      expect(newList.list[0][i] / 2).toEqual(myList.list[0][i]);
    }
  });

  // filter
  test('FILTER: should return new list with filtered results', () => {
    const filteredList = myList.filter(el => el % 2 === 0);
    expect(filteredList).toHaveLength(3);
    expect(filteredList.list[0][2]).toEqual(4);
  });

  test('FILTER: throws error if a function is not passed in', () => {
    expect(() => {
      myList.filter('this is not a function');
    }).toThrow();
  });

  // reduce
  test('REDUCE: should reduce the elements in the list to one single multiplied product with NO accumulator passed in', () => {
    const product = myList.reduce((accumulator, current) => {
      return accumulator * current;
    });
    // remember, if no accumulator argument is passed in to reduce's callback, 
    // the accumulator defaults to the first element in the list
    expect(product).toEqual(0);
  });

  test('REDUCE: should reduce the elements in the list to one single value while adding 10 accumulatively', () => {
    const sum = myList.reduce((accumulator, current) => {
      return accumulator + current;
    }, 10);
    expect(sum).toEqual(25);
  });

  test('SHIFT: should return first element of array and leave array re-indexed', () => {
    expect(myList.shift()).toEqual(0);
    expect(myList).toHaveLength(5);
    expect(myList.shift()).toEqual(1);
    expect(myList.shift()).toEqual(2);
    expect(myList).toHaveLength(3);
    expect(myList.list[0][2]).toEqual(5);
    myList.shift();
    myList.shift();
    myList.shift();
    expect(myList).toHaveLength(0);
    expect(myList.shift()).toBeUndefined();
  });

  test('UNSHIFT: should add items to front of list', () => {
    expect(myList.unshift(1, 2, 3)).toEqual(9);
    expect(myList).toHaveLength(9);
    expect(myList.unshift(11, 12)).toEqual(11);
    expect(myList).toHaveLength(11);
    const newL = new List();
    expect(newL.unshift(1)).toEqual(1);
    expect(newL.list[0][0]).toEqual(1);
  });
});
