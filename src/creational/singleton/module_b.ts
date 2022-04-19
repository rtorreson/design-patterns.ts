import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Moreno', age: 24 });
myDatabaseClassic.add({ name: 'Eloi', age: 50 });
myDatabaseClassic.add({ name: 'Tati', age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
