<template>
  <v-app>
    <v-app-bar
      app
      color="teal lighten-2"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/traumaTree0.png"
          transition="scale-transition"
          width="40"
        />
        <h1>
            Expedientes
        </h1>
        
      </div>

      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://pngimage.net/wp-content/uploads/2018/05/daddy-png-4.png"
          width="100"
        />
      </div>
    </v-app-bar>

    <v-content>
      <Login/>
    </v-content>
  </v-app>
</template>

<script>
import Login from './components/Login';

export default {
  name: 'App',

  components: {
    Login
  },

  data: () => ({
    //
  }),
};
</script>
