import axios from 'axios'

class Localizador {
  constructor(key, urlBase) {
    this.key = key;
    this.urlBase = urlBase;
  }

  async convertirDireALat(direccion) {
    const url = `${this.urlBase}address?key=${this.key}&location=${direccion}`

    try {
      const promise = await axios.get(url).then((response) => response)
      if (promise.data.info.statuscode != 0) {
        throw new Error("Dirección inválida")
      }
      const latYLong = promise.data.results[0].locations[0].latLng
      return latYLong
    } catch (error) {
      throw new Error(`ERROR LOCALIZADOR: ${error.message}`)
    }
  }

  async convertirLatADire(coordenadas) {
    const url = `${this.urlBase}reverse?key=${this.key}&location=${coordenadas.lat},${coordenadas.lng}&locale=es_MX`
    let calle
    try {
      const promise = await axios.get(url).then((response) => response);

      if (promise.data.info.statuscode != 0) {
        throw new Error("Dirección inválida")
      }

      const dire = promise.data.results[0].locations[0].street
      const direaux = dire.split(" ")
      calle = `${direaux[1]} ${direaux[0]}`

    } catch (error) {
      throw new Error(`ERROR LOCALIZADOR: ${error.message}`)
    }
    return calle
  }
}
export default Localizador