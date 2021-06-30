<template>
  <div>
    <navigationbar/>
    <div class="config">
      <titles principal-title="Roles"/>
      <v-icon class="back" @click="$router.push(`/admin`)">mdi-arrow-left</v-icon>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th>
              Usuarios
            </th>
            <th>
              Roles
            </th>
            <th>
              Acciones
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in desserts"
              :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.rol }}</td>
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
  name: "role",
  components: {Navigationbar, Titles},
  data: () => ({
    desserts: [
      {
        name: 'Dra. Fernanda',
        rol: 'administrador',
      },
      {
        name: 'Dr. erick',
        rol: 'doctor',
      },
      {
        name: 'Eclair',
        rol: 'asistente',
      }]
  })
}
</script>

<style scoped>
.config{
  width: 75%;
  margin: 1rem 2% 5% 22%;
}
.back{
  margin: 0.1rem 1% 5% 2%;
}
</style>