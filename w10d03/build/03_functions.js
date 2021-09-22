"use strict";
// const express = require('express');
// const myRouter = require('../whatever');
const sayHello = (name, age) => {
    return `hello there ${name}`;
};
const returnVal = sayHello('Alice');
sayHello('Alice', 42);
const returningPromise = (num) => {
    return new Promise((resolve, reject) => {
        // resolve({});
        // reject(new Error('oops'));
    });
};
returningPromise(5).then(val => { });
const higherOrderFunction = (cb) => {
    cb(5);
};
higherOrderFunction((num) => '5');
