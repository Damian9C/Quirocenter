<template>
  <div>
    <navigationbar/>
    <div class="config">
      <titles principal-title="Servicios"/>
      <div class="bottons">
      <v-icon class="back" @click="$router.push(`/admin`)">mdi-arrow-left</v-icon>
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
        <div  class="form__content">
          <titles principal-title="Añadir Nuevo Servicio"/>
          <br>
          <div>
            <v-text-field
                class="thing"
                label="Servicio"
                placeholder="Nombre del Servicio"
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
                label="Precio"
                placeholder="Precio del Servicio"
                rounded
                background-color="#349DB4"
                dense
                outlined
                v-model="precio"
            ></v-text-field>
          </div>
          <div>
            <v-btn
                class="white--text"
                color="#349DB4"
                @click="overlay = false"
                @click.prevent="addServe"
            >
              añadir
            </v-btn>
          </div>
          <br>
          <div>
            <v-btn
                class="white--text"
                color="#349DB4"
                @click="overlay = false"
            >
              cancelar
            </v-btn>
          </div>
        </div>
      </v-overlay>
      </div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th>
              Servicios
            </th>
            <th>
              Precio
            </th>
            <th>
              Acciones
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in services"
              :key="item.id"
          >
            <td>{{ item.name }}</td>
            <td>$ {{ item.precio }}</td>
            <td><v-btn
                class="btn__two"
                color="red"
                @click.prevent="deleteServe()"
            >
              borrar
            </v-btn></td>
            <v-dialog v-model="dialogDelete" max-width="520px">
              <v-card>
                <v-card-title class="text-h5">¿Seguro que quieres eliminar este servicio?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm(item.id)">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import {db} from '../util/index'
import Titles from "../components/titles";
import Navigationbar from "../components/navigationbar";
export default {
  name: "editService",
  components: {Navigationbar, Titles},
  data: () => ({
    overlay: false,
    zIndex: 1,
    dialogDelete: false,
    services: [],
  }),

  watch: {
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  mounted(){
    db.collection('services')
        .get()
        .then((r) => r.docs.map((item) => this.services.push({
          id: item.id,
          name: item.data().name,
          precio: item.data().precio,
        })))
  },

  methods: {
    addServe() {
      db.collection('services').add({
        name: this.name,
        precio: this.precio,
      })
          .then(() => this.$mount())
          .catch((error) => {
            alert.error("Error adding document: ", error);
          });
    },

    deleteItemConfirm (id) {
      db.collection('services').doc(id).delete().then(()=>this.$mount())
      this.closeDelete()
    },

    deleteServe () {
      this.dialogDelete = true
    },

    closeDelete () {
      this.dialogDelete = false
    },
  }
}
</script>
<style scoped>
.bottons{
  display: flex;
  flex-direction: row;
}

.config{
  width: 76%;
  margin: 1rem 10% 5% 20%;
}

.back{
  margin: 0.1rem 1% 5% 1%;
}

.form__content{
  background-color: #69C9DE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 43vh;
  height: 56vh;
}

.btn__two{
  color: white;
}

@media all and (max-width: 1350px) {
  .config{
    width: 74%;
    margin: 1rem 2% 5% 22%;
  }
}

@media all and (max-width: 1230px) {
  .config{
    width: 72%;
    margin: 1rem 2% 5% 24%;
  }
}
@media all and (max-width: 1130px) {
  .config{
    width: 71%;
    margin: 1rem 2% 5% 26%;
  }
}
@media all and (max-width: 1065px) {
  .config{
    width: 69%;
    margin: 1rem 2% 5% 28%;
  }
}

@media all and (max-width: 968px) {
  .config{
    width: 67%;
    margin: 1rem 2% 5% 30%;
  }
}

@media all and (max-width: 959px) {
  .config{
    width: 90%;
    margin: auto;
  }
}
@media all and (max-width: 425px) {
  .form__content{
    width: 37vh;
    height: 54vh;
  }
}

@media all and (max-width: 370px) {
  .form__content{
    width: 35vh;
    height: 54vh;
  }
}
</style>