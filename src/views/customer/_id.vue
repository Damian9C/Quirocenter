<template>
  <div>
    <navigationbar/>
    <div class="customer__data">
      <Titles principal-title="Perfil de Usuario"/>
      <v-icon size="28" class="back" @click="$router.push(`/customers`)">mdi-arrow-left</v-icon>
      <div>
        <br/>
        <br/>
        <h1 class="customer--title">Nombre</h1>
        <p class="customer--txt">{{ customer.name}}</p>

        <h1 class="customer--title">Telefono</h1>
        <p class="customer--txt">{{ customer.phone }}</p>

        <h1 class="customer--title">Edad</h1>
        <p class="customer--txt">{{ customer.age }}</p>

        <h1 class="customer--title">Direccion</h1>
        <p class="customer--txt">{{ customer.address }}</p>
      </div>
      <v-spacer/>
    </div>
    <div class="customer__data--btn">
      <v-btn
          color="#2DA4D9"
          dark
          elevation="3"
          x-large
          @click="$router.push(`/customers/responsiva`)"
      >
        Responsiva
        <v-icon right >
          mdi-file-document-outline
        </v-icon>
      </v-btn>
    </div>
    <br/>
    <div class="table">
      <h1 class="customer--title">Historial:</h1><br/>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              Fecha
            </th>
            <th class="text-left">
              Doctor
            </th>
            <th class="text-left">
              Detalles
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in customer.quotes"
              :key="item.id"
          >
            <td>{{ item.date }}</td>
            <td>{{ item.doctor }}</td>
            <td>{{ item.details }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <br/><br/>

  </div>
</template>

<script>
import Navigationbar from "../../components/navigationbar";
import Titles from "../../components/titles";
import {db} from "../../util";
export default {
  name: "_id",
  components: {Navigationbar, Titles},
  data(){
    return{
      customer: {},
    }
  },
  mounted() {
    let routeId = this.$route.params.id

    db.collection('customer')
        .get()
        .then((r) => r.docs.map((item) => {
          if ( routeId === item.id ){
            console.log(item)
            this.customer = ({
              id:item.id,
              name: item.data().name,
              phone: item.data().phone,
              age: item.data().age,
              address: item.data().address,
            })
          }
        }))
    console.log(this.customer)
  }
}
</script>

<style scoped>
.customer--title{
  font-size: 2rem;
  font-weight: bold;
}

.customer__data--btn {
  padding-right: 7rem;
  display: flex;
  justify-content: flex-end;
}

.customer--txt{
  font-size: 1.5rem;
}

.customer__data{
  width: 73%;
  margin: 1rem 2% 5% 20%;
}

.table{
  width: 77%;
  margin: 1rem 2% 5% 20%;
}

@media all and (max-width: 1360px) {
  .customer__data{
    width: 77%;
    margin: 1rem 2% 5% 22%;
  }
  .table{
    width: 76%;
    margin: 1rem 2% 5% 22%;
  }
}

@media all and (max-width: 1230px) {
  .customer__data{
    width: 71%;
    margin: 1rem 2% 5% 24%;
  }
  .table{
    width: 71%;
    margin: 1rem 2% 5% 24%;
  }
}
@media all and (max-width: 1130px) {
  .customer__data{
    width: 69%;
    margin: 1rem 2% 5% 26%;
  }
  .table{
    width: 69%;
    margin: 1rem 2% 5% 26%;
  }
  .customer__data--btn {
    padding-right: 6rem;
  }
}
@media all and (max-width: 1065px) {
  .customer__data{
    width: 67%;
    margin: 1rem 2% 5% 28%;
  }
  .table{
    width: 67%;
    margin: 1rem 2% 5% 28%;
  }
  .customer__data--btn {
    padding-right: 5rem;
  }
}

@media all and (max-width: 968px) {
  .customer__data{
    width: 65%;
    margin: 1rem 2% 5% 30%;
  }
  .table{
    width: 65%;
    margin: 1rem 2% 5% 30%;
  }
}

@media all and (max-width: 958px) {
  .customer__data{
    width: 90%;
    margin: auto;
  }
  .table{
    width: 90%;
    margin: auto;
  }
}

</style>