<template>
  <div>
    <navigationbar/>
    <div class="customer__data">
      <Titles principal-title="Perfil de Usuario"/>
      <v-icon size="28" class="back" @click="$router.push(`/customers`)">mdi-arrow-left</v-icon>
      <div>
        <br/>
        <br/>
        <h1 class="customer--title">Nombre</h1>
        <p class="customer--txt">{{ customer.name}}</p>
        <h1 class="customer--title">Telefono</h1>
        <p class="customer--txt">{{ customer.phone }}</p>

        <h1 class="customer--title">Edad</h1>
        <p class="customer--txt">{{ customer.age }}</p>

        <h1 class="customer--title">Direccion</h1>
        <p class="customer--txt">{{ customer.address }}</p>
      </div>
      <v-spacer/>
    </div>
    <div class="customer__data--btn">
      <v-btn
          color="#2DA4D9"
          dark
          elevation="3"
          x-large
          @click="$router.push(`/customers/responsiva`)"
      >
        Responsiva
        <v-icon right >
          mdi-file-document-outline
        </v-icon>
      </v-btn>
    </div>
    <br/><br/>
    <div class="table">
      <div class="id__btnAdd">
        <h1 class="customer--title">Historial:</h1><br/>
        <v-spacer/>
        <v-btn
            class="btn__two"
            color="teal"
            dark
            @click="overlay = !overlay"
            v-if="seeSecretary"
        >
          agregar
        </v-btn>
      </div>
      <br/>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              Fecha
            </th>
            <th class="text-left">
              Doctor
            </th>
            <th class="text-left">
              Detalles
            </th>
            <th v-if="see" class="text-left">
              Acciones
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in customer.quotes"
              :key="item.id"
          >
            <td>{{ item.date }}</td>
            <td>{{ item.doctor }}</td>
            <td>{{ item.details }}</td>
            <td><v-btn
                class="btn__two"
                color="red"
                dark
                small
                @click.prevent="dialogDelete = !dialogDelete; itemSelected = item"
                v-if="see"
            >
              borrar
            </v-btn></td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <br/><br/><br/><br/>

    <v-dialog v-model="dialogDelete" max-width="540px">
      <v-card>
        <v-card-title class="text-h5">¿Seguro que quieres eliminar este Elemento?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogDelete = !dialogDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm()">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-overlay
        :z-index="zIndex"
        :value="overlay"
    >
      <div class="form__content">
        <titles principal-title="Historial"/>
        <br>
        <div class="id__inputs">
          <v-text-field
              id="name"
              label="Nombre del Doctor"
              rounded
              background-color="#349DB4"
              dense
              outlined
              v-model="nameDoc"
          ></v-text-field>
        </div>
        <div class="id__inputs">
          <v-text-field
              id="phone"
              label="Detalle"
              rounded
              background-color="#349DB4"
              dense
              outlined
              v-model="details"
          ></v-text-field>
        </div>
        <div class="id__inputs">
          <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              persistent
              width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="date"
                  label="Seleccionar día"
                  append-icon="mdi-calendar"
                  rounded
                  background-color="#349DB4"
                  dense
                  outlined
                  v-bind="attrs"
                  v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
                v-model="date"
                scrollable
                locale="es-Es"
            >
              <v-spacer></v-spacer>
              <v-btn
                  text

                  color="primary"
                  @click="modal = false"
              >
                Cancel
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </div>
        <div>
          <v-btn
              id="botton"
              color="#349DB4"
              @click="addCustom"
          >
            añadir
          </v-btn>
        </div>
        <br>
        <div>
          <v-btn
              dark
              class="id__btnCancel"
              color="#349DB4"
              small
              @click="overlay = false"
          >
            cancelar
          </v-btn>
        </div>
      </div>
    </v-overlay>

  </div>
</template>

<script>
import Navigationbar from "../../components/navigationbar";
import Titles from "../../components/titles";
import {db} from "../../util";
export default {
  name: "id",
  components: {Navigationbar, Titles},
  data(){
    return{
      customer: {},
      overlay: false,
      dialogDelete: false,
      zIndex: 1,
      see: false,
      seeSecretary: true,
      nameDoc: '',
      details: '',
      itemSelected:'',

      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
    }
  },

  mounted() {
    this.fetchFirebaseId();
  },

  methods: {

    isVisible(){
      let variable = this.$store.state.user
      console.log(variable)
      if (variable === 'Administrador' ){
        this.see = true;
      }
      if (variable === 'Asistente'){
        this.seeSecretary = false;
      }
    },

    fetchFirebaseId(){
      let routeId = this.$route.params.id

      db.collection('customer')
          .get()
          .then((r) => r.docs.map((item) => {
            if ( routeId === item.id ){
              this.customer = ({
                id:item.id,
                name: item.data().name,
                phone: item.data().phone,
                age: item.data().age,
                address: item.data().address,
                quotes: item.data().quotes,
              })
            }
          }))
      this.isVisible();
    },

    addCustom(){
      let quote = {
        date: this.date,
        doctor: this.nameDoc,
        details: this.details,
      }
      this.customer.quotes.push( quote )
      let data = {
        phone: this.customer.phone,
        age: this.customer.age,
        address: this.customer.address,
        quotes: this.customer.quotes,
      }

      db.collection('customer').doc(this.customer.id).update(data).then(()=>this.fetchFirebaseId())
      this.overlay = false;
    },
    deleteItemConfirm() {
      let valor = this.customer.quotes.indexOf(this.itemSelected)
      this.customer.quotes.splice( valor ,1 )

      let data = {
        phone: this.customer.phone,
        age: this.customer.age,
        address: this.customer.address,
        quotes: this.customer.quotes,
      }

      db.collection('customer').doc(this.customer.id).update(data).then(()=>this.fetchFirebaseId())
      this.dialogDelete = false;
    },
  },
}
</script>

<style scoped>
.customer--title{
  font-size: 2rem;
  font-weight: bold;
}

.customer__data--btn {
  padding-right: 7rem;
  display: flex;
  justify-content: flex-end;
}

.customer--txt{
  font-size: 1.5rem;
}

.customer__data{
  width: 73%;
  margin: 1rem 2% 5% 20%;
}

.table{
  width: 77%;
  margin: 1rem 2% 5% 20%;
}

.id__btnAdd{
  display: flex;
}

.id__inputs{
  width: 70%;
}

.id__btnCancel{
  margin-bottom: 1rem;
  margin-top: -10px;
}

.form__content{
  background-color: #69C9DE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 45vh;
}

@media all and (max-width: 1360px) {
  .customer__data{
    width: 77%;
    margin: 1rem 2% 5% 22%;
  }
  .table{
    width: 76%;
    margin: 1rem 2% 5% 22%;
  }
}

@media all and (max-width: 1230px) {
  .customer__data{
    width: 71%;
    margin: 1rem 2% 5% 24%;
  }
  .table{
    width: 71%;
    margin: 1rem 2% 5% 24%;
  }
}
@media all and (max-width: 1130px) {
  .customer__data{
    width: 69%;
    margin: 1rem 2% 5% 26%;
  }
  .table{
    width: 69%;
    margin: 1rem 2% 5% 26%;
  }
  .customer__data--btn {
    padding-right: 6rem;
  }
}
@media all and (max-width: 1065px) {
  .customer__data{
    width: 67%;
    margin: 1rem 2% 5% 28%;
  }
  .table{
    width: 67%;
    margin: 1rem 2% 5% 28%;
  }
  .customer__data--btn {
    padding-right: 5rem;
  }
}

@media all and (max-width: 968px) {
  .customer__data{
    width: 65%;
    margin: 1rem 2% 5% 30%;
  }
  .table{
    width: 65%;
    margin: 1rem 2% 5% 30%;
  }
}

@media all and (max-width: 958px) {
  .customer__data{
    width: 90%;
    margin: auto;
  }
  .table{
    width: 90%;
    margin: auto;
  }
}

@media all and (max-width: 420px) {
  .form__content{
    width: 20rem;
  }
}

@media all and (max-width: 360px) {
  .form__content{
    width: 15rem;
  }
}


</style>