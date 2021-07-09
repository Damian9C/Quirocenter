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
          color="green"
          @click="secret"
      >
        agregar
      </v-btn>
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
              Editar
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in desserts"
              :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.precio }}</td>
            <td><v-icon @click="$router.push(`/admin`)"> mdi-dots-vertical </v-icon></td>
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
    desserts: [
      {
        name: 'Servicio 1',
        precio: 500,
      },
      {
        name: 'Servicio 2',
        precio: 350,
      },
      {
        name: 'Servicio 3',
        precio: 450,
      }]
  }),
  methods:{
    secret(){
      db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
      })
          .then((docRef) => {

          })
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

.config{
  width: 76%;
  margin: 1rem 10% 5% 20%;
}

.back{
  margin: 0.1rem 1% 5% 1%;
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
</style>