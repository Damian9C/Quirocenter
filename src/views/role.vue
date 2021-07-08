<template>
  <div>
    <navigationbar/>
    <div class="config">
      <titles principal-title="Cuentas"/>
      <v-icon class="back" @click="$router.push(`/admin`)">mdi-arrow-left</v-icon>
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
              v-for="item in desserts"
              :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.rol }}</td>
            <td>{{ item.email }}</td>
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
        email: 'admin@gmail.com'
      },
      {
        name: 'Dr. erick',
        rol: 'doctor',
        email: 'doctor@gmail.com'
      },
      {
        name: 'Eclair',
        rol: 'asistente',
        email: 'asistente@gmail.com'
      }]
  })
}
</script>

<style scoped>
.config{
  width: 75%;
  margin: 1rem 2% 5% 23%;
}
.back{
  margin: 0.1rem 1% 5% 2%;
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
    width: 75%;
    margin: auto;
  }
}

</style>