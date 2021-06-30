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
          label="username"
          placeholder="username"
          rounded
          background-color="#CFCFCF"
          dense
          outlined
      ></v-text-field>
      <v-text-field
          label="password"
          placeholder="password"
          rounded
          background-color="#CFCFCF"
          dense
          outlined
      ></v-text-field>
      <v-btn
          color="#CFCFCF"
          elevation="1"
          medium
          to="/services"
      > Entrar </v-btn>

    </div>
  </div>
</template>

<script>
export default {
  name: "home"
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

</style>