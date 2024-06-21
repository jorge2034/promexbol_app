<template>
  <q-page class="flex flex-center page">
    <iframe
      src="https://es.widgets.investing.com/live-commodities?theme=darkTheme&cols=last,prev,high,low,change,changePerc,time&pairs=8836,959211,959209,956470,959207"
      width="100%"
      height="450"
      frameborder="0"
      allowtransparency="true"
      marginwidth="0"
      marginheight="0"
    ></iframe>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LmePage",
});
</script>

<style>
.page {
  background-color: white;
}
</style>
