let ADULT_age = 18;
const users = [
    {name: "Abel", years: 43}, 
    {name: "Maria", years: 18}, 
    {name: "Pedro", years: 14}, 
    {name: "Samantha", years: 32}, 
    {name: "Raquel", years: 16}
]

for(let user of users) {
    if(user.years >= ADULT_age) {
        console.log('Usuario mayor de edad: ' + user.name)
    }else {
        console.log('Usuario menor de edad: ' + user.name)
    }
}