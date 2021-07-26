const students = [
  {
    name: 'Alice',
    grade: 70
  },
  {
    name: 'Dean',
    grade: 60
  },
  {
    name: 'Bob',
    grade: 80
  },
  {
    name: 'Carol',
    grade: 95
  },
];

console.log([...students].sort((a, b) => {
  if (a.grade < b.grade) {
    return -1;
  }

  if (a.grade > b.grade) {
    return 1;
  }

  return 0;
}));

console.log(students);
