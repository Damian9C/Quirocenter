<template>
  <div>
    <navigationbar/>
    <div class="services__container">
      <titles principal-title="Servicios"/>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th>
              Tipo de Servicio
            </th>
            <th>
              Precio
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in desserts"
              :key="item.name"
          >
            <td v-for="item in services" v-bind:key="item.id">{{ item.data.name}}</td>
            <td v-for="item in services" v-bind:key="item.id">{{ item.data.precio }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>
<script>
import Titles from "../components/titles";
import Navigationbar from "../components/navigationbar";
import {db} from '../util/index'
export default {
  name: "services",
  components: {Navigationbar, Titles},
  data: () => ({
    desserts: [
      {
        name: null,
        precio: null,
        services: [],
      }],
    services:[]
  }),
  mounted(){
    db.collection('services').get().then((r) => r.docs.map((item) => this.services.push({id:item.id, data:item.data()})))
  }
}
</script>
<style scoped>
.services__container{
  width: 77%;
  margin: 1rem 2% 5% 19%;
}

@media all and (max-width: 1230px) {
  .services__container{
    width: 72%;
    margin: 1rem 2% 5% 23%;
  }
}

@media all and (max-width: 1130px) {
  .services__container{
    width: 71%;
    margin: 1rem 2% 5% 25%;
  }
}

@media all and (max-width: 1065px) {
  .services__container{
    width: 71%;
    margin: 1rem 2% 5% 26%;
  }
}

@media all and (max-width: 1030px) {
  .services__container{
    width: 69%;
    margin: 1rem 2% 5% 28%;
  }
}

@media all and (max-width: 959px) {
  .services__container{
    width: 90%;
    margin: auto;
  }
}
</style>