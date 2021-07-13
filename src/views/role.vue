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
            color="green"

            @click.prevent="overlay = !overlay"
        >
          Nueva Contraseña
        </v-btn>
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
          </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-overlay
          :z-index="zIndex"
          :value="overlay"
      >
        <div class="form__content">
          <titles principal-title="Cambiar Contraseña"/>
          <div><br/>
            <v-text-field
                label="Contraseña"
                rounded
                background-color="#349DB4"
                dense
                outlined
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                v-model="pass"
            ></v-text-field>
          </div><br/>
          <div>
            <v-btn
                id="botton"
                color="teal"
                @click="overlay = false"
                @click.prevent="changePass()"
            >
              cambiar
            </v-btn>
          </div>
          <br>
          <div>
            <v-btn
                class="role__inputsBtn"
                color="teal"
                small
                @click="overlay = false"
            >
              cancelar
            </v-btn>
          </div>
        </div>
      </v-overlay>

    </div>
  </div>
</template>

<script>
import {auth , db} from '../util/index'
import Titles from "../components/titles";
import Navigationbar from "../components/navigationbar";
import firebase from "firebase";
export default {
  name: "role",
  components: {Navigationbar, Titles},
  data: () => ({
    overlay: false,
    zIndex: 1,
    dialogDelete: false,
    users: [],
    show1: false,
    items:['Administrador','Doctor','Asistente'],
    userSelected: null,
    pass: "",
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
    changePass(){
      try {
        const user = firebase.auth().currentUser;
        const newPassword = this.pass;

        user.updatePassword(newPassword).then(() => {
        }).catch((error) => {
          console.log(error)
        });

      }catch (e) {
        console.log(e)
      }
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

.role__inputsBtn{
  margin-bottom: 1rem;
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