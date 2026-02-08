// api json data


console.log("Explore API")

const person = {
    name: "MH.SEBER",
    age: 25,
    city: "Dhaka",
    passion: "Coding",
    hobbies: ["Gaming", "Traveling", "Playing Football"],
    friends:["Fahim", "Ratul", "Tushar"],
};
console.log(person, typeof person);

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);