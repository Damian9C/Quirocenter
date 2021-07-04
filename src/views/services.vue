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
            <td>{{ item.name }}</td>
            <td>{{ item.precio }}</td>
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
import { auth } from '../util/index'
import { onMounted } from 'vue'
export default {
  name: "services",
  components: {Navigationbar, Titles},
  data: () => ({
    desserts: [
      {
        name: 'Frozen Yogurt',
        precio: 159,
      },
      {
        name: 'Ice cream sandwich',
        precio: 237,
      },
      {
        name: 'Eclair',
        precio: 262,
      },
      {
        name: 'Cupcake',
        precio: 305,
      },
      {
        name: 'Gingerbread',
        precio: 356,
      },
      {
        name: 'Jelly bean',
        precio: 375,
      },
      {
        name: 'Lollipop',
        precio: 392,
      },
      {
        name: 'Honeycomb',
        precio: 408,
      },
      {
        name: 'Donut',
        precio: 452,
      },
      {
        name: 'KitKat',
        precio: 518,
      },
    ]
  }),
  async mounted() {
    await auth.onAuthStateChanged((user) => {
      console.log(user)
    })
  }
}
</script>

<style scoped>
.services__container{
  width: 75%;
  margin: 1rem 2% 5% 22%;
}

@media all and (max-width: 1230px) {
  .services__container{
    width: 73%;
    margin: 1rem 2% 5% 24%;
  }
}
@media all and (max-width: 1130px) {
  .services__container{
    width: 71%;
    margin: 1rem 2% 5% 26%;
  }
}
@media all and (max-width: 1065px) {
  .services__container{
    width: 69%;
    margin: 1rem 2% 5% 28%;
  }
}

@media all and (max-width: 968px) {
  .services__container{
    width: 67%;
    margin: 1rem 2% 5% 30%;
  }
}

@media all and (max-width: 959px) {
  .services__container{
    width: 75%;
    margin: auto;
  }
}
</style>