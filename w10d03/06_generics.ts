interface IContainer<T, M> {
  name: string;
  contents: T;
  moreContents?: M;
}

const stringContainer: IContainer<string, number> = {
  name: 'string container',
  contents: 'hello'
};

const numberContainer: IContainer<number, number> = {
  name: 'number container',
  contents: 42
};
