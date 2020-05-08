<template>
    <div id="login">
        <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
        <v-container>
        <v-row >
            <v-col cols="6">
                <div class="d-flex align-center">
                    <v-img
                    alt="cover"
                    class="shrink"
                    src="../assets/cover.jpg"
                    transition="scale-transition"
                    gradient="to top, rgba(0, 0, 0, 0.4), transparent 72px"
                    height="100%"
                    />
                </div>
            </v-col>
            <v-col sm12 md6 offset-md3 cols="6">
            <v-card elevation="4" light tag="section">
                <v-card-title>
                <v-layout align-center justify-space-between>
                    <h3 class="headline">
                    Daddy Benja
                    </h3>
                    <v-flex>
                    <v-img :alt="platformName" class="ml-3" contain height="48px" position="center right" src="https://pngimage.net/wp-content/uploads/2018/05/daddy-png-4.png"></v-img>
                    </v-flex>
                </v-layout>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                <p>Inicie sesión con su usuario y contraseña:</p>
                <v-form>
                    <v-text-field
                                outline
                                label="Usuario"
                                type="text"
                                v-model="username"></v-text-field>
                    <v-text-field
                                outline
                                hide-details
                                label="Contraseña"
                                type="password"
                                v-model="password"></v-text-field>
                </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <v-btn 
                    color="teal lighten-2" 
                    class="ma-2 white--text"
                >
                    ¿Olvidó su contraseña?
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn 
                    color="teal lighten-2" 
                    class="ma-2 white--text"
                >
                    <v-icon size="15" left>fas fa-lock</v-icon>
                    Iniciar sesión
                </v-btn>
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
    el: '#app',
  data () {
    return {
      darkTheme: true,
      platformName: 'Platform name',
      password: null,
      username: null
    }
  }
}
</script>

<style lang="stylus">
.v-btn,
.v-card
  border-radius 4px

.v-card__title
  text-transform uppercase
</style>