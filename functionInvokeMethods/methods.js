const person = {
  name: "Ganesh M",
  operation: function (parms, ...rest) {
    console.log(`Hello ${this.name}! ${parms} ${rest}`);
  },
};

// Call
person.operation.call(person, "How is your day!");
// Apply
person.operation.apply(person, [
  "How is your day!",
  "Who are you",
  "dfdfdfdfd",
]);
// Bind
const personFn = person.operation.bind(person, "How are you");
personFn();
