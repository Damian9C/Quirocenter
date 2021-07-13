<template>
  <div>
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
                <label>Fecha:</label>
                <input type="date" >
              </p>
              <p>
                <label>Nombre Completo:</label>
                <input type="text" >
              </p>
              <p>
                <label>Direccion:</label>
                <input type="text" >
              </p>
              <p>
                <label>Telefono:</label>
                <input type="text" >
              </p>
              <p>
                <label>Ocupacion:</label>
                <input type="text" >
              </p>
              <p>
                <label>Estado civil:</label>
                <input type="text" >
              </p>
              <p>
                <label>Edad:</label>
                <input type="text" >
              </p>
            </section>
            <section>
              <H1>Signos Vitales</H1>
              <p>
                <label>F/C:</label>
                <input type="text" >
              </p>
              <p>
                <label>T/C:</label>
                <input type="text" >
              </p>
              <p>
                <label>F/R:</label>
                <input type="text" >
              </p>
              <p>
                <label>T/A:</label>
                <input type="text" >
              </p>
              <p>
                <label>Talla:</label>
                <input type="text" >
              </p>
              <p>
                <label>Peso</label>
                <input type="text" >
              </p>
              <p>
                <label>IMC:</label>
                <input type="text" >
              </p>
            </section>
        </div>
        </div>
        <div class="all">
          <div class="two">
            <section>
              <H1>APHF</H1>
              <p>
                <label>Deabetes Mellitus</label>
                <input type="text">
              </p>
              <p>
                <label>Hipotención</label>
                <input type="text">
              </p>
              <p>
                <label>Cancer</label>
                <input type="text">
              </p>
              <p>
                <label>Trigliseridos</label>
                <input type="text">
              </p>
              <p>
                <label>Alergias</label>
                <input type="text">
              </p>
              <p>
                <label>Hipertención</label>
                <input type="text">
              </p>
              <p>
                <label>Artritis Reumatoide</label>
                <input type="text">
              </p>
              <p>
                <label>Obesidad</label>
                <input type="text">
              </p>
              <p>
                <label>Colesterol</label>
                <input type="text">
              </p>
            </section>
            <section>
              <h1>APNP</h1>
              <p>
                <label>Alcoholismo</label>
                <input type="text">
              </p>
              <p>
                <label>Drogas</label>
                <input type="text">
              </p>
              <p>
                <label>Tabaco</label>
                <input type="text">
              </p>
              <p>
                <label>Medicamentos</label>
                <input type="text">
              </p>
            </section>
          </div>
        </div>
        <div class="all">
          <div class="two">
            <section>
              <h1>APP (lo que tiene el paciente)</h1>
              <p>
                <label>¿Cuándo comenzo con el dolor?</label>
                <input type="date">
              </p>
              <p>
                <label>¿Cuándo fue su última caída?</label>
                <input type="date">
              </p>
              <p>
                <label>Motivo de la visita</label>
                <input type="txt">
              </p>
              <p>
                <label>T.P, agraga mas observaciones</label><br>
                <textarea cols="30" rows="3" placeholder="comentarios"></textarea>
              </p>
            </section>
            <section>
              <H1>AGO</H1>
              <H3>(antecedentes ginecológicos obstetras)</H3>
              <p>
                <label>Gestaciones</label>
                <input type="radio">
              </p>
              <p>
                <label>Partos</label>
                <input type="radio">
              </p>
              <p>
                <label>Cesarias</label>
                <input type="radio">
              </p>
              <p>
                <label>Abortos</label>
                <input type="radio">
              </p>
              <p>
                <label>FUR</label>
                <input type="radio">
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
            <input type="date" >
          </p>
          <p>
            <label>Nombre Completo: </label>
            <input type="text" >
          </p>
          <p>
            <label>Direccion: </label>
            <input type="text" >
          </p>
          <p>
            <label>Telefono: </label>
            <input type="text" >
          </p>
          <p>
            <label>Ocupacion: </label>
            <input type="text" >
          </p>
          <p>
            <label>Estado civil: </label>
            <input type="text" >
          </p>
          <p>
            <label>Edad: </label>
            <input type="text" >
          </p>
        </section>
        <section>
          <H1>Signos Vitales</H1>
          <p>
            <label>F/C: </label>
            <input type="text" >
          </p>
          <p>
            <label>T/C: </label>
            <input type="text" >
          </p>
          <p>
            <label>F/R: </label>
            <input type="text" >
          </p>
          <p>
            <label>T/A: </label>
            <input type="text" >
          </p>
          <p>
            <label>Talla: </label>
            <input type="text" >
          </p>
          <p>
            <label>Peso: </label>
            <input type="text" >
          </p>
          <p>
            <label>IMC: </label>
            <input type="text" >
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
            <input type="text">
          </p>
          <p>
            <label>Hipotención: </label>
            <input type="text">
          </p>
          <p>
            <label>Cancer: </label>
            <input type="text">
          </p>
          <p>
            <label>Trigliseridos: </label>
            <input type="text">
          </p>
          <p>
            <label>Alergias: </label>
            <input type="text">
          </p>
          <p>
            <label>Hipertención: </label>
            <input type="text">
          </p>
          <p>
            <label>Artritis Reumatoide: </label>
            <input type="text">
          </p>
          <p>
            <label>Obesidad: </label>
            <input type="text">
          </p>
          <p>
            <label>Colesterol: </label>
            <input type="text">
          </p>
        </section>
        <section>
          <h1>APNP</h1>
          <p>
            <label>Alcoholismo: </label>
            <input type="text">
          </p>
          <p>
            <label>Drogas: </label>
            <input type="text">
          </p>
          <p>
            <label>Tabaco: </label>
            <input type="text">
          </p>
          <p>
            <label>Medicamentos: </label>
            <input type="text">
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
            <input type="date">
          </p>
          <p>
            <label>¿Cuándo fue su última caída?: </label>
            <input type="date">
          </p>
          <p>
            <label>Motivo de la visita: </label>
            <input type="txt">
          </p>
          <p>
            <label>T.P, agraga mas observaciones: </label><br>
            <textarea cols="30" rows="3" placeholder="comentarios"></textarea>
          </p>
        </section>
        <section>
          <H1>AGO</H1>
          <H3>(antecedentes ginecológicos obstetras)</H3>
          <p>
            <label>Gestaciones: </label>
            <input type="radio">
          </p>
          <p>
            <label>Partos: </label>
            <input type="radio">
          </p>
          <p>
            <label>Cesarias: </label>
            <input type="radio">
          </p>
          <p>
            <label>Abortos: </label>
            <input type="radio">
          </p>
          <p>
            <label>FUR: </label>
            <input type="radio">
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
    <br>
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
  </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'
export default {
  name: "responsiva",
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
  margin: 20px;
}

.all{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 800px;
  padding-top: 15px;
  padding-left: 15px;
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
  padding-left: 15px;
  padding-bottom: 15px;
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
}

.citas{
  table-layout: fixed;
  width: 50%;
}
</style>