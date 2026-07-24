// Task 11: Hospital Patient System — Calculate a Derived Value

function classifyPatient(age) {
  if (age < 18) {
    return "minor";
  } else {
    return "adult";
  }
}

const patientAge = 16;
console.log(`Patient classification: ${classifyPatient(patientAge)}`);
