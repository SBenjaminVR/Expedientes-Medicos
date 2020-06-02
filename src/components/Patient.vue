<template>
    <div class="expedientes-design">
        <v-toolbar flat color="transparent">
        <v-toolbar-title>{{patientData.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
        </v-toolbar>
        
        <br>
        
        <h3 class="patientTitle">Datos del paciente:</h3>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="patientData.name"
            :rules="nameRules"
            label="Nombre Paciente"
            required
            ></v-text-field>

            <v-text-field
            v-model="patientData.email"
            :rules="emailRules"
            label="Correo"
            required
            ></v-text-field>

            <v-select
            v-model="patientData.sex"
            :items="sexos"
            :rules="[v => !!v || 'Sexo requerido']"
            label="Sexo"
            required
            ></v-select>

            <v-menu
            v-model="patientData.dob"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
            >
                <template v-slot:activator="{ on }">
                    <v-text-field
                    label="Fecha Nacimiento"
                    prepend-icon="event"
                    readonly
                    :value="DOBDisp"
                    v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                    locale="es-MX"
                    v-model="dobPicker"
                    color="primary"
                    no-title
                    @input="patientData.dob = false"
                ></v-date-picker>
            </v-menu>

            <v-select
            v-model="patientData.estadoCivil"
            :items="eCivil"
            label="Estado civil"
            ></v-select>

            <v-menu
            v-model="patientData.firstDate"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
            >
                <template v-slot:activator="{ on }">
                    <v-text-field
                    label="Fecha 1a. Cita"
                    prepend-icon="event"
                    readonly
                    :value="FirstAppointmentDisp"
                    v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                    locale="es-MX"
                    v-model="firstPicker"
                    color="primary"
                    no-title
                    @input="patientData.firstDate = false"
                ></v-date-picker>
            </v-menu>

            <v-container fluid>
                <v-textarea
                name="input-7-1"
                outlined
                label="Alergias"
                auto-grow
                v-model="patientData.alergias"
                ></v-textarea>
            </v-container>

            <v-btn
            :disabled="!valid"
            color="primary"
            class="mr-4"
            @click="validate"
            >
            Guardar
            </v-btn>

            <v-btn
            color="accent2"
            class="mr-4"
            dark
            @click="goBack()"
            >
            Cancelar
            </v-btn>
        </v-form>
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
        valid: true,
      patientId: '',
      patientData: {
            name: '',
            email: '',
            sex: '',
            dob: false,
            estadoCivil: '',
            firstDate: false,
            alergias: '',
      },
      sexos: ['Femenino', 'Masculino'],
      dobPicker: null,
      firstPicker: null,
      eCivil: ['Soltero', 'Casado', 'Divorciado', 'Viudo'],
      nameRules: [
        v => !!v || 'Nombre requerido',
      ],
      emailRules: [
        v => !!v || 'Correo requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
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
  computed: {
      DOBDisp() {
          return this.dobPicker;
      },
      FirstAppointmentDisp() {
          return this.firstPicker;
      }
  },
  methods: {
    // snackbar: function(message) {
    // //   events.$emit("snackbar", message);
    // },
    validate () {
        this.$refs.form.validate()
        this.goBack()
      },
      reset () {
        this.$refs.form.reset()
      },
    goBack() {
      window.history.back();
    },
    confirmDelete: function(id) {
      this.itemToDelete = id;
      this.deleteDialog = true;
    },
    goTo(url) {
      var self = this;
      self.$router.push("/" + url);
    },
    getInfo: function(patientId, id) {
        if (patientId == '001'){
            this.patientData.name = "Mariano García Alipi"
            if (id == '001') {
                var consulta = {
                    id: '001',
                    patientId: '001',
                    date: moment("25-5-2020", "DD/MM/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "4:00pm",
                    text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    delete: false,
                };
            }
            else if (id == '002') {
                var consulta = {
                    id: '002',
                    patientId: "001",
                    date: moment("5/29/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "4:00pm",
                    text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    delete: false,
                };
            }
            else if (id == '003') {
                var consulta = {
                    id: '003',
                    patientId: '001',
                    date: moment("5/31/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "2:00pm",
                    text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    delete: false,
                };
            }
        }
        else if (patientId == '002') {
            this.patientData.name = "Pablo Moreno Tamez"
            if (id == '001') {
                var consulta = {
                    id: '001',
                    patientId: '002',
                    date: moment("12-5-2020", "DD/MM/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "3:00pm",
                    text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    delete: false,
                };
            }
            else if (id == '002') {
                var consulta = {
                    id: '002',
                    patientId: "002",
                    date: moment("5/21/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "9:00am",
                    text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    delete: false,
                };
            }
            else if (id == '003') {
                var consulta = {
                    id: '003',
                    patientId: '002',
                    date: moment("5/30/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "8:00pm",
                    text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    delete: false,
                };
            }        
        }
        else if (patientId = '003') {
            this.patientData.name = "Benjamín Valdez Rodriguez"
            if (id == '001') {
                var consulta = {
                    id: '001',
                    patientId: '003',
                    date: moment("20-4-2020", "DD/MM/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "7:00pm",
                    text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    delete: false,
                };
            }
            else if (id == '002') {
                var consulta = {
                    id: '002',
                    patientId: "003",
                    date: moment("5/5/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "5:00pm",
                    text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
                    delete: false,
                };
            }
            else if (id == '003') {
                var consulta = {
                    id: '003',
                    patientId: '003',
                    date: moment("5/15/2020", "MM/DD/YYYY").format("ddd DD/MMM/YYYY"),
                    time: "6:00pm",
                    text: "PADECIMIENTO ACTUAL, 48 AÑOS EDAD TALALGIA BILATERAL PREDOMINIO IZQUIERDO, REFIERE QUE LE DUELE DURANTE LAS MAÑANAS O DESPUES DE TIEMPOS PROLONGADOS DE REPOSO. YA HA UTILIZADO MEDICAMENTOS.",
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

  .patientTitle{
      color: #26A69A;
  }


}
</style>