<template>
  <div>
    <navigationbar/>
    <div class="customerCmp">
      <titles principal-title="Clientes"/>
      <div class="bottons">
        <v-spacer></v-spacer>
        <v-btn
            class="btn__two"
            color="teal"
            @click="overlay = !overlay"
            v-show="visible"
        >
          agregar
        </v-btn>
        <v-overlay
            :z-index="zIndex"
            :value="overlay"
        >
          <div class="form__content">
            <titles principal-title="Añadir Nuevo Cliente"/>
            <br>
            <div>
              <v-text-field
                  id="name"
                  label="Nombre"
                  placeholder="Nombre Completo"
                  rounded
                  background-color="#349DB4"
                  dense
                  outlined
                  v-model="name"
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                  id="phone"
                  label="Numero"
                  placeholder="Numero Telefonico"
                  rounded
                  background-color="#349DB4"
                  dense
                  outlined
                  v-model="phone"
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                  id="age"
                  label="Edad"
                  placeholder="Edad"
                  rounded
                  background-color="#349DB4"
                  dense
                  outlined
                  v-model="age"
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                  id="address"
                  label="Direccion"
                  placeholder="Direccion Completa"
                  rounded
                  background-color="#349DB4"
                  dense
                  outlined
                  v-model="address"
              ></v-text-field>
          </div>
          <div>
            <v-btn
                id="botton"
                color="teal"
                @click="overlay = false"
                @click.prevent="addCustom"
            >
              añadir
            </v-btn>
          </div>
            <br>
          <div>
            <v-btn
                class="white--text"
                color="teal"
                @click="overlay = false"
            >
              cancelar
            </v-btn>
          </div>
          </div>
        </v-overlay>
      </div>
      <v-data-table
          :headers="headers"
          :items="customer"
          class="elevation-0"
          :search="search"
      >
        <template v-slot:top>
          <v-text-field
              v-model="search"
              label="Buscar"
              class="mx-4"
          ></v-text-field>
          <v-divider/>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-dialog v-model="dialogDelete" max-width="540px">
            <v-card>
              <v-card-title class="text-h5">¿Seguro que quieres eliminar a este cliente?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm()">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
<!--          aqui se muestra otro dialogo-->
          <v-dialog v-model="editCustom" max-width="540px">
            <v-card>
              <Titles principal-title="Editar Usuario:"/>
              <div class="content__edit">
                <h1>{{userSelected.name}}</h1>
                <br>
                <div>
                  <v-text-field
                      class="thing"
                      label="Numero"
                      placeholder="Numero Telefonico"
                      rounded
                      background-color="#DADADA"
                      dense
                      outlined
                      v-model="telefono"
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                      class="thing"
                      label="Edad"
                      placeholder="Edad"
                      rounded
                      background-color="#DADADA"
                      dense
                      outlined
                      v-model="edad"
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                      class="thing"
                      label="Direccion"
                      placeholder="Direccion Completa"
                      rounded
                      background-color="#DADADA"
                      dense
                      outlined
                      v-model="direccion"
                  ></v-text-field>
                </div>
              </div>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeEdit">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="updateCustom()">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn
              small
              @click="$router.push(`/customer/${item.id}`)"
          >
            <v-icon>
              mdi-eye
            </v-icon>
          </v-btn>
          <v-btn
              small
              @click="dialogEdit(); userSelected = item"
              v-show="visible"
          >
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
          <v-btn
              small
              @click="deleteCustom(); userSelected = item"
              v-show="visible"
          >
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
      </v-data-table>
      <br/><br/>
    </div>
  </div>
</template>
<script>
import {db} from '../util/index'
import Titles from "../components/titles";
import Navigationbar from "../components/navigationbar";
export default {
  name: "customers",
  components: {Navigationbar, Titles},
  data: () => ({
    search: '',
    overlay: false,
    dialogDelete: false,
    editCustom: false,
    zIndex: 1,
    customer:[],
    headers: [
      {
        text: 'Nombre',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Telefono', value: 'phone' },
      { text: 'Edad', value: 'age' },
      { text: 'Direccion', value: 'address' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    userSelected: "",

    visible: false,
  }),

  watch: {
    dialogDelete (val) {
      val || this.closeDelete()
    },
    editCustom (val) {
      val || this.closeEdit()
    },
  },

  mounted(){
    db.collection('customer')
        .get()
        .then((r) => r.docs.map((item) => this.customer.push({
          id:item.id,
          name: item.data().name,
          phone: item.data().phone,
          age: item.data().age,
          address: item.data().address,
        })))
  },

  methods: {
    addCustom() {
      db.collection("customer").add({
        name: this.name,
        phone: this.phone,
        age: this.age,
        address: this.address,
      })
          .then(() => this.$mount())
          .catch((error) => {
            alert.error("Error adding document: ", error);
          });
    },

    deleteItemConfirm () {
      db.collection('customer').doc(this.userSelected.id).delete().then(()=>this.$mount())
      this.closeDelete()
    },

    deleteCustom () {
      this.dialogDelete = true
    },

    closeDelete () {
      this.dialogDelete = false
    },

    updateCustom(){
      db.collection('customer').doc(this.userSelected.id).update({
        phone: this.telefono,
        age: this.edad,
        address: this.direccion,
      }).then(()=>this.$mount())
      this.closeEdit()
    },

    dialogEdit() {
      this.editCustom = true
    },

    closeEdit(){
      this.editCustom = false
    },

    isVisible(){
      let variable = this.$store.state.user

      if (variable === 'Administrador' || variable === 'Asistente'){
        this.visible = true;
      }
    }
  }
}
</script>

<style scoped>
.content__edit{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bottons{
  display: flex;
  flex-direction: row;
}

.form__content{
  background-color: #69C9DE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 45vh;
  height: 73vh;
}

.btn__two{
  color: white;
}

.customerCmp{
  width: 77%;
  margin: 1rem 2% 5% 19%;
}

@media all and (max-width: 1230px) {
  .customerCmp{
    width: 74%;
    margin: 1rem 2% 5% 23%;
  }
}
@media all and (max-width: 1160px) {
  .customerCmp{
    width: 73%;
    margin: 1rem 2% 5% 24%;
  }
}
@media all and (max-width: 1110px) {
  .customerCmp{
    width: 73%;
    margin: 1rem 2% 5% 25%;
  }
}

@media all and (max-width: 1060px) {
  .customerCmp{
    width: 72%;
    margin: 1rem 2% 5% 26%;
  }
}

@media all and (max-width: 1030px) {
  .customerCmp{
    width: 71%;
    margin: 1rem 2% 5% 27%;
  }
}

@media all and (max-width: 990px) {
  .customerCmp{
    width: 70%;
    margin: 1rem 2% 5% 28%;
  }
}

@media all and (max-width: 959px) {
  .customerCmp{
    width: 90%;
    margin: auto;
  }
}

@media all and (max-width: 425px) {
  .form__content{
    width: 40vh;
    height: 73vh;
  }
}
@media all and (max-width: 370px) {
  .form__content{
    width: 35vh;
    height: 73vh;
  }
}

</style>