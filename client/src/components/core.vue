<!--<template>
  <v-app>
    <v-app-bar
      app
      color="transparent"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/traumaTree0.png"
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
  </v-app>
</template>-->

<template>
    <v-navigation-drawer
      dark
      permanent
      enable-resize-watcher
      width="15%"
    >
    <template v-slot:img>
    <v-img src="../assets/cover.jpg" gradient="to top, rgba(17,59,78,1) 0%, rgba(24,113,105,0.25) 50%, rgba(30,128,117,0.75) 100%" height="100%"></v-img>
    </template>
        <v-container>
            <v-row justify="space-around" align="end">
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
        <v-list-item
          v-for="([icon, text], i) in items"
          :key="i"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="drawerItems">{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>


<script>

export default {
  name: "core",
  data: () => ({
      items: [
        ['folder_shared', 'Expedientes'],
        ['group', 'Visitas'],
        ['assignment', 'Estudios'],
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

<style>
.app-container {
  padding: 0 50px;
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
.main-toolbar {
  background-color: white;
  box-shadow: inherit;
}

.p-version {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
}

.drawerItems{
    font-size: 1.5rem;
}
</style>
