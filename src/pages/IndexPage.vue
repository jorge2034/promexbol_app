<template>
  <q-page class="flex flex-center page">
    <div class="wrapper m-0 p-0">
      <div class="bg">Bienvenido a</div>
      <div class="fg">Bienvenido a</div>
    </div>
    <q-img class="m-0 p-0 imagen" src="background.jpg" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style>
:root {
  --gold: #ffb338;
  --light-shadow: #77571d;
  --dark-shadow: #3e2904;
}
body {
  margin: 0;
}
.imagen {
  transform: translateY(-100px);
}
.wrapper {
  display: grid;
  grid-template-areas: "overlap";
  place-content: center;
  z-index: 999;
}
.wrapper > div {
  background-clip: text;
  -webkit-background-clip: text;
  color: #363833;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: clamp(2em, 12vw, 9rem);
  grid-area: overlap;
  letter-spacing: 1px;
  -webkit-text-stroke: 4px transparent;
}
div.bg {
  background-image: repeating-linear-gradient(
    105deg,
    var(--gold) 0%,
    var(--dark-shadow) 5%,
    var(--gold) 12%
  );
  color: transparent;
  filter: drop-shadow(5px 15px 15px rgba(0, 0, 0, 0.355));
  transform: scaleY(1.05);
  transform-origin: top;
}
div.fg {
  background-image: repeating-linear-gradient(
    5deg,
    var(--gold) 0%,
    var(--light-shadow) 23%,
    var(--gold) 31%
  );
  color: #1e2127;
  transform: scale(1);
}

.page {
  background-color: white;
}
</style>
