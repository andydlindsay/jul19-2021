interface IPotentialUser {
  username: string;
  password: string;
}

const login = (user: IPotentialUser): boolean => {
  // do something
  // console.log(user.moreStuff);
  return true;
};

const testUser = {
  username: 'jstamos',
  password: '1234',
  moreStuff: 'more'
};

login(testUser);
