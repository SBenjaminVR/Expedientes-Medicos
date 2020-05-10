<template>
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
</template>

<script>

export default {
  name: "core",
  data() {
    return {
      version: "0.0.0",
      clipped: true,
      drawer: false,
      fixed: true,
      temporary: true,
      items: this.filterPaths([
        {
          icon: "person",
          title: "Usuarios",
          route: "userlist",
          documentName: "user",
          visible: true
        },
        {
          icon: "group_work",
          title: "Roles",
          route: "rolelist",
          documentName: "role",
          visible: false
        },
        {
          icon: "business",
          title: "Sucursales",
          route: "BranchOfficelist",
          documentName: "BranchOffice",
          visible: true
        },
        {
          icon: "map",
          title: "Ciudades",
          route: "citieslist",
          documentName: "cities",
          visible: true
        },
        {
          icon: "bookmark",
          title: "Categorías",
          route: "Categorieslist",
          documentName: "Categories",
          visible: true
        },
        {
          icon: "chrome_reader_mode",
          title: "Productos",
          route: "Productslist",
          documentName: "Products",
          visible: true
        },
        {
          icon: "important_devices",
          title: "Envío de Notificaciones",
          route: "Notificationslist",
          documentName: "Notifications",
          visible: true
        },
        {
          icon: "face",
          title: "Clientes",
          route: "Customerslist",
          documentName: "Customers",
          visible: true
        },
        {
          icon: "attach_money",
          title: "Cobros",
          route: "Chargeslist",
          documentName: "Charges",
          visible: false
        },
        {
          icon: "credit_card",
          title: "Lineas de solicitud de servicios",
          route: "ServiceRequestLineslist",
          documentName: "ServiceRequestLines",
          visible: false
        },
        {
          icon: "airport_shuttle",
          title: "Recolectores",
          route: "Supplierslist",
          documentName: "Suppliers",
          visible: true
        },
        {
          icon: "description",
          title: "Reporte de Transacciones",
          route: "Transactionreport",
          documentName: "Suppliers",
          visible: true
        }
      ]),
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "PASA",
      snackbarMessage: "",
      showSnackbar: false,
      username: ""
    };
  },
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
  mounted() {
    var userId = localStorage.getItem("userId");
    if (!userId) {
      this.$router.push("login");
    } else {
      this.$http.get("user/" + userId).then(
        response => {
          this.user = response.body.user;
          this.version = response.body.version;
          this.username =
            this.user.firstName.trim() +
            " " +
            (this.user.lastName ? this.user.lastName.trim() : "");
        },
        () => {
          this.snackbar("Error al obtener el usuario de la sesión");
        }
      );
    }
  }
};
</script>

<style scoped>
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
</style>
