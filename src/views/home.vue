<template>
  <div class="window">
    <div class="access">
      <h1 class="access__title">
        Quirocenter
      </h1>
      <div class="img">
      </div>
      <h2 style="font-size: 24px;" >iniciar sesion</h2>
      <br>
      <v-text-field
          type="email"
          label="email"
          placeholder="email"
          rounded
          background-color="#CFCFCF"
          dense
          outlined
          v-model="name"
      ></v-text-field>
      <v-text-field
          type="password"
          label="Password"
          placeholder="password"
          rounded
          background-color="#CFCFCF"
          dense
          outlined
          v-model="password"
      ></v-text-field>
      <v-btn
          color="#CFCFCF"
          elevation="1"
          medium
          v-on:click="register"
      > Entrar </v-btn>
      <br>
      <v-alert
          id="alert"
          dense
          outlined
          type="error"
          v-if="error"
      >
        {{error}}
      </v-alert>
      <div class="login">
        <p>Lost your password? <a @click="$router.push(`/forgotPass`)">clic here</a></p>
      </div>

    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import {mapActions, mapMutations} from "vuex";
import {db} from "../util";
export default {
  data (){
    return{
      name: '',
      password: '',
      error: '',
      user: '',
      dataUser:[],
    }
  },
  name: "home",
  methods:{
    register(){
      if (this.name && this.password){
        firebase.auth().signInWithEmailAndPassword(this.name,this.password).then((userCredential) => {
          this.getUsers()
          this.$router.push({name: 'services'});
        })
            .catch((error) => {
              alert(error.message);
            });
      }else{
        this.error='todos los campos son requeridos';
      }
    },

    ...mapActions(['setUserData']),

    getUsers(){
      db.collection('users')
          .get()
          .then((r) => r.docs.map((item) => {
            if (this.name === item.data().email ){
              this.setUserData(item.data().cuenta)
            }
          }))
    },
  },
}
</script>

<style scoped>

.window{
  background-color: #2EABC7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 100vh;
}

.access{
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 2.5rem;
}

.access__title{
  font-size: 48px;
}

.img{
  background-image: url("../assets/brand.jpg");
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.login{
  padding-top: 1rem;
  display: flex;
  align-items: center;
}

.login p{
  font-size: smaller;
  color: dimgrey;
}

#alert{
  font-size: 10px;
}

</style>