import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Dezembro', age: 21 });
myDatabaseClassic.add({ name: 'Rafael', age: 90 });
myDatabaseClassic.add({ name: 'Guilherme', age: 33 });

export { myDatabaseClassic };
