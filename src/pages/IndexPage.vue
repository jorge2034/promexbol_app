<template>
  <q-page class="flex flex-center page">
    <div class="background-image"></div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style>
.background-image {
  background-image: url("background.jpg");
  background-size: contain; /* Asegura que la imagen cubra toda la pantalla */
  background-position: top; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  width: 100%;
  height: 100%;
  position: fixed;
  top: 20%;
  left: 0;
}
.page {
  background-color: white;
}
</style>
