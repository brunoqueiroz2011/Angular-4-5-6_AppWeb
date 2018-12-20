//Exemplos de Criação de Variaveis
let msg:string = " Helpe me, Obi-Wan Kenobi. You're my only hope!"
console.log(msg)

let episode: number = 4
console.log("This is episode "+4)
episode = episode + 1
console.log("Next episode is "+ episode)

let favoriteDroid :string
favoriteDroid = 'BB-8'
console.log("My favorite doid is "+favoriteDroid)

//Exemplos de Funções
function useTheForce(name:string):void{
    console.log("Ese the force, "+ name)
}

let shortestRun = function(persecs:number):boolean{
    return persecs < 12
}

//Exemplos de Arrow Function
let ships
    //Normal Function
let tieFighters = ships.filter(function(ship){
    return ship.type === 'TieFighter'
})
    //Arrow Function
let ties = ships.filter(ship => ship.type === 'TieFighter')

//Exemplos de Function com parametros Opcionais
    // Sinal de '?' simboliza no TypeScript que o aparametro 
    // pode ser passado ou não
function parmOpcional(speed:number, inc?:number):number{
    let i = inc||1
    return speed + i
}
    // Nessa função o TypeScript adiciona o valor padrão caso
    // seja passado ou não o valor na chamada da função
function parmValueDefault(speed:number, inc:number=1):number{    
    return speed + inc
}

//Exemplos de Function com parametros Rest
    //Sem Rest
    function contJedis(jedis:number[]):number{
        return jedis.reduce((a,b)=> a+b,0)        
    }
    // Como fica a chamada da Função
    contJedis([2,3,4])
    //Com Rest
    function contJedi(...jedis:number[]):number{
        return jedis.reduce((a,b)=> a+b,0)        
    }
    // Como fica a chamada da Função
    contJedi(2,3,4)