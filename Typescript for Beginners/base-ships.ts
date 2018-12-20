class Spacecraft{
    constructor(public propulsor: String){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

export{Spacecraft}