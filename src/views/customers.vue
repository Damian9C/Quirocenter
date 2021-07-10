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
                  class="thing"
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
                  class="thing"
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
                  class="thing"
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
                  class="thing"
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
                  class="white--text"
                  color="teal"
                  @click="overlay = false"
                  @click.prevent="addCustom"
              >
                añadir
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
              @click=""
          >
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
          <v-btn
              small
              @click="deleteItem(item)"
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
    lore: null,
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
    dessert:[]
  }),

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
            console.error("Error adding document: ", error);
          });
    }
  }
}
</script>

<style scoped>
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
  height: 65vh;
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
    height: 62vh;
  }
}
@media all and (max-width: 370px) {
  .form__content{
    width: 35vh;
    height: 60vh;
  }
}

</style>