<template>
  <div>
    <navigationbar/>
    <div class="config">
      <titles principal-title="Modulo Administrativo"/>
      <div class="roll" @click="$router.push(`/role`)">
        <p>Roles <v-icon right size="50" color="white" >mdi-account-cog</v-icon></p>
      </div>
      <div class="roll" @click="$router.push(`/editService`)">
        <p>Servicios <v-icon right size="50" color="white" >mdi-pencil</v-icon></p>
      </div>


    </div>
  </div>
</template>

<script>
import Titles from "../components/titles";
import Navigationbar from "../components/navigationbar";
export default {
  name: "admin",
  components: {Navigationbar, Titles}
}
</script>

<style scoped>
.config{
  width: 75%;
  margin: 1rem 2% 5% 22%;
}
.roll{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  background-color: #2EABC7;
  width: 20rem;
  height: 5.3rem;
  border-radius: 60px;
  color: white;
  margin: 2rem 2% 5% 33%;
}
.roll p{
  font-size: 49px;
  font-weight: bold;
}
.roll:hover{
  cursor: pointer;
}

</style>