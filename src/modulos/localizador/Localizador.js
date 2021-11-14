import axios from 'axios'

class Localizador {
  constructor(key, urlBase) {
    this.key = key;
    this.urlBase = urlBase;
  }

  async convertirDireALat(direccion){
    const url = `${this.urlBase}address?key=${this.key}&location=${direccion}`
    const promise = await axios.get(url).then((response) => response)
    if (promise.data.info.statuscode != 0 ) {
      throw new Error ("Dirección inválida")
    }
    const resultados = promise.data.results
    const dire1 = resultados[0]
    const latYLong = dire1.locations[0].latLng
    return latYLong
  }  
  
  async convertirLatADire(coordenadas){
    const url = `${this.urlBase}reverse?key=${this.key}&location=${coordenadas.lat},${coordenadas.lng}&locale=es_MX`
    let calle 
    try {
      const promise = await axios.get(url).then((response) => response.data.results);
      const dire1 = promise[0]
     
      calle = dire1.locations[0].street
    } catch (error) {
        throw new Error(`ERROR LOCALIZADOR: ${error.message}`)
    }
    return calle
  }
}
export default Localizador