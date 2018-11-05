
/**
 * Clase que representa una mascota de venta en la tienda.
 */
import {Mascota} from'../mascota/mascota';

export class MascotaVenta {

    /**
     * Representa el identificador de la mascota de venta.
     */
    id: number;

    /**
     * Representa los documetnos pedegree pertencientes a la mascota.
     */
    documentosPedegree: string;

    /*
     * Representa el precio de la mascota a la venta
     */
    precio: number;

    /**
     * Representa la mascota que posee esta mascota de venta.
     */
    mascota: Mascota;

    /**
     * Representa la imagen de una mascota de venta.
     */
    imagen: string;
}