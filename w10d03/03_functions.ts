// const express = require('express');
// const myRouter = require('../whatever');

const sayHello = (name: string, age?: number): string => {
  return `hello there ${name}`;
};

const returnVal = sayHello('Alice');
sayHello('Alice', 42);

const returningPromise = (num: number): Promise<object> => {
  return new Promise((resolve, reject) => {
    // resolve({});
    // reject(new Error('oops'));
  });
};

returningPromise(5).then(val => {});

const higherOrderFunction = (cb: (num: number) => void, moreStuff?: string) => {
  cb(5);
};

higherOrderFunction((num: number) => '5');
