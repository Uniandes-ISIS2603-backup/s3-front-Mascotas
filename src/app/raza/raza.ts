import { Especie } from "../especie/especie";

/**
 * clase que representa la raza de una mascota en la tienda.
 */
export class Raza{

    /**
     * Representa el identificador de una raza en la tienda.
     */
    id : number;

    /**
     * representa el nombre de la raza.
     */
    nombre : string ;


    /**
     * Represetna la imagen de la especie.
     */
    imagen : string;

    /**
     * Representa la especie de una raza.
     */
    especie : Especie;


    constructor(){
        this.especie = new Especie();
    }

}