<template>
<div class="app-container">
    <v-navigation-drawer
      dark
      enable-resize-watcher
      width="15%"
      app
    >
    <template v-slot:img>
    <v-img src="../assets/cover.jpg" gradient="to top, rgba(17,59,78,1) 0%, rgba(24,113,105,0.25) 50%, rgba(30,128,117,0.75) 100%" height="100%"></v-img>
    </template>
        <v-container>
            <v-row align="end">
                <v-col cols="4" class="px-2">
                    <v-img
                    alt="Trauma Logo"
                    class="shrink mr-2"
                    contain
                    src="../assets/traumaTree0.png"
                    transition="scale-transition"
                    />
                </v-col>
                <v-col cols="8" class="px-5">
                    <v-img
                    alt="Daddy"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    src="https://pngimage.net/wp-content/uploads/2018/05/daddy-png-4.png"
                    transition="scale-transition"
                    />
                </v-col>
            </v-row>
        </v-container>
                <v-list>
                    <v-divider :key="`divider-logo`"></v-divider>
                    <v-list-item
                    v-for="([icon, text, route], i) in items"
                    :key="i"
                    link
                    @click="goTo(route)"
                    >
                    <v-list-item-icon>
                        <v-icon>{{ icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="drawerItems">{{ text }}</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
        <template v-slot:append>
        <div class="pa-2">
          <v-list>
               <v-divider :key="`divider-logout-top`"></v-divider>
                <v-list-item  @click="closeSesion()">
                    <v-list-item-icon>
                        <v-icon>person</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="drawerItems">Cerrar Sesión</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
          </v-list>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar app class="main-appbar" clipped-left color="#3B8A83">
        <v-spacer></v-spacer>
        <!-- <v-toolbar-title class="cursor-pointer user-name" @click="goTo('')" v-text="username"></v-toolbar-title> -->
        <v-btn text small color="accent" v-text="username">
        </v-btn>
        <v-btn icon small color="accent">
            <v-icon dark>person</v-icon>
        </v-btn>
    </v-app-bar>
    <v-content class="fill-height">
      <router-view/>
    </v-content>
</div>
</template>


<script>

export default {
  name: "core",
  data: () => ({
      username:"Usuario",
      items: [
        ['folder_shared', 'Expedientes', ''],
        ['group', 'Visitas', 'Visitas'],
        ['assignment', 'Estudios', 'Estudios'],
      ],
    }),
  methods: {
    snackbar: function(message) {
      this.snackbarMessage = message;
      this.showSnackbar = true;
    },
    goTo(route) {
      this.$router.replace("/" + route);
    },
    closeSesion: function() {
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      this.$router.push("login");
    },
    filterPaths: function(paths) {
      const permissions = JSON.parse(localStorage.getItem("credentials"));
      const clearedPaths = paths.filter(x => {
        if (x.reportName) {
          return permissions[`${x.reportName}Report`];
        }
        return (
          permissions[`${x.documentName}Read`] ||
          permissions[`${x.documentName}Update`] ||
          permissions[`${x.documentName}Create`] ||
          permissions[`${x.documentName}Delete`]
        );
      });
      return clearedPaths;
    }
  },
//   mounted() {
//     var userId = localStorage.getItem("userId");
//     if (!userId) {
//       this.$router.push("login");
//     } else {
//       this.$http.get("user/" + userId).then(
//         response => {
//           this.user = response.body.user;
//           this.version = response.body.version;
//           this.username =
//             this.user.firstName.trim() +
//             " " +
//             (this.user.lastName ? this.user.lastName.trim() : "");
//         },
//         () => {
//           this.snackbar("Error al obtener el usuario de la sesión");
//         }
//       );
//     }
//   }
};
</script>

<style scoped>
.app-container {
  background-color: white;
  height: 100%;
}
.title-center {
  text-align: center;
  width: 100%;
}
.user-name {
  font-size: 13px;
  text-align: right;
  margin-left: -50px;
  overflow: initial;
}
.main-appbar {
    padding: 0px 25px 0px 0px;
  box-shadow: inherit;
}
.drawerItems{
    font-size: 1.5rem;
}
</style>
