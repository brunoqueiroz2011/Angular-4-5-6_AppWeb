import { Spacecraft } from "./base-ships";

import { Containership } from "./Containership";

class MillenniumFalcon extends Spacecraft
                        implements Containership{
    cargoContainer: number
    
    constructor(){
        super("hyperdrive")
        this.cargoContainer = 4
    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }else(console.log('Failed to jump into hyperspace'))
    }
}

export{MillenniumFalcon}