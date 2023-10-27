// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Hello Vue!',
        immagine : 'https://picsum.photos/id/237/300/200'
      }
    }
  }).mount('#app')