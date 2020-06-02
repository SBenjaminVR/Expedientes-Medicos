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
        <v-toolbar-title>{{name}}</v-toolbar-title>
        <v-spacer></v-spacer>
        </v-toolbar>
        
        <br>
        <h2 class="ml-5 visitTitle">{{consulta.date}},  {{consulta.time}}</h2>
        <br>
        <h3 class="ml-5 visitTitle">Motivo de la Consulta:</h3>
        <v-container class="ml-3" fluid>
            <v-textarea
            name="input-7-1"
            solo
            label="Motivo de la consulta"
            auto-grow
            :value="consulta.motive"
            ></v-textarea>
        </v-container>
        <h3 class="ml-5 visitTitle">Evolución:</h3>
        <v-container class="ml-3" fluid>
            <v-textarea
            name="input-7-1"
            solo
            label="Evolución"
            auto-grow
            :value="consulta.evolution"
            ></v-textarea>
        </v-container>
        
        <h3 class="ml-5 visitTitle">Exploración Física:</h3>
        <v-text-field
        class="ml-5"
        v-model="consulta.exploracion.altura"
        label="Altura"
        ></v-text-field>

        <v-text-field
        class="ml-5"
        v-model="consulta.exploracion.peso"
        label="Peso"
        ></v-text-field>

        <v-text-field
        class="ml-5"
        v-model="consulta.exploracion.IMC"
        label="IMC"
        ></v-text-field>

        <v-container class="ml-3" fluid>
            <v-textarea
            name="input-7-1"
            solo
            label="Observación"
            auto-grow
            :value="consulta.exploracion.observacion"
            ></v-textarea>
        </v-container>

        <v-dialog class="ml-5" v-model="deleteDialog" max-width="350">
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
      visitId: '',
      consulta: {},
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
    getInfo: function(patientId, id) {
        if (patientId == '001'){
            this.name = "Mariano García Alipi"
            if (id == '001') {
                var consulta = {
                    id: '001',
                    patientId: '001',
                    date: moment("25-5-2020", "DD/MM/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "4:00pm",
                    motive: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    evolution: '',
                    exploracion: {
                      altura: '',
                      peso: '',
                      IMC: '',
                      observacion: ''
                    },
                    delete: false,
                };
            }
            else if (id == '002') {
                var consulta = {
                    id: '002',
                    patientId: "001",
                    date: moment("5/29/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "4:00pm",
                    motive: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    evolution: '',
                    exploracion: {
                      altura: '',
                      peso: '',
                      IMC: '',
                      observacion: ''
                    },
                    delete: false,
                };
            }
            else if (id == '003') {
                var consulta = {
                    id: '003',
                    patientId: '001',
                    date: moment("5/31/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "2:00pm",
                    motive: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    evolution: '',
                    exploracion: {
                      altura: '',
                      peso: '',
                      IMC: '',
                      observacion: ''
                    },
                    delete: false,
                };
            }
        }
        else if (patientId == '002') {
            this.name = "Pablo Moreno Tamez"
            if (id == '001') {
                var consulta = {
                    id: '001',
                    patientId: '002',
                    date: moment("12-5-2020", "DD/MM/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "3:00pm",
                    motive: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    evolution: '',
                    exploracion: {
                      altura: '',
                      peso: '',
                      IMC: '',
                      observacion: ''
                    },
                    delete: false,
                };
            }
            else if (id == '002') {
                var consulta = {
                    id: '002',
                    patientId: "002",
                    date: moment("5/21/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "9:00am",
                    motive: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    evolution: '',
                    exploracion: {
                      altura: '',
                      peso: '',
                      IMC: '',
                      observacion: ''
                    },
                    delete: false,
                };
            }
            else if (id == '003') {
                var consulta = {
                    id: '003',
                    patientId: '002',
                    date: moment("5/30/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "8:00pm",
                    motive: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    evolution: '',
                    exploracion: {
                      altura: '',
                      peso: '',
                      IMC: '',
                      observacion: ''
                    },
                    delete: false,
                };
            }        
        }
        else if (patientId = '003') {
            this.name = "Benjamín Valdez Rodriguez"
            if (id == '001') {
                var consulta = {
                    id: '001',
                    patientId: '003',
                    date: moment("20-4-2020", "DD/MM/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "7:00pm",
                    motive: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    evolution: '',
                    exploracion: {
                      altura: '',
                      peso: '',
                      IMC: '',
                      observacion: ''
                    },
                    delete: false,
                };
            }
            else if (id == '002') {
                var consulta = {
                    id: '002',
                    patientId: "003",
                    date: moment("5/5/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "5:00pm",
                    motive: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    evolution: '',
                    exploracion: {
                      altura: '',
                      peso: '',
                      IMC: '',
                      observacion: ''
                    },
                    delete: false,
                };
            }
            else if (id == '003') {
                var consulta = {
                    id: '003',
                    patientId: '003',
                    date: moment("5/15/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "6:00pm",
                    motive: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    evolution: '',
                    exploracion: {
                      altura: '',
                      peso: '',
                      IMC: '',
                      observacion: ''
                    },
                    delete: false,
                };
            }        
        }
    //   this.$http.get("Customers").then(
    //     response => {
    //       var list = response.body;
    //       _.each(list, customer => {
    //         customer.name = customer.lastName ? customer.name + " " + customer.lastName : customer.name;
    //       })
        this.consulta = consulta;
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
    var pId = this.$route.params.id;
    var vId = this.$route.params.visitId;
    this.patientId = this.$route.params.id;
    this.visitId = this.$route.params.visitId;
    
    this.getInfo(pId, vId);
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

  .visitTitle{
      color: #26A69A;
  }


}
</style>