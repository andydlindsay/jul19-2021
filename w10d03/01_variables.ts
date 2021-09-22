let username: string | boolean | number = 'jstamos';
username = 'Bob';
username = false;

username = 42;

const nums: (number | string)[] = [1,2,3];
nums.push(4);
nums.push('hello');
// nums.push(false);
const myNum = nums.pop();

console.log(myNum);
