<template>
    <div id="login">
        <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
        <v-container>
        <v-row>
                <div class="d-flex align-center">
                    <v-img
                    alt="Trauma Logo"
                    class="shrink mr-2"
                    contain
                    src="../assets/traumaTree0.png"
                    transition="scale-transition"
                    width="50"
                    />
                    <h1 id="title">
                        Expedientes
                    </h1>
                    
                </div>

                <v-spacer></v-spacer>
                
        </v-row>
        <v-row justify="space-between">
            <v-col cols="0" md="6">
                <!-- <div class="d-flex align-center">
                    <v-img
                    alt="cover"
                    class="shrink"
                    src="../assets/cover.jpg"
                    transition="scale-transition"
                    gradient="to top, rgba(0, 0, 0, 0.4), transparent 72px"
                    height="100%"
                    />
                </div> -->
            </v-col>
            <v-col sm12 md6 xs12 offset-md3 cols="12" md="4" class="mt-12">
            <v-card elevation="24" light tag="section">
                <v-card-title>
                <v-layout align-center justify-space-between>
                    <h3 class="headline">
                    Bienvenido
                    </h3>
                    <v-flex>
                    <!-- <v-img :alt="platformName" class="ml-3" contain height="48px" position="center right" src="https://pngimage.net/wp-content/uploads/2018/05/daddy-png-4.png"></v-img> -->
                    </v-flex>
                </v-layout>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                <p>Inicie sesión con su correo y contraseña:</p>
                <v-form 
                    ref="form"
                >
                    <v-text-field
                        outline
                        label="Correo"
                        type="text"
                        required
                        v-model="model.email"
                        :rules="emailRules"
                    ></v-text-field>
                    <v-text-field
                        outline
                        label="Contraseña"
                        type="password"
                        :rules="[v => !!v || 'La contraseña es requerida']"
                        v-model="model.password"
                        required
                        @keyup.enter.native="login()"
                    ></v-text-field>
                </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                    <v-container :class="{ 'ma-4': $vuetify.breakpoint.smAndDown }">
                        <v-row justify="center">
                            <v-col cols="auto">
                                <v-btn 
                                    color="teal lighten-1"
                                    class="white--text"
                                    :class="{ 'smallBtn': $vuetify.breakpoint.smAndDown }"
                                    rounded
                                    large
                                    elevation="10"
                                    :block="$vuetify.breakpoint.smAndDown"
                                    @click="login()"
                                >
                                    <v-icon size="15" left>fas fa-lock</v-icon>
                                    Iniciar sesión
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col cols="auto">
                                <v-btn 
                                    color="teal lighten-1" 
                                    class="white--text smallBtn"
                                    text
                                    small
                                    :block="$vuetify.breakpoint.smAndDown"
                                >
                                    ¿Olvidó su contraseña?
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
        </v-container>
        </v-app>
    </div>
</template>

<script>
export default {
    name: 'login',
  data () {
    return {
      darkTheme: true,
      platformName: 'Platform name',
      model: {
        email: "",
        password: ""
      },
      emailRules: [
        v => !!v || 'El correo es requerido',
        v => /.+@.+\..+/.test(v) || 'El correo debe ser válido',
      ],
      showSnackbar: false,
      snackbarMessage: ""
    }
  },
  methods: {
      login() {
          if (this.$refs.form.validate()) {
              this.$router.push('/patientsList');
          }
      }
  }
}
</script>

<style lang="stylus">
#title
    color white

.v-card
  border-radius 4px

.v-card__title
  text-transform uppercase

#login
    background-image linear-gradient(0deg, rgba(38,166,154,0.75) 0%, rgba(38,166,154,0) 50%, rgba(38,166,154,0.75) 100%), url("../assets/cover.jpg")
    background-size cover

#inspire
    background none

.v-btn
    font-size 1rem !important

.smallBtn
    font-size 0.75rem !important

</style>