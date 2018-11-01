import { Raza } from "./raza";
import { Mascota } from "../mascota/mascota";

export class RazaDetail extends Raza {

    /**
     * Las mascotas de la raza.
     */

     razas: Mascota[];
}