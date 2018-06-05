                                                                            //object destructuring
const person ={
    name: 'Jordan',
    age:25,
    location:{
        city:'HVille',
        temp: 30

    }
}
const {name= 'Anonymous',age} = person
console.log(`${name} is ${age}`)

const {city, temp: temperature} = person.location

console.log(`its $${temperature} in ${city}`)

//array destructuring

const address = ['122 s Juniper stree','philadephia','PA','55555']

const [,city,state,zip] = address;

console.log(`you are in ${city}, ${state}`)