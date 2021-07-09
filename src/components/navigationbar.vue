<template>
  <div>
    <v-app-bar
        color="#69C9DE"
        dense
        elevation="0"
        app
    >
      <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = true" id="color"></v-app-bar-nav-icon>
      <h1 class="navigationBar__title" @click="$router.push('/services')">
        Quirocenter
      </h1>
    </v-app-bar>

    <v-navigation-drawer
        absolute
        :permanent="$vuetify.breakpoint.mdAndUp"
        class="navigationDrawerCmp"
        v-model="drawer"
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
        >
          <v-list-item to="/services">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/quotes">
            <v-list-item-icon>
              <v-icon>mdi-calendar</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Citas</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/customers">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Clientes</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/admin">
            <v-list-item-icon>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Configuracion</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider/><br/>

          <v-list-item @click="">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title @click.prevent="logout">Cerrar Sesion</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "navigationbar",
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods:{
    logout(){
      firebase.auth().signOut().then(()=>{
        this.$router.push({name:'home'})
      })
    }
  },
}
</script>

<style scoped>
  .navigationBar__title{
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    background-color: #69C9DE;
    font-size: 1.5rem;
  }

  .navigationBar__title:hover{
    cursor: pointer;
  }

  #color{
   color: white;
  }

</style>