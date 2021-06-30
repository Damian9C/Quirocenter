<template>
  <div>
    <navigationbar/>
    <div class="config">
      <titles principal-title="Servicios"/>
      <v-icon class="back" @click="$router.push(`/admin`)">mdi-arrow-left</v-icon>
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
  })
}
</script>

<style scoped>
.config{
  width: 75%;
  margin: 1rem 10% 5% 23%;
}

</style>