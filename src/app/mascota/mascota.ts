/**
 * clase que representa una mascota en la tienda.
 */


import {Raza} from'../raza/raza';
export class Mascota{

    /**
     * Representa el identificador de la mascota.
     */
    id: number;

    /**
     * Representa el nombre de la mascota.
     */
    nombre: string;

    /**
     * Representa la edad de la mascota.
     */
    edad: number;

    /**
     * Representa el género de la mascota.
     */
    genero: string;

    /**
     * Representa el color de la mascota.
     */
    color: string;

    /**
     * Representa el precio de la mascota.
     */
    precio : number;

    /**
     * Representa la raza a la que pertenece la mascota.
     */
    raza : Raza;

    /**
     * Representa la imagen de la mascota.
     */
    imagen : string;

}
