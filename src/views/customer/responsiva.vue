<template>
  <div>
    <v-btn
        class="btn"
        color="#2DA4D9"
        dark
        elevation="3"
        x-large
        @click="generateReport"
    >
      Generar Responsiva
    </v-btn>
    <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="false"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="hee hee"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="800px"

        ref="html2Pdf"
    >
      <section slot="pdf-content">
        <div class="header">
          <img src="@/assets/logo.jpg" alt="logo" class="primary" width="140" height="140">
          <div class="secundar">
            <h1>Quirocenter</h1>
            <hr width="250px" style="background-color: black">
            <h3>centro quiropractico</h3>
          </div>
        </div>
        <div class="all">
          <div class="one">
            <section>
              <H1> Historial Clinico </H1>
              <p>
                <label>Fecha:  </label>
                <spam>{{ fecha}}</spam>
              </p>
              <p>
                <label>Nombre Completo:  </label>
                <spam>{{ fullname}} </spam>
              </p>
              <p>
                <label>Direccion:  </label>
                <spam>{{address}}</spam>
              </p>
              <p>
                <label>Telefono:  </label>
                <spam>{{phone}}</spam>
              </p>
              <p>
                <label>Ocupacion:  </label>
                <spam>{{ocupacion}}</spam>
              </p>
              <p>
                <label>Estado civil:  </label>
                <spam>{{edocivil}}</spam>
              </p>
              <p>
                <label>Edad:  </label>
                <spam>{{edad}}</spam>
              </p>
            </section>
            <section>
              <H1>Signos Vitales</H1>
              <p>
                <label>F/C:  </label>
                <spam>{{fc}}</spam>
              </p>
              <p>
                <label>T/C:  </label>
                <spam>{{tc}}</spam>
              </p>
              <p>
                <label>F/R:  </label>
                <spam>{{fr}}</spam>
              </p>
              <p>
                <label>T/A:  </label>
                <spam>{{ta}}</spam>
              </p>
              <p>
                <label>Talla:  </label>
                <spam>{{talla}}</spam>
              </p>
              <p>
                <label>Peso:  </label>
                <spam>{{peso}}</spam>
              </p>
              <p>
                <label>IMC:  </label>
                <spam>{{imc}}</spam>
              </p>
            </section>
        </div>
        </div>
        <div class="all">
          <div class="two">
            <section>
              <H1>APHF</H1>
              <p>
                <label>Deabetes Mellitus:  </label>
                <spam>{{deabetes}}</spam>
              </p>
              <p>
                <label>Hipotención:  </label>
                <spam>{{hipo}}</spam>
              </p>
              <p>
                <label>Cancer:  </label>
                <spam>{{cancer}}</spam>
              </p>
              <p>
                <label>Trigliseridos:  </label>
                <spam>{{trigli}}</spam>
              </p>
              <p>
                <label>Alergias:  </label>
                <spam>{{alerg}}</spam>
              </p>
              <p>
                <label>Hipertención:  </label>
                <spam>{{hiperten}}</spam>
              </p>
              <p>
                <label>Artritis Reumatoide:  </label>
                <spam>{{reuma}}</spam>
              </p>
              <p>
                <label>Obesidad:  </label>
                <spam>{{obesidad}}</spam>
              </p>
              <p>
                <label>Colesterol:  </label>
                <spam>{{coleste}}</spam>
              </p>
            </section>
            <section>
              <h1>APNP</h1>
              <p>
                <label>Alcoholismo:  </label>
                <spam>{{alco}}</spam>
              </p>
              <p>
                <label>Drogas:  </label>
                <spam>{{drung}}</spam>
              </p>
              <p>
                <label>Tabaco:  </label>
                <spam>{{tabaco}}</spam>
              </p>
              <p>
                <label>Medicamentos:  </label>
                <spam>{{medica}}</spam>
              </p>
            </section>
          </div>
        </div>
        <div class="all">
          <div class="two">
            <section>
              <h1>APP (lo que tiene el paciente)</h1>
              <p>
                <label>¿Cuándo comenzo con el dolor?:  </label>
                <spam>{{dolor}}</spam>
              </p>
              <p>
                <label>¿Cuándo fue su última caída?:  </label>
                <spam>{{caida}}</spam>
              </p>
              <p>
                <label>Motivo de la visita:  </label>
                <spam>{{visit}}</spam>
              </p>
              <p>
                <label>T.P, agraga mas observaciones:  </label><br>
                <textarea cols="30" rows="3" placeholder="comentarios"> {{observ}}</textarea>
              </p>
            </section>
            <section>
              <H1>AGO</H1>
              <H3>(antecedentes ginecológicos obstetras)</H3>
              <p>
                <label>Gestaciones:  </label>
                <spam>{{gest}}</spam>
              </p>
              <p>
                <label>Partos:  </label>
                <spam>{{parto}}</spam>
              </p>
              <p>
                <label>Cesarias:  </label>
                <spam>{{cesaria}}</spam>
              </p>
              <p>
                <label>Abortos:  </label>
                <spam>{{aborto}}</spam>
              </p>
              <p>
                <label>FUR:  </label>
                <spam>{{fur}}</spam>
              </p>
            </section>
          </div>
          <P>SI TRAE TALONARIO ADJUNTARLO Y COLOCA FOLIO:</P>
        </div>

        <div class="all">
          <div class="thre">
            <section>
              <h2>Diagnostico (DX)</h2>
              <div class="cuerpos">
                <img src="@/assets/mujer.jpg" alt="img-mujer" class="cuerpo__1" width="45%" height="570">
                <img src="@/assets/hombre.jpg" alt="img-hombre" class="cuerpo__2" width="45%" height="570">
              </div>
            </section>
          </div>
        </div>
        <div class="all">
          <div class="four">
            <table class="citas" border="2">
              <caption> <b>Proximas Citas</b></caption>
              <tbody>
              <tr>
                <td><b>Fecha de la cita</b></td>
              </tr>
              <tr>
                <td>1.-</td>
              </tr>
              <tr>
                <td>2.-</td>
              </tr>
              <tr>
                <td>3.-</td>
              </tr>
              <tr>
                <td>4.-</td>
              </tr>
              <tr>
                <td>5.-</td>
              </tr>
              <tr>
                <td>6.-</td>
              </tr>
              <tr>
                <td>7.-</td>
              </tr>
              <tr>
                <td>8.-</td>
              </tr>
              <tr>
                <td>9.-</td>
              </tr>
              <tr>
                <td>10.-</td>
              </tr>
              <tr>
                <td>11.-</td>
              </tr>
              <tr>
                <td>12.-</td>
              </tr>
              <tr>
                <td>13.-</td>
              </tr>
              <tr>
                <td>14.-</td>
              </tr>
              <tr>
                <td>15.-</td>
              </tr>
              <tr>
                <td>16.-</td>
              </tr>
              <tr>
                <td>17.-</td>
              </tr>
              <tr>
                <td>18.-</td>
              </tr>
              <tr>
                <td>19.-</td>
              </tr>
              <tr>
                <td>20.-</td>
              </tr>
              <tr>
                <td>21.-</td>
              </tr>
              <tr>
                <td>22.-</td>
              </tr>
              <tr>
                <td>23.-</td>
              </tr>
              <tr>
                <td>24.-</td>
              </tr>
              <tr>
                <td>25.-</td>
              </tr>
              <tr>
                <td>26.-</td>
              </tr>
              <tr>
                <td>27.-</td>
              </tr>
              <tr>
                <td>28.-</td>
              </tr>
              <tr>
                <td>29.-</td>
              </tr>
              <tr>
                <td>30.-</td>
              </tr>
              <tr>
                <td>31.-</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </vue-html2pdf>


    <div class="header">
      <img src="@/assets/logo.jpg" alt="logo" class="primary" width="150" height="150">
      <div class="secundar">
        <h1>Quirocenter</h1>
        <hr width="250px" style="background-color: black">
        <h3>centro quiropractico</h3>
      </div>
    </div>
    <div class="all">
      <div class="one">
        <section>
          <H1> Historial Clinico </H1>
          <p>
            <label>Fecha: </label>
            <input type="date" v-model="fecha">
          </p>
          <p>
            <label>Nombre Completo: </label>
            <input type="text" v-model="fullname" >
          </p>
          <p>
            <label>Direccion: </label>
            <input type="text" v-model="address">
          </p>
          <p>
            <label>Telefono: </label>
            <input type="text" v-model="phone">
          </p>
          <p>
            <label>Ocupacion: </label>
            <input type="text" v-model="ocupacion">
          </p>
          <p>
            <label>Estado civil: </label>
            <input type="text" v-model="edocivil">
          </p>
          <p>
            <label>Edad: </label>
            <input type="text" v-model="edad">
          </p>
        </section>
        <section>
          <H1>Signos Vitales</H1>
          <p>
            <label>F/C: </label>
            <input type="text" v-model="fc">
          </p>
          <p>
            <label>T/C: </label>
            <input type="text" v-model="tc">
          </p>
          <p>
            <label>F/R: </label>
            <input type="text" v-model="fr">
          </p>
          <p>
            <label>T/A: </label>
            <input type="text" v-model="ta">
          </p>
          <p>
            <label>Talla: </label>
            <input type="text" v-model="talla">
          </p>
          <p>
            <label>Peso: </label>
            <input type="text" v-model="peso">
          </p>
          <p>
            <label>IMC: </label>
            <input type="text" v-model="imc">
          </p>
        </section>
      </div>
    </div>
    <div class="all">
      <div class="two">
        <section>
          <H1>APHF</H1>
          <p>
            <label>Deabetes Mellitus: </label>
            <input type="text" v-model="deabetes">
          </p>
          <p>
            <label>Hipotención: </label>
            <input type="text" v-model="hipo">
          </p>
          <p>
            <label>Cancer: </label>
            <input type="text" v-model="cancer">
          </p>
          <p>
            <label>Trigliseridos: </label>
            <input type="text" v-model="trigli">
          </p>
          <p>
            <label>Alergias: </label>
            <input type="text" v-model="alerg">
          </p>
          <p>
            <label>Hipertención: </label>
            <input type="text" v-model="hiperten">
          </p>
          <p>
            <label>Artritis Reumatoide: </label>
            <input type="text" v-model="reuma">
          </p>
          <p>
            <label>Obesidad: </label>
            <input type="text" v-model="obesidad">
          </p>
          <p>
            <label>Colesterol: </label>
            <input type="text" v-model="coleste">
          </p>
        </section>
        <section>
          <h1>APNP</h1>
          <p>
            <label>Alcoholismo: </label>
            <input type="text" v-model="alco">
          </p>
          <p>
            <label>Drogas: </label>
            <input type="text" v-model="drung">
          </p>
          <p>
            <label>Tabaco: </label>
            <input type="text" v-model="tabaco">
          </p>
          <p>
            <label>Medicamentos: </label>
            <input type="text" v-model="medica">
          </p>
        </section>
      </div>
    </div>
    <div class="all">
      <div class="two">
        <section>
          <h1>APP (lo que tiene el paciente)</h1>
          <p>
            <label>¿Cuándo comenzo con el dolor?: </label>
            <input type="date" v-model="dolor">
          </p>
          <p>
            <label>¿Cuándo fue su última caída?: </label>
            <input type="date" v-model="caida">
          </p>
          <p>
            <label>Motivo de la visita: </label>
            <input type="txt" v-model="visit">
          </p>
          <p>
            <label>T.P, agraga mas observaciones: </label><br>
            <textarea cols="30" rows="3" placeholder="comentarios" v-model="observ"></textarea>
          </p>
        </section>
        <section>
          <H1>AGO</H1>
          <H3>(antecedentes ginecológicos obstetras)</H3>
          <p>
            <label>Gestaciones: </label>
            <input type="txt" v-model="gest">
          </p>
          <p>
            <label>Partos: </label>
            <input type="txt" v-model="parto">
          </p>
          <p>
            <label>Cesarias: </label>
            <input type="txt" v-model="cesaria">
          </p>
          <p>
            <label>Abortos: </label>
            <input type="txt" v-model="aborto">
          </p>
          <p>
            <label>FUR: </label>
            <input type="txt" v-model="fur">
          </p>
        </section>
      </div>
    </div>
    <P>SI TRAE TALONARIO ADJUNTARLO Y COLOCA FOLIO:</P>
    <div class="all">
      <div class="thre">
        <section>
          <h2>Diagnostico (DX): </h2>
          <div class="cuerpos">
            <img src="@/assets/mujer.jpg" alt="img-mujer" class="cuerpo__1" width="40%" height="570">
            <img src="@/assets/hombre.jpg" alt="img-hombre" class="cuerpo__2" width="40%" height="570">
          </div>
        </section>
      </div>
    </div>
    <div class="all">
      <div class="four">
        <table class="citas" border="2">
          <caption> <b>Proximas Citas</b></caption>
          <tbody>
          <tr>
            <td><b>Fecha de la cita</b></td>
          </tr>
          <tr>
            <td>1.-</td>
          </tr>
          <tr>
            <td>2.-</td>
          </tr>
          <tr>
            <td>3.-</td>
          </tr>
          <tr>
            <td>4.-</td>
          </tr>
          <tr>
            <td>5.-</td>
          </tr>
          <tr>
            <td>6.-</td>
          </tr>
          <tr>
            <td>7.-</td>
          </tr>
          <tr>
            <td>8.-</td>
          </tr>
          <tr>
            <td>9.-</td>
          </tr>
          <tr>
            <td>10.-</td>
          </tr>
          <tr>
            <td>11.-</td>
          </tr>
          <tr>
            <td>12.-</td>
          </tr>
          <tr>
            <td>13.-</td>
          </tr>
          <tr>
            <td>14.-</td>
          </tr>
          <tr>
            <td>15.-</td>
          </tr>
          <tr>
            <td>16.-</td>
          </tr>
          <tr>
            <td>17.-</td>
          </tr>
          <tr>
            <td>18.-</td>
          </tr>
          <tr>
            <td>19.-</td>
          </tr>
          <tr>
            <td>20.-</td>
          </tr>
          <tr>
            <td>21.-</td>
          </tr>
          <tr>
            <td>22.-</td>
          </tr>
          <tr>
            <td>23.-</td>
          </tr>
          <tr>
            <td>24.-</td>
          </tr>
          <tr>
            <td>25.-</td>
          </tr>
          <tr>
            <td>26.-</td>
          </tr>
          <tr>
            <td>27.-</td>
          </tr>
          <tr>
            <td>28.-</td>
          </tr>
          <tr>
            <td>29.-</td>
          </tr>
          <tr>
            <td>30.-</td>
          </tr>
          <tr>
            <td>31.-</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'
export default {
  name: "responsiva",
  data(){
    return{
      fecha:'',
      fullname:'',
      address:'',
      phone:'',
      ocupacion:'',
      edocivil:'',
      edad:'',
      fc:'',
      tc:'',
      fr:'',
      ta:'',
      talla:'',
      peso:'',
      imc:'',
      deabetes:'',
      hipo:'',
      cancer:'',
      trigli:'',
      alerg:'',
      hiperten:'',
      obesidad:'',
      coleste:'',
      reuma:'',
      alco:'',
      drung:'',
      tabaco:'',
      medica:'',
      dolor:'',
      caida:'',
      visit:'',
      observ:'',
      gest:'',
      parto:'',
      cesaria:'',
      aborto:'',
      fur:'',
    }
  },
  components: {
    VueHtml2pdf
  },
  methods: {
    generateReport () {
      this.$refs.html2Pdf.generatePdf()
    }
  },
}
</script>

<style scoped>
.btn{
  margin: 1% 0 0 50%;
  padding-left: 15px;
}

.all{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 800px;
  padding-top: 15px;
  padding-left: 5px;
}

.one{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.two{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 80px;
}

.thre{
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}

.four{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
}

.header{
  display: flex;
  flex-direction: row;
  width: 800px;
  padding-left: 5px;
  padding-bottom: 15px;
  margin-top: 5%;
}

.secundar{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 45px;
  font-size: 30px;
}

.secundar h1, h3{
  margin: 0;
}

.primary{
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 150%;
}

.cuerpos{
  display: flex;
  flex-direction: row;
}

.cuerpo__1{
  background-repeat: no-repeat;
  background-position: center;
}

.cuerpo__2{
  background-repeat: no-repeat;
  background-position: center;
  padding-left: 5rem;
}

.citas{
  table-layout: fixed;
  width: 50%;
}
</style>