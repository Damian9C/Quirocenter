<template>
  <div>
    <navigationbar/>
    <div class="quotesCmp">
      <titles principal-title="Citas"/>
      <div>
        <v-row class="fill-height">
          <v-col>
            <v-sheet height="64">
              <v-toolbar
                  flat
              >
                <v-btn
                    outlined
                    class="mr-4"
                    color="grey darken-2"
                    @click="setToday"
                >
                  Hoy
                </v-btn>
                <v-btn
                    fab
                    text
                    small
                    color="grey darken-2"
                    @click="prev"
                >
                  <v-icon small>
                    mdi-chevron-left
                  </v-icon>
                </v-btn>
                <v-btn
                    fab
                    text
                    small
                    color="grey darken-2"
                    @click="next"
                >
                  <v-icon small>
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
                <v-toolbar-title v-if="$refs.calendar">
                  {{ $refs.calendar.title }}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-menu
                    bottom
                    right
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        outlined
                        color="grey darken-2"
                        v-bind="attrs"
                        v-on="on"
                    >
                      <span>{{ typeToLabel[type] }}</span>
                      <v-icon right>
                        mdi-menu-down
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="type = 'day'">
                      <v-list-item-title>Dia</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'week'">
                      <v-list-item-title>Semanal</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'month'">
                      <v-list-item-title>Mensual</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <div class="quotesCmp__newQuote">
                  <v-btn
                      dark
                      class="btn__two"
                      color="teal"
                      @click="overlay = !overlay"
                  >
                    Nueva Cita
                  </v-btn>
                </div>
              </v-toolbar>
            </v-sheet>
            <v-sheet height="600">
              <v-calendar
                  ref="calendar"
                  v-model="focus"
                  color="primary"
                  :events="events"
                  :event-color="getEventColor"
                  :type="type"
                  @click:event="showEvent"
                  @click:more="viewDay"
                  @click:date="viewDay"
                  @change="updateRange"
                  :short-weekdays="false"
                  locale="es-Es"
              ></v-calendar>
              <v-menu
                  v-model="selectedOpen"
                  :close-on-content-click="false"
                  :activator="selectedElement"
                  offset-x
              >
                <v-card
                    color="grey lighten-4"
                    min-width="250px"
                    flat
                >
                  <v-toolbar
                      :color="selectedEvent.color"
                      dark
                  >
                    <v-btn icon @click="">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                    <v-spacer/>
                    <v-btn icon>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-text>
                    <span>
                      Horario de la cita:<br/>
                      {{ selectedEvent.timeIni}} - {{ selectedEvent.timeEnd}}
                    </span>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                        text
                        color="secondary"
                        @click="selectedOpen = false"
                    >
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
      <br/>
    </div>

    <div>
      <v-overlay
          :z-index="zIndex"
          :value="overlay"
      >
        <div class="form__content">
          <titles principal-title="Nueva Cita"/>
          <br/>

          <div class="quotesCmp__inputs">
            <v-select
                :items="customers"
                label="Cliente"
                v-model="selectedCustomer"
            ></v-select>
          </div>

          <div>
            <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="date"
                    label="Seleccionar día"
                    append-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="date"
                  scrollable
                  locale="es-Es"
              >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="primary"
                    @click="modal = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </div>

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

          <br/>
          <v-btn
              class="white--text"
              color="teal"
              @click="addQuote"
          >
            añadir
          </v-btn>
          <v-btn
              class="quotesCmp__cancel"
              color="teal"
              small
              @click="overlay = false"
          >
            cancelar
          </v-btn>
        </div>
      </v-overlay>
    </div>
  </div>
</template>

<script>
import Titles from "../components/titles";
import Navigationbar from "../components/navigationbar";
import {db} from "../util";
import customers from "./customers";
export default {
  name: "quotes",
  components: {Navigationbar, Titles},
  data: () => ({

    //Configuraciones de Horario
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Mensual',
      week: 'Semanal',
      day: 'Dia',
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],

    //Horario Cita
    hours: [],
    iniHour: "",
    endHour: "",

    //Cliente Cita
    customer: [{

    }],
    customers: [],
    selectedCustomer: "",

    //Dia cita
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,

    overlay: false,
    zIndex: 1,
  }),
  mounted () {
    this.$refs.calendar.checkChange();

    this.getCustomers();
    this.generateRange();
  },
  methods: {
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = ''
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      this.events = []

      db.collection('quotes')
          .get()
          .then((r) => r.docs.map((item) => {
            this.events.push({
              start: new Date(Number(item.data().start.seconds + "000")),
              end: new Date(Number(item.data().end.seconds + "000")),
              name: item.data().name,
              color: item.data().color,
              customerName: item.data().customerName,
              customerId: item.data().customerId,
              timeIni: (new Date(Number(item.data().start.seconds + "000")).getHours() + ":00"),
              timeEnd: (new Date(Number(item.data().end.seconds + "000")).getHours() + ":00"),
              timed: "true",
            });
          }));
      console.log(this.events)
    },

    generateRange () {
      let ini = 9, end = 18;

      for ( let i = ini ; i <= end ; i++){
        if (i < 10 ) {
          this.hours.push( "0" + i + ":00")
        }else {
          this.hours.push( i + ":00")
        }
      }
    },

    addQuote () {
      let numberIni = Date.parse(this.date + "T" + this.iniHour + ":00");
      let dateTxtIni = new Date(numberIni);
      let numberEnd = Date.parse(this.date + "T" + this.endHour + ":00");
      let dateTxtEnd = new Date(numberEnd);

      let filter = this.customer.filter(element => element.name === this.selectedCustomer)

      db.collection("quotes").add({
        start: dateTxtIni,
        end: dateTxtEnd,
        name: 'Cita',
        color: 'blue',
        customerName: filter[0].name,
        customerId: filter[0].id,
      })
          .then(() => this.$mount())
          .catch((error) => {
            alert.error("Error adding document: ", error);
          });
    },

    getCustomers(){
      db.collection('customer')
          .get()
          .then((r) => r.docs.map((item) => {
            this.customer.push({
              id:item.id,
              name: item.data().name,
              phone: item.data().phone,
              age: item.data().age,
              address: item.data().address,
            });
            this.customers.push(item.data().name);
          }));
    },

  },
}
</script>

<style scoped>
.quotesCmp{
  width: 77%;
  margin: 1rem 2% 5% 19%;
}

.quotesCmp__newQuote{
  margin-left: 1rem;
  margin-right: 0;
}

.form__content{
  background-color: #69C9DE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 20rem;
  padding-bottom: 1rem;
}

.quotesCmp__cancel{
  margin: 12px 0 10px;
}

.quotesCmp__inputs{
  width: 62%;
}

@media all and (max-width: 1400px) {
  .quotesCmp{
    width: 75%;
    margin: 1rem 2% 5% 21%;
  }
}

@media all and (max-width: 1300px) {
  .quotesCmp{
    width: 73%;
    margin: 1rem 2% 5% 23%;
  }
}

@media all and (max-width: 1230px) {
  .quotesCmp{
    width: 73%;
    margin: 1rem 2% 5% 24%;
  }
}

@media all and (max-width: 1130px) {
  .quotesCmp{
    width: 73%;
    margin: 1rem 2% 5% 25%;
  }
}

@media all and (max-width: 1065px) {
  .quotesCmp{
    width: 71%;
    margin: 1rem 2% 5% 27%;
  }
}

@media all and (max-width: 990px) {
  .quotesCmp{
    width: 70%;
    margin: 1rem 2% 5% 28%;
  }
}

@media all and (max-width: 960px) {
  .quotesCmp{
    width: 90%;
    margin: auto;
  }
}

</style>