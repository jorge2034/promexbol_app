<template>
  <q-page class="page">
    <span id="titulo">Quiénes somos</span>
    <q-card class="my-card" flat>
      <q-video
        src="spot_promexbol.mp4"
        :ratio="16 / 9"
        class="mb-5"
        style="height: 150px"
        title="PROMEXBOL"
      />
      <q-card class="my-card">
        <q-card-section>
          <strong>Promotora de minerales exportables de Bolivia</strong> es una
          empresa independiente dedicada a la producción de concentrados de todo
          tipo de minerales y sus derivados con una extensa trayectoria en la
          comercialización de materias primas a nivel mundial. Nos
          especializamos en obtener productos de calidad, trabajando con
          nuestros clientes en la obtención de materias primas, brindándoles
          soluciones logísticas y distribución de productos finales.
        </q-card-section>
      </q-card>

      <q-list>
        <q-expansion-item
          popup
          icon="visibility"
          label="Visión"
          header-class="text-blue"
        >
          <q-separator />
          <q-card>
            <q-card-section>
              Nuestro objetivo principal es liderar el mercado internacional en
              la satisfacción de requerimientos mineralógicos, manteniendo los
              más altos estándares de calidad tanto en nuestros productos como
              en la atención personalizada de nuestros clientes.
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          popup
          icon="verified"
          label="Misión"
          header-class="text-green"
        >
          <q-separator />
          <q-card>
            <q-card-section>
              Nuestra misión es satisfacer las necesidades y expectativas tanto
              de nuestros proveedores como nuestros clientes, satisfacer la
              demanda creciente de productos y servicios, ayudar a desarrollar
              la logística de envíos y aportar el valor añadido que otorgamos a
              nuestros productos y servicios a los nuestros proveedores y los
              clientes.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "QuienesSomosPage",
  setup() {
    const loading = ref(true); // Estado de carga
    const iframeSrc = ref("spot_promexbol.mp4"); // URL del iframe

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
