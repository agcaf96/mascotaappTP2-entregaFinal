import Localizador from './Localizador.js';
import {datosLocalizador} from '../../config.js';


class FactoryLocalizador {
  constructor() {
    this.key = datosLocalizador.key;
    this.urlBase = datosLocalizador.urlBase
  }

  getLocalizador() {
    return new Localizador(this.key, this.urlBase);
  }
}

export default FactoryLocalizador 