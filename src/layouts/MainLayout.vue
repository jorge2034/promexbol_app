<template>
  <q-layout view="hHh LpR fFf" class="bg-grey-3">
    <q-header class="header text-grey-9" reveal height-hint="60">
      <q-toolbar class="GPLAY__toolbar text-white">
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
        <q-space />
        <div class="q-pr-lg">
          <img class="GPLAY__logo" src="logo2.png" />
        </div>

        <q-space />

        <div class="q-pl-md q-gutter-sm row no-wrap items-center text-white">
          <q-btn
            round
            dense
            flat
            color="white"
            size="16px"
            icon="share"
            @click="share"
          >
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
            <q-icon name="apps" />
          </q-item-section>
          <q-item-section class="text-grey-3">
            <q-item-label>Menú</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          class="GPLAY__drawer-link GPLAY__drawer-link--apps"
          v-ripple
          exact
          to="/"
        >
          <q-item-section avatar class="bg-red-7 text-grey-1 text-center">
            <q-icon name="home" />
          </q-item-section>
          <q-item-section class="apps-text">
            <q-item-label>Inicio</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          class="GPLAY__drawer-link GPLAY__drawer-link--movies"
          v-ripple
          exact
          to="/quienes-somos"
        >
          <q-item-section
            avatar
            class="movies-icon bg-yellow-7 text-grey-1 text-center"
          >
            <q-icon name="groups" />
          </q-item-section>
          <q-item-section class="movies-text">
            <q-item-label>Quiesnes Somos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          class="GPLAY__drawer-link GPLAY__drawer-link--music"
          v-ripple
          exact
          to="/lme"
        >
          <q-item-section
            avatar
            class="music-icon bg-green-7 text-grey-1 text-center"
          >
            <q-icon name="currency_exchange" />
          </q-item-section>
          <q-item-section class="music-text">
            <q-item-label>LME</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          class="GPLAY__drawer-link GPLAY__drawer-link--books"
          v-ripple
          exact
          to="/contacto"
        >
          <q-item-section
            avatar
            class="books-icon bg-blue-7 text-grey-1 text-center"
          >
            <q-icon name="info_outline" />
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
      <div class="custom-shape-divider-bottom-1719450834">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div id="mobile-bottom-menu">
        <router-link to="/"
          ><span class="material-icons"> home </span>Inicio</router-link
        >
        <router-link to="/lme"
          ><span class="material-icons"> currency_exchange </span
          >LME</router-link
        >
        <router-link to="/contacto"
          ><span class="material-icons"> info_outline </span
          >Contacto</router-link
        >
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { Share } from "@capacitor/share";
export default {
  name: "GooglePlayLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    const storage = ref(0.26);

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    async function share() {
      await Share.share({
        url: "https://play.google.com/store/apps/details?id=com.hostingbol.promexbol",
      });
    }

    return {
      leftDrawerOpen,
      storage,
      toggleLeftDrawer,
      share,
    };
  },
};
</script>
<style>
.header {
  background-color: #931830;
}
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
  /* box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); */
  z-index: 1000;
  background-color: #93183100; /* Puedes ajustar el color de fondo si lo deseas */
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
.custom-shape-divider-bottom-1719450834 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1719450834 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.custom-shape-divider-bottom-1719450834 .shape-fill {
  fill: #931830;
}

/** For mobile devices **/
@media (max-width: 767px) {
  .custom-shape-divider-bottom-1719450834 svg {
    width: calc(157% + 1.3px);
    height: 150px;
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
    filter: drop-shadow(0 0px 9px rgba(255, 255, 255, 0.9))

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

    &--apps:active
      background: #e53935!important

    &--movies:active
      background: #FDD835!important

    &--music:active
      background: #43A047!important

    &--books:active
      background: #1E88E5!important

    &--devices:click
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
