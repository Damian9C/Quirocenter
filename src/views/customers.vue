<template>
  <div>
    <navigationbar/>
    <div class="customerCmp">
      <titles principal-title="Clientes"/>

      <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-0"
          :search="search"
      >
        <template v-slot:top>

          <v-text-field
              v-model="search"
              label="Buscar"
              class="mx-4"
          ></v-text-field>
          <v-divider/>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn
              small
              @click="$router.push(`/customer/${item.id}`)"
          >
            <v-icon>
              mdi-eye
            </v-icon>
          </v-btn>
          <v-btn
              small
              @click=""
          >
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
          <v-btn
              small
              @click="deleteItem(item)"
          >
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
        <template v-slot:no-data>
          <v-btn
              color="primary"
              @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
      <br/><br/>
    </div>
  </div>
</template>
<script>
import Titles from "../components/titles";
import Navigationbar from "../components/navigationbar";
export default {
  name: "customers",
  components: {Navigationbar, Titles},
  data: () => ({
    dialog: false,
    dialogDelete: false,
    search: '',
    headers: [
      {
        text: 'Nombre',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Telefono', value: 'phone' },
      { text: 'Edad', value: 'age' },
      { text: 'Direccion', value: 'address' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          "id": "NFG67JKF6TV",
          "name": "Noelle Woodward",
          "address": "1741 At ",
          "phone": "1-959-766-5928",
          "age": 28
        },
        {
          "id": "EPL90RRK2AL",
          "name": "Evangeline Marsh",
          "address": "Apartado núm.: 363, 5702 Ac Ctra.",
          "phone": "1-843-585-2546",
          "age": 27
        },
        {
          "id": "YRO65JSW2RH",
          "name": "Jonas Wade",
          "address": "Apartado núm.: 759, 4204 A, ",
          "phone": "1-326-612-3639",
          "age": 62
        },
        {
          "id": "EVU25QUI2EG",
          "name": "Dustin Patterson",
          "address": "239-7272 Et, Carretera",
          "phone": "1-924-972-5232",
          "age": 31
        },
        {
          "id": "YSK90TVM8CT",
          "name": "Lyle Levine",
          "address": "864-7639 Ultrices. C.",
          "phone": "1-942-991-9059",
          "age": 50
        },
        {
          "id": "JTC61QWP9JL",
          "name": "Dylan Y. Jimenez",
          "address": "Apdo.:111-9350 Pede. Av.",
          "phone": "1-540-424-1868",
          "age": 45
        },
        {
          "id": "GIT43LYB5QY",
          "name": "Rahim W. Shannon",
          "address": "Apartado núm.: 726, 5004 Augue Calle",
          "phone": "1-191-454-1886",
          "age": 56
        },
        {
          "id": "IDZ84FQU4HO",
          "name": "Cheryl Erickson",
          "address": "Apdo.:823-4935 Malesuada Ctra.",
          "phone": "1-774-191-4777",
          "age": 29
        },
        {
          "id": "GYK32SXW1LB",
          "name": "Vernon E. Black",
          "address": "448-6090 Nec Avda.",
          "phone": "1-317-872-3708",
          "age": 70
        },
        {
          "id": "LOK64WGN4DS",
          "name": "Kendall Z. Wiggins",
          "address": "786-7430 Rhoncus. C/",
          "phone": "1-513-274-9862",
          "age": 26
        },
        {
          "id": "MKT46IHS5EN",
          "name": "Kelly L. Cross",
          "address": "Apartado núm.: 642, 304 Aenean Ctra.",
          "phone": "1-926-420-3287",
          "age": 40
        },
        {
          "id": "MYS49ZHC8SN",
          "name": "Kuame Morales",
          "address": "339 Iaculis C.",
          "phone": "1-868-316-0733",
          "age": 45
        },
        {
          "id": "IBD15MLR9CO",
          "name": "Cassandra P. Gill",
          "address": "Apartado núm.: 699, 2092 Primis C.",
          "phone": "1-575-621-9886",
          "age": 55
        },
        {
          "id": "ZKC57SSN1BU",
          "name": "Oscar T. Carter",
          "address": "Apdo.:799-6652 Et Carretera",
          "phone": "1-281-828-8965",
          "age": 31
        },
        {
          "id": "DBF61JLS7TK",
          "name": "Jaquelyn O. Sparks",
          "address": "Apdo.:431-9110 Libero. ",
          "phone": "1-550-277-1852",
          "age": 26
        },
        {
          "id": "FIC03PUW6ZA",
          "name": "Cailin Charles",
          "address": "Apdo.:956-459 Non, Carretera",
          "phone": "1-305-292-0516",
          "age": 47
        },
        {
          "id": "BJI45JGG7IN",
          "name": "Lane C. Taylor",
          "address": "Apartado núm.: 713, 1777 Sit Carretera",
          "phone": "1-165-669-2924",
          "age": 61
        },
        {
          "id": "HOH30WJY0XL",
          "name": "Ginger H. Chandler",
          "address": "318-6747 Tortor. Carretera",
          "phone": "1-327-366-7521",
          "age": 46
        },
        {
          "id": "ZXI09HCB2PG",
          "name": "Libby D. Bishop",
          "address": "369-4215 Vitae C.",
          "phone": "1-191-443-9656",
          "age": 52
        },
        {
          "id": "NGD45IKX7FM",
          "name": "Dakota Taylor",
          "address": "5246 Enim Carretera",
          "phone": "1-573-711-8464",
          "age": 27
        },
        {
          "id": "IPZ82YKG4PZ",
          "name": "Ila L. Ewing",
          "address": "Apdo.:704-8120 Vitae, ",
          "phone": "1-874-852-4391",
          "age": 61
        },
      ]
    },
  },
}
</script>

<style scoped>
.customerCmp{
  width: 75%;
  margin: 1rem 2% 5% 22%;
}

@media all and (max-width: 1230px) {
  .customerCmp{
    width: 73%;
    margin: 1rem 2% 5% 24%;
  }
}
@media all and (max-width: 1130px) {
  .customerCmp{
    width: 71%;
    margin: 1rem 2% 5% 26%;
  }
}
@media all and (max-width: 1065px) {
  .customerCmp{
    width: 69%;
    margin: 1rem 2% 5% 28%;
  }
}

@media all and (max-width: 968px) {
  .customerCmp{
    width: 67%;
    margin: 1rem 2% 5% 30%;
  }
}

@media all and (max-width: 959px) {
  .customerCmp{
    width: 75%;
    margin: auto;
  }
}
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