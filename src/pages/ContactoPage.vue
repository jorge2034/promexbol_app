<template>
  <q-page class="page">
    <span id="titulo">Contactos</span>
    <div class="wrapper">
      <div class="q-pa-md row items-start q-gutter-md"></div>
      <q-card class="my-card" flat bordered>
        <div class="q-pa-md" v-if="loading">
          <q-card style="width: 100%">
            <q-skeleton height="200px" square />
          </q-card>
        </div>
        <iframe
          v-show="!loading"
          :src="iframeSrc"
          width="100%"
          height="300"
          @load="onIframeLoad"
          frameborder="0"
          allowtransparency="true"
          marginwidth="0"
          marginheight="0"
          id="my_iframe"
        >
        </iframe>

        <q-card-section>
          <div class="text-overline text-orange-9">Contáctanos</div>
        </q-card-section>

        <div class="column items-center">
          <q-card-actions>
            <q-btn
              flat
              style="width: 100%"
              color="green-6"
              label="Whatsapp"
              icon="phone"
              @click="redirectToWhatsApp()"
            /><br />
            <q-btn
              flat
              style="width: 100%"
              color="blue-10"
              label="Facebook"
              icon="facebook"
              @click="redirectToFacebook()"
            />
            <q-btn
              flat
              style="width: 100%"
              color="blue-10"
              label="Página Web"
              icon="language"
              @click="redirectToWeb()"
            />
            <q-space />
          </q-card-actions>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContactoPage",
  setup() {
    const loading = ref(true); // Estado de carga
    const iframeSrc = ref(
      "https://www.google.com/maps/embed?t=p&pb=!1m18!1m12!1m3!1d2256.588421207854!2d-67.09217255736586!3d-17.973421802298382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x109f465a662be997!2sPromex%20Bol!5e0!3m2!1ses-419!2sbo!4v1569395963883!5m2!1ses-419!2sbo"
    ); // URL del iframe

    const onIframeLoad = () => {
      console.log("loading false");
      loading.value = false; // Marcar como cargado cuando el iframe termine de cargar
    };

    const redirectToWhatsApp = () => {
      const phoneNumber = "59176155280"; // Reemplaza con el número de teléfono deseado
      const message = "Hola!!, Promexbol. "; // Mensaje opcional

      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    };
    const redirectToFacebook = () => {
      const url = `https://www.facebook.com/PromexBol`;
      window.open(url, "_blank");
    };
    const redirectToWeb = () => {
      const url = `https://www.promexbol.com.bo/`;
      window.open(url, "_blank");
    };

    return {
      loading,
      iframeSrc,
      onIframeLoad,
      redirectToWhatsApp,
      redirectToFacebook,
      redirectToWeb,
    };
  },
});
</script>

<style>
.page {
  background-color: white;
  margin-bottom: 35%;
}
span {
  text-align: center;
}
span#titulo {
  font-family: "Arial Black", sans-serif;
  font-size: 2em;
  letter-spacing: -1px;
  padding: 0 5px 0 5px;
  background-image: linear-gradient(to right, #e50d0d, #f7eb11, #1ac407);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow: 5px 5px 5px #aaaaaa9d;
}
</style>
