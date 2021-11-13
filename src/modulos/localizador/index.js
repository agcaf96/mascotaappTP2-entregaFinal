import Localizador from './Localizador.js';
import {datosLocalizador} from '../../config.js';

const localizador = new Localizador(datosLocalizador.key, datosLocalizador.urlBase);

export function  getLocalizador() {
  return localizador
}