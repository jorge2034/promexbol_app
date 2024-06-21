<template>
  <q-layout view="hHh LpR fFf" class="bg-grey-3">
    <q-header class="bg-grey-3 text-grey-9" reveal height-hint="60">
      <q-toolbar class="GPLAY__toolbar text-grey-6">
        <q-btn
          v-if="$q.platform.is.mobile || !leftDrawerOpen"
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <div class="q-pr-lg">
          <img class="GPLAY__logo" src="logo2.png" />
        </div>

        <q-space />

        <div class="q-pl-md q-gutter-sm row no-wrap items-center">
          <q-btn round dense flat color="grey-8" size="16px" icon="share">
            <q-tooltip>Compartir</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-3 text-grey-7"
      :width="200"
    >
      <q-list>
        <q-item clickable class="GPLAY__drawer-link bg-grey-10 text-grey-3">
          <q-item-section avatar class="text-grey-1">
            <q-icon name="weekend" />
          </q-item-section>
          <q-item-section class="text-grey-3">
            <q-item-label>Menú</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--apps">
          <q-item-section avatar class="bg-green-7 text-grey-1 text-center">
            <q-icon name="android" />
          </q-item-section>
          <q-item-section class="apps-text">
            <q-item-label>Inicio</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--movies">
          <q-item-section
            avatar
            class="movies-icon bg-red-7 text-grey-1 text-center"
          >
            <q-icon name="local_movies" />
          </q-item-section>
          <q-item-section class="movies-text">
            <q-item-label>Quiesnes Somos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--music">
          <q-item-section
            avatar
            class="music-icon bg-orange-7 text-grey-1 text-center"
          >
            <q-avatar
              size="22px"
              color="white"
              text-color="orange-7"
              icon="music_note"
            />
          </q-item-section>
          <q-item-section class="music-text">
            <q-item-label>LME</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--books">
          <q-item-section
            avatar
            class="books-icon bg-blue-7 text-grey-1 text-center"
          >
            <q-icon name="book" />
          </q-item-section>
          <q-item-section class="books-text">
            <q-item-label>Contactos</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-mb-md" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />

      <!-- <q-page-sticky expand position="top">
        <q-toolbar class="GPLAY__sticky bg-white q-px-xl">
          <q-space />
          <q-btn
            icon="help"
            dense
            flat
            size="12px"
            class="GPLAY__sticky-help"
          />
          <q-btn
            icon="settings"
            dense
            flat
            class="GPLAY__sticky-settings q-ml-md"
            size="12px"
          />
        </q-toolbar>
      </q-page-sticky> -->
    </q-page-container>
    <q-footer>
      <div id="mobile-bottom-menu">
        <a to="/"><span class="material-icons"> home </span><br />Inicio</a>
        <a to="/lme"
          ><span class="material-icons"> area_chart </span><br />LME</a
        >
        <a href="#"
          ><span class="material-icons"> info_outline </span><br />Contacto</a
        >
        <!-- Agrega más imágenes según sea necesario -->
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "GooglePlayLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    const storage = ref(0.26);

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      leftDrawerOpen,
      storage,
      toggleLeftDrawer,
    };
  },
};
</script>
<style>
#mobile-bottom-menu a span.material-icons {
  font-size: 24px;
}
#mobile-bottom-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  background-color: rgb(
    187,
    30,
    30
  ); /* Puedes ajustar el color de fondo si lo deseas */
}

#mobile-bottom-menu a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

#mobile-bottom-menu a img {
  width: 30px; /* Ajusta el tamaño de las imágenes según sea necesario */
  transition: transform 0.3s ease-in-out; /* Agrega un efecto de transición */
}

#mobile-bottom-menu a:hover img {
  transform: scale(1.2); /* Ajusta la escala del icono al pasar el mouse */
}

/* Ocultar el menú en dispositivos de escritorio */
@media only screen and (min-width: 768px) {
  #mobile-bottom-menu {
    display: none;
  }
}
</style>

<style lang="sass">
.GPLAY

  &__toolbar
    height: 60px

  &__logo
    width: 150px
    height: 50px

  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    max-width: 60px
    width: 100%

  &__drawer-link

    .q-item__section--avatar
      margin: -8px 0 -8px -16px
      padding: 8px 0 8px 16px

    .q-item__section--main
      margin: -8px -16px -8px 16px
      padding: 8px 16px 8px 2px
      font-size: 18px
      font-weight: 300

    &--apps, &--movies, &--music, &--books, &--devices
      background: #f5f5f5!important
      &:hover
        color: #eee !important

    &--apps:hover
      background: #43a047!important

    &--movies:hover
      background: #e53935!important

    &--music:hover
      background: #fb8c00!important

    &--books:hover
      background: #1e88e5!important

    &--devices:hover
      background: #546e7a!important

  &__drawer-item
    padding: 6px 12px 6px 23px

  &__sticky
    min-height: 49px
    border-bottom: 1px solid rgba(0,0,0,0.12)

  &__sticky-help
    border: 1px solid #ccc
    padding-left: 8px
    padding-right: 8px

  &__sticky-settings
    padding-left: 17px
    padding-right: 17px
    border: 1px solid #ccc
</style>
