// Task 8: Hospital Patient System — Add & Find
const patients = [
  { id: 1, name: "Asha", age: 24 },
  { id: 2, name: "Rahul", age: 35 },
  { id: 3, name: "Meera", age: 17 },
];

patients.push({ id: 4, name: "Karan", age: 52 });

let oldestPatient = patients[0];
for (const patient of patients) {
  if (patient.age > oldestPatient.age) {
    oldestPatient = patient;
  }
}

console.log("Added patient:", patients[patients.length - 1]);
console.log("Oldest patient:", oldestPatient);
