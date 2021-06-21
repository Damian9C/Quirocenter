<template>
  <div class="window">
    <div class="access">
      <h1 class="access__title">
        Quirocenter
      </h1>
      <v-icon size="60">
        mdi-account-circle
      </v-icon>
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
          to="/Home"
      > Entrar </v-btn>

    </div>
  </div>
</template>

<script>
export default {
  name: "index"
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

</style>