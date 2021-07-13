<template>
  <div>
    <navigationbar/>
    <div class="config">
      <titles principal-title="Modulo Administrativo"/>
      <div class="roll" @click="$router.push(`/role`)">
        <p>Cuentas <v-icon right size="50" color="white" >mdi-account-cog</v-icon></p>
      </div>

      <div class="roll" @click="$router.push(`/editService`)">
        <p>Servicios <v-icon right size="50" color="white" >mdi-pencil</v-icon></p>
      </div>

      <div class="editse" @ @click="dialogEdit()">
        <p>horario de servicio<v-icon right size="50" color="white" >mdi-pencil</v-icon></p>
      </div>
      <v-dialog v-model="edithour" max-width="520px">
        <v-card>
          <div class="form__content">
            <Titles principal-title="Editar horario de servicio:"/>
            <div class="quotesCmp__inputs">
              <v-select
                  :items="hours"
                  label="Hora Inicio"
                  v-model="iniHour"
              ></v-select>
            </div>

            <div class="quotesCmp__inputs">
              <v-select
                  :items="hours"
                  label="Hora Fin"
                  v-model="endHour"
              ></v-select>
            </div>
          </div>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeEdit">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="updatehour()">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import Titles from "../components/titles";
import Navigationbar from "../components/navigationbar";
import {db} from "../util";
export default {
  name: "admin",
  components: {Navigationbar, Titles},
  data: () => ({
    edithour: false,
    hours: [],
    iniHour: "",
    endHour: "",
  }),

  watch:{
    edithour (val) {
      val || this.closeEdit()
    },
  },

  methods:{
    updatehour(){

      db.collection('settings').doc('hour').update({
        ini: this.iniHour,
        end: this.endHour,
      })
      this.closeEdit()
    },

    generateRange () {
      let ini = 1, end = 24;
      for ( let i = ini ; i <= end ; i++ ){
        if (i < 10 ) {
          this.hours.push( "0" + i + ":00")
        }else {
          this.hours.push( i + ":00")
        }
      }
    },

    dialogEdit() {
      this.edithour = true
    },

    closeEdit(){
      this.edithour = false
    },

  },
    mounted() {
    this.generateRange();
      let variable = this.$store.state.user
      if (variable !== 'Administrador'){
        this.$router.push('/services')
      }
    },

}
</script>

<style scoped>
.form__content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.config{
  width: 75%;
  margin: 1rem 2% 5% 22%;
}

.editse{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  background-color: #2EABC7;
  width: 19rem;
  height: 6.5rem;
  border-radius: 60px;
  color: white;
  margin: 5% auto;
}

.editse p{
  font-size: 33px;
  font-weight: bold;
  display: flex;
  align-self: center;
  width: 14rem;
  margin: 0;
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

.editse:hover{
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