<template>
  <div>
    <navigationbar/>
    <div class="customer__data">
      <Titles principal-title="Perfil de Usuario"/>
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
      <div class="customer__data--btn">
        <v-btn
            color="#2DA4D9"
            dark
            elevation="3"
            x-large
        >
          Responsiva
          <v-icon right >
            mdi-file-document-outline
          </v-icon>
        </v-btn>
      </div>
    </div>

    <br/>
    <h1 class="customer--title">Historial:</h1><br/>

    <v-divider/>

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
    <br/><br/>

  </div>
</template>

<script>
import Navigationbar from "../../components/navigationbar";
import Titles from "../../components/titles";
export default {
  name: "_id",
  components: {Navigationbar, Titles},
  data(){
    return{
      customer:{
        "id": "GIT43LYB5QY",
        "name": "Rahim W. Shannon",
        "address": "Apartado núm.: 726, 5004 Augue Calle",
        "phone": "1-191-454-1886",
        "age": 56,
        quotes:[
          {
            "id": "STO54ZGZ7MS",
            "date": "December 27th, 2021",
            "doctor": "Cairo E. Francis",
            "details": "id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet"
          },
          {
            "id": "UEB64AGQ1LU",
            "date": "December 15th, 2020",
            "doctor": "Aristotle Horton",
            "details": "nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy"
          },
          {
            "id": "KGE41HIQ8CB",
            "date": "July 8th, 2020",
            "doctor": "Rooney Baldwin",
            "details": "sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros"
          },
          {
            "id": "MXZ10YIM3KD",
            "date": "June 13th, 2022",
            "doctor": "Isaac French",
            "details": "Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam"
          },
          {
            "id": "XRQ76KPS2UB",
            "date": "February 13th, 2021",
            "doctor": "Yardley E. Campbell",
            "details": "quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          },
        ]
      },
    }
  }
}
</script>

<style scoped>

.customer__data{
  display: flex;
}

.customer--title{
  font-size: 2rem;
  font-weight: bold;
}

.customer--txt{
  font-size: 1.5rem;
}

.customer__data--btn{
  margin: 5rem;
}

</style>