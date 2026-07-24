// Task 9: Hospital Patient System — Remove & Sort
const patients = [
  { id: 1, name: "Asha", age: 24 },
  { id: 2, name: "Rahul", age: 35 },
  { id: 3, name: "Meera", age: 17 },
  { id: 4, name: "Karan", age: 52 },
];

patients.pop();
patients.sort((a, b) => a.age - b.age);

console.log("After removing last patient:", patients);
console.log("Sorted by age:", patients);
