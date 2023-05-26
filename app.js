const {createApp} = Vue;

createApp ({
  data(){
    return{
      title: "Ejercicio-1 Clase-3",
      ejercicio: "Genera una aplicación Vue que contenga un elemento HTML button y otro del tipo paragraph. Diseñar un algoritmo en Vue CDN el cual al pulsarlo debera mostrar u ocultar el helemento HTML paragraph",
      mensaje: "Esto aquí debera aparecer o desaparecer",
      mostrarMensaje: true

    }
  },

  methods: {
    showHide(){
      if (this.mostrarMensaje) {
        this.mostrarMensaje = false
      } else {
        this.mostrarMensaje = true
      }

      // (this.mostrarMensaje) ? this.mostrarMensaje = false : this.mostrarMensaje = true

    }

  }
}).mount("#app")
