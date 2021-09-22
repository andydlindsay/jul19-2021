interface IDog {
  breed: string;
  tail: boolean;
  age: number;
  worms: boolean;
  stomach: string[];
  eatFood: (food: string, qty?: number) => boolean
}

const bengie: IDog = {
  breed: 'shaggy',
  tail: true,
  age: 7,
  worms: true,
  stomach: [],
  eatFood: function (food: string) {
    this.stomach.push(food);
    return true;
  }
}
