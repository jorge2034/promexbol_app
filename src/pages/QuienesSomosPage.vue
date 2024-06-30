<template>
  <q-page class="page">
    <span id="titulo">Quiénes somos</span>
    <q-card class="my-card" flat bordered>
      <img src="https://cdn.quasar.dev/img/parallax2.jpg" />

      <q-list>
        <q-expansion-item
          popup
          default-opened
          icon="mail"
          label="Inbox"
          caption="5 unread emails"
        >
          <q-separator />
          <q-card>
            <q-card-section>
              Promotora de minerales exportables de Bolivia es una empresa
              independiente dedicada a la producción de concentrados de todo
              tipo de minerales y sus derivados con una extensa trayectoria en
              la comercialización de materias primas a nivel mundial. Nos
              especializamos en obtener productos de calidad, trabajando con
              nuestros clientes en la obtención de materias primas, brindándoles
              soluciones logísticas y distribución de productos finales.
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item popup icon="send" label="Visión" caption="Empty">
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
          icon="drafts"
          label="Misión"
          caption="Draft a new email"
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
    <p></p>

    <p></p>

    <p></p>

    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry heading>
        Timeline heading
        <br />
        ({{
          $q.screen.lt.sm ? "Dense" : $q.screen.lt.md ? "Comfortable" : "Loose"
        }}
        layout)
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
        side="right"
        icon="delete"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>November, 2017</q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="right"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
        color="orange"
        icon="done_all"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="right"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuienesSomosPage",
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
