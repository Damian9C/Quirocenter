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
  width: 17rem;
  height: 4.5rem;
  border-radius: 60px;
  color: white;
  margin: 5% auto;
}
.roll p{
  font-size: 35px;
  font-weight: bold;
  display: flex;
  align-self: center;
  justify-content: space-evenly;
  margin: 0;
}
.roll:hover{
  cursor: pointer;
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