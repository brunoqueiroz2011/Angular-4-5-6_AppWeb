import { Spacecraft } from "./base-ships";
import { Containership } from "./Containership";
import { MillenniumFalcon } from "./MillenniumFalcon";

let ship = new Spacecraft("hyperdrive")
ship.jumpIntoHyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = ( ship: Containership ) => ship.cargoContainer > 2
console.log(`Is falcon good for the job? ${goodForTheJob ( falcon ) ? 'YES' : 'NO'}`)