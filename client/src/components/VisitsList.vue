<template>
    <div class="expedientes-design">
        <v-toolbar flat color="transparent">
          <v-btn
              icon
              color="accent2"
              class="ma-3"
              v-on:click.stop="goBack()" 
          >
              <v-icon style="font-size:4rem;">chevron_left</v-icon>
          </v-btn>
        <v-toolbar-title>Consultas de {{name}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
                class="mx-2"
                v-model="search"
                label="Buscar"
                append-icon="search"
                outlined
                color="accent2"
                rounded
                hide-details="auto"
            ></v-text-field>
            <v-btn
                class="mx-2"
                fab
                dark
                large
                color="primary"
            >
                <!-- @click="goTo('Customersform')" -->
                <v-icon>add</v-icon>
            </v-btn>
        </v-toolbar>
        
        <br>
        <v-data-table :headers="headers" :items="list" :loading="loading" :search="search">
        <v-progress-linear slot="progress" color="accent2" indeterminate></v-progress-linear>
        <template slot="item" slot-scope="props">
            <tr>
                <td class="text-xs-left">{{ props.item.date }}</td>
                <td class="text-xs-left">{{ props.item.time }}</td>
                <td class="text-xs-center">
                <v-btn
                    fab
                    dark
                    small
                    color="primary"
                    class="ma-3"
                    v-on:click.stop="goTo('visit/' + props.item.patientId + '/' + props.item.id)" 
                >
                    <!-- v-if="credentials.PatientsRead"-->
                    <v-icon>visibility</v-icon>
                </v-btn>
                <v-btn
                    fab
                    dark
                    small
                    color="primary"
                    class="ma-3"
                >
                    <!-- v-if="credentials.PatientsUpdate"
                    v-on:click.stop="goTo('Customersform/' + props.item.id)" -->
                    <v-icon>create</v-icon>
                </v-btn>
                <v-btn
                    fab
                    dark
                    small
                    color="primary"
                    class="ma-3"
                >
                    <!-- v-if="credentials.PatientsDelete"
                    v-on:click.stop="confirmDelete(props.item.id)" -->
                    <v-icon>delete</v-icon>
                </v-btn>
                </td>
            </tr>
        </template>
        <template class="mt-2" slot="no-results">
            No hay resultados de expedientes para su búsqueda. Favor de intentar otra búsqueda o crear uno nuevo.
            <br>
            <v-btn class="my-2" small color="primary">Nuevo</v-btn>
        </template>
        </v-data-table>
        <v-dialog v-model="deleteDialog" max-width="350">
        <v-card>
            <v-card-title class="headline">Confirmación</v-card-title>
            <v-card-text>¿Está seguro de querer borrar este registro?</v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" flat @click="deleteDialog=false">Cancelar</v-btn>
            <v-btn
                color="primary"
                flat
                @click="deleteDialog=false; deleteRegistry(itemToDelete)"
            >Aceptar</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>


<script>
import _ from "underscore";
import moment from "moment-timezone";
moment.locale('es');

export default {
  data() {
    return {
      patientId: '',
      name: '',
      list: [],
      source: [],
      search: '',
      showFilters: true,
      headers: [
        { text: "Fecha", value: "date" },
        { text: "Hora", value: "time" },
        {text: "", value: "delete", align: "center"},
      ],
      loading: true,
      deleteDialog: false,
    //   credentials: JSON.parse(localStorage.getItem("credentials"))
    };
  },
  methods: {
    // snackbar: function(message) {
    // //   events.$emit("snackbar", message);
    // },
    confirmDelete: function(id) {
      this.itemToDelete = id;
      this.deleteDialog = true;
    },
    goBack() {
      window.history.back();
    },
    goTo(url) {
      var self = this;
      self.$router.push("/" + url);
    },
    getList: function(id) {
      if (id == '001') {
        this.name = "Mariano García Alipi"
        var consulta1 = {
            id: '001',
            patientId: '001',
            date: moment("25-5-2020", "DD/MM/YYYY").format("ddd DD/MMM/YYYY"),
            time: "4:00pm",
            text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
            delete: false,
        };
        var consulta2 = {
            id: '002',
            patientId: "001",
            date: moment("5/29/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
            time: "4:00pm",
            text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
            delete: false,
        };
        var consulta3 = {
            id: '003',
            patientId: '001',
            date: moment("5/31/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
            time: "2:00pm",
            text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
            delete: false,
        };
      }
      else if (id == '002') {
        this.name = "Pablo Moreno Tamez"
        var consulta1 = {
            id: '001',
            patientId: '002',
            date: moment("12-5-2020", "DD/MM/YYYY").format("ddd DD/MMM/YYYY"),
            time: "3:00pm",
            text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
            delete: false,
        };
        var consulta2 = {
            id: '002',
            patientId: "002",
            date: moment("5/21/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
            time: "9:00am",
            text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
            delete: false,
        };
        var consulta3 = {
            id: '003',
            patientId: '002',
            date: moment("5/30/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
            time: "8:00pm",
            text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
            delete: false,
        };
      }
      else if (id = '003') {
        this.name = "Benjamín Valdez Rodriguez"
        var consulta1 = {
            id: '001',
            patientId: '003',
            date: moment("20-4-2020", "DD/MM/YYYY").format("ddd DD/MMM/YYYY"),
            time: "7:00pm",
            text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
            delete: false,
        };
        var consulta2 = {
            id: '002',
            patientId: "003",
            date: moment("5/5/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
            time: "5:00pm",
            text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
            delete: false,
        };
        var consulta3 = {
            id: '003',
            patientId: '003',
            date: moment("5/15/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
            time: "6:00pm",
            text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
            delete: false,
        };
      }
        var list = [];
        list.push(consulta1);
        list.push(consulta2);
        list.push(consulta3);
    //   this.$http.get("Customers").then(
    //     response => {
    //       var list = response.body;
    //       _.each(list, customer => {
    //         customer.name = customer.lastName ? customer.name + " " + customer.lastName : customer.name;
    //       })
          this.list = list;
          this.source = list;
          this.loading = false;
    //     },
    //     error => {
    //       this.snackbar("Hubo un problema al obtener la lista");
    //       console.error(error);
    //     }
    //   );
    },
    // deleteRegistry(id) {
    //   this.showConfirm = false;
    //   this.$http.delete("Customers/" + id).then(
    //     response => {
    //       this.getList();
    //       this.snackbar("El registro ha sido eliminado con éxito");
    //     },
    //     error => {
    //       if (error.body.msg) {
    //         var message = error.body.msg;
    //         this.snackbar(message);
    //       } else {
    //         this.snackbar("Hubo un problema al eliminar el registro");
    //       }
    //     }
    //   );
    // },
  },
  mounted() {
    var id = this.$route.params.id;
    this.patientId = this.$route.params.id;
    this.getList(id);
  },
  filters: {
    moment: function(date) {
      return moment(date)
        .locale("es")
        .format("LL");
    }
  },

};
</script>

<style lang="scss">
.expedientes-design {
  font-family: "Open Sans", sans-serif;
  padding: 50px 50px;
  background:#E0F2F1;
  height: 100%;
  .v-toolbar {
    padding-bottom: 20px;
  }

  .v-data-table{
      font-family: "Muli";
      padding: 20px 0px;
      border-radius: 10px;
      background: #00897B;
      color: white;
      tr th {
          font-weight: 700;
          font-size: 1.2rem;
          background: #00897B;
          color: white !important;
      }
      td {
          color: darkgreen;
          background: rgb(200, 238, 236);
      }
      tbody tr:hover td{
          background: rgb(120, 214, 200);
      }
      .v-select__selection{
          color: white !important;
      }
  }

  .v-menu--inline{
    width: 100%;
  }

  .v-divider{
    background:black;
    margin: -15px 0px;
  }

  .v-toolbar__content {
    padding-left: 0px;
  }

  .v-toolbar__title {
    font-size: 2.2em;
    color: #26A69A;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }

  .v-select__selections {
    padding: 0px !important;
  }

  .theme--light.v-datatable .v-datatable__actions {
    border-top: none;
  }

  .v-form > .container {
    padding-left: 0px;
    padding-right: 0px;
  }

  .p-btn {
    padding-left: 100px;
    padding-right: 100px;
  }

  .p-icon {
    width: 16px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  .p-icon-h {
    height: 16px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  .p-tooltip{
    position: absolute;
    right: 0px;
    top: -30px
  }

  .v-text-field__slot div.v-text-field__prefix{
    margin-top:0px;
  }

  .p-layout .flex{
    padding: 0px 10px;
  }

  .p-layout .flex:first-child{
    border-right: 1px solid #444
  }

  .p-line-right{
    border-right: 1px solid #444
  }

  .p-list{
    top: -43px;
  }

  .p-gauge{
    padding-top: 100px;
  }

  .p-gauge canvas, .p-gauge .p-gauge-left, .p-gauge .p-gauge-right{
    width: 100% !important;
    height: unset !important;
    position: relative;
    text-align: center;
  }

  .p-gauge-left div div{
    padding-left: 120px;
    padding-right: 120px;
    z-index:2
  }

  .p-gauge-right>div>div{
    padding-left: 120px;
    padding-right: 120px;
    width: 100% !important;
    z-index:5
  }

  .p-gauge-left div,.p-gauge-right div{
    display: inline-block;
  }


}
</style>