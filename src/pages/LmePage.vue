<template>
  <q-page class="page">
    <span id="titulo">London Metal Exchange</span>
    <div v-if="loading" class="loading-spinner">
      <div class="q-pa-md">
        <q-item style="max-width: 300px">
          <q-item-section avatar>
            <q-skeleton type="QAvatar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" width="65%" />
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item style="max-width: 300px">
          <q-item-section avatar>
            <q-skeleton type="QAvatar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" width="90%" />
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item style="max-width: 300px">
          <q-item-section avatar>
            <q-skeleton type="QAvatar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" width="35%" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item style="max-width: 300px">
          <q-item-section avatar>
            <q-skeleton type="QAvatar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" width="35%" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item style="max-width: 300px">
          <q-item-section avatar>
            <q-skeleton type="QAvatar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" width="35%" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>

    <iframe
      v-show="!loading"
      :src="iframeSrc"
      width="100%"
      height="450"
      @load="onIframeLoad"
      frameborder="0"
      allowtransparency="true"
      marginwidth="0"
      marginheight="0"
      id="my_iframe"
    >
    </iframe>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LmePage",
  setup() {
    const loading = ref(true); // Estado de carga
    const iframeSrc = ref(
      "https://es.widgets.investing.com/live-commodities?theme=darkTheme&cols=last,prev,high,low,change,changePerc,time&pairs=8836,959211,959209,956470,959207"
    ); // URL del iframe

    const onIframeLoad = () => {
      console.log("loading false");
      loading.value = false; // Marcar como cargado cuando el iframe termine de cargar
    };

    return {
      loading,
      iframeSrc,
      onIframeLoad,
    };
  },
});
</script>

<style>
.page {
  background-color: white;
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
