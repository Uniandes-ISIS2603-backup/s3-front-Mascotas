import { Mascota } from '../mascota/mascota';
import {Cliente} from '../cliente/cliente';
/**
 * Clase que representa la compra de una mascota
 */

 export class Compra{

    /**
     * Representa el identificador de la compra.
     */
    mascota: Mascota;

    /**
     * Representa el precio con el que se compro una mascota.
     */
    precio: number;

  /**
   * Representa el tipo de pago con el que se compro una mascota
   */
  tipoDePago: string;

  /**
   * Representa la especie de una raza.
   */
  relacionCliente : Cliente;


  constructor(){
    this.mascota = new Mascota();
    this.relacionCliente = new Cliente();
  }
 }
