//Exemplos de Criação de Variaveis
let texto: string = " Helpe me, Obi-Wan Kenobi. You're my only hope!"
console.log(texto)

let episodes: number = 4
console.log("This is episode "+4)
episodes = episodes + 1
console.log("Next episode is "+ episodes)

let favoriteDroids :string
favoriteDroids = 'BB-8'
console.log("My favorite doid is "+favoriteDroids)

let isEnoughToBeatMF = function (parsecs: number):boolean{
    return parsecs < 12
}
let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc(speed:number, inc:number=1):number{    
    return speed + inc
}

console.log(`inc(5,1) = ${inc(5,1)}`)
console.log(`inc(5) = ${inc(5)}`)

