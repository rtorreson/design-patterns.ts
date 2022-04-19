const personPrototype = {
  firstName: 'Rafael',
  lastName: 'Torreson',
  age: 23,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Lucas';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
