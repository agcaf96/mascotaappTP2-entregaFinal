class Email {
  constructor(destinatario, asunto, texto) {
    this.setDestinario(destinatario);
    this.setAsunto(asunto);
    this.setText(texto)
    this.from = "mascotaapp@info.com.ar"
  }

  setDestinario(destinario) {
    if(!destinario || destinario == '') {
      throw new Error("El destinario no puede ser vacio")
    }
    else {
      this.to = destinario
    }
  }

  setAsunto(asunto) {
    if(!asunto || asunto == '') {
      throw new Error("El asunto no puede ser vacio")
    }
    else {
      this.subject = asunto
    }
  }

  setText(texto) {
    if(!texto || texto == '') {
      throw new Error("El texto no puede ser vacio")
    }
    else {
      this.text = texto
    }
  }
  
}
  
export default Email;