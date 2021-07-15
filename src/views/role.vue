<template>
  <div>
    <navigationbar/>
    <div class="config">
      <titles principal-title="Cuentas"/>
      <div class="bottons">
        <v-icon class="back" @click="$router.push(`/admin`)">mdi-arrow-left</v-icon>
        <v-spacer></v-spacer>
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
    let variable = this.$store.state.user
    if (variable !== 'Administrador'){
      this.$router.push('/services')
    }
  },

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
  .config {
    width: 90%;
    margin: auto;
  }
}

@media all and (max-width: 440px) {
  .form__content{
    width: 20rem;

  }
}
@media all and (max-width: 400px) {
  .form__content{
    width: 17rem;
  }
}



</style>