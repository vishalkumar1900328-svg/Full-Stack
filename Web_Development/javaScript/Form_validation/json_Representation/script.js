const college = [{
    name: "rahul", 
    age: 24,
    gender: "male",
    salary: 300000,
    projects: [{projectName: "ABCD", timeline: 2, role: "xyz"}]
},
{
    name: "Palak", 
    age: 34,
    gender: "female",
    salary: 500000,
    projects: [{projectName: "XYZ", timeline: 5, role: "pqrs"}]
},
{
    name: "Soumya", 
    age: 28,
    gender: "female",
    salary: 700000,
    projects: [{projectName: "MNOP", timeline: 1, role: "JKL"}]
}
];

console.log(college);


college[1].salary = 45000;
console.log(college);


delete college[2].salary;
console.log(college);
