interface IUser {
  id?: number;
  username: string;
  password: string;
  age: number;
}

const loginUser: IUser = {
  // id: 5,
  username: 'Alice',
  password: '1234',
  age: 24
};

const users: IUser[] = [];
users.push(loginUser);

console.log('does this work?');
