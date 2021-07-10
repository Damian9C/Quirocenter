<template>
  <div>
    <navigationbar/>
    <div class="config">
      <titles principal-title="Cuentas"/>
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
            <titles principal-title="Añadir Nuevo Usuario"/>
            <br>
            <div>
              <v-text-field
                  class="thing"
                  label="Nombre"
                  placeholder="Nombre del Usuario"
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
                  label="email"
                  placeholder="email"
                  rounded
                  background-color="#349DB4"
                  dense
                  outlined
                  v-model="email"
              ></v-text-field>
            </div>
            <div>
              <v-select
                  :items="items"
                  label="Tipo de cuenta"
                  background-color="#349DB4"
                  rounded
                  dense
                  outlined
                  v-model="cuenta"
              ></v-select>
            </div>
            <div>
              <v-btn
                  class="white--text"
                  color="teal"
                  @click="overlay = false"
                  @click.prevent="addUser"
              >
                añadir
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
              Usuarios
            </th>
            <th>
              Cuentas
            </th>
            <th>
              Correos
            </th>
            <th>
              Acciones
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in users"
              :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.cuenta }}</td>
            <td>{{ item.email }}</td>
            <td><v-btn
                class="btn__two"
                color="red"
                @click.prevent="deleteUser()"
            >
              borrar
            </v-btn></td>
            <v-dialog v-model="dialogDelete" max-width="540px">
              <v-card>
                <v-card-title class="text-h5">¿Seguro que quieres eliminar esta cuenta?</v-card-title>
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
  name: "role",
  components: {Navigationbar, Titles},
  data: () => ({
    overlay: false,
    zIndex: 1,
    dialogDelete: false,
    users: [],
    items:['Administrador','Doctor','Asistente'],
  }),

  mounted(){
    db.collection('users')
        .get()
        .then((r) => r.docs.map((item) => this.users.push({
          id:item.id,
          name:item.data().name,
          cuenta: item.data().cuenta,
          email:item.data().email,
        })))
  },

  watch: {
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  methods:{
    addUser(){
      db.collection('users').add({
        name: this.name,
        cuenta: this.cuenta,
        email: this.email,
      })
          .then(() => this.$mount())
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
    },

    deleteItemConfirm (id) {
      db.collection('users').doc(id).delete().then(()=>this.$mount())
      this.closeDelete()
    },

    deleteUser () {
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

.form__content{
  background-color: #69C9DE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 47vh;
  height: 56vh;
}

.btn__two{
  color: white;
}

.config{
  width: 75%;
  margin: 1rem 2% 5% 19%;
}
.back{
  margin: 0.1rem 1% 5% 1%;
}

@media all and (max-width: 1400px) {
  .config{
    width: 75%;
    margin: 1rem 2% 5% 21%;
  }
}

@media all and (max-width: 1275px) {
  .config{
    width: 73%;
    margin: 1rem 2% 5% 22%;
  }
}

@media all and (max-width: 1230px) {
  .config{
    width: 73%;
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
    margin: 1rem 2% 5% 27%;
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

@media all and (max-width: 440px) {
  .form__content{
    width: 46vh;
    height: 55vh;
  }
}
@media all and (max-width: 400px) {
  .form__content{
    width: 44vh;
    height: 55vh;
  }
  }

}

</style>