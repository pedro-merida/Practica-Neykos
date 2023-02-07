import './App.css';
import QRCode from 'react-qr-code'
import html2canvas from 'html2canvas'
import jsPDF, { AcroFormCheckBox } from 'jspdf'
import autoTable from 'jspdf-autotable'
import json from './data/ejemplo_formulario.json'

function App() {
  const data = json.info
  const exportPDF = () =>{
    const input = document.getElementById("qr")
    const pdf = new jsPDF("p", "mm", "a4");
    html2canvas(input, {loggin: true, letterRendering: 1, useCORS: false}).then(canvas =>{
      const imgwidth = 210;
      const imgheight = canvas.height * imgwidth / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const imgData2 = "Logo-VHSA.png";

      // PDF Header
      pdf.addImage(imgData2, "PNG", 15, 10, 25, 23.3);
      pdf.setFontSize(12);
      pdf.text("Inspección de linea  (PC33 Parte Física)", 70, 25)
      pdf.setFont('italic')
      pdf.text("Varela hermanos", 90, 30)
      pdf.line(10, 35, 200, 35)
      
      //PDF Body tabla

      //Info de operaciones
      const info_op = data.sections.find(element => "Información del Producto" === element.name)
      const campos = data.sub_sections.filter(element => element.section_id === info_op.id)
      const datos = data.fields.filter(element => {
        return (element.section_id === info_op.id && element.sub_section_id === campos[0].id);
      })
      console.log(datos)
      pdf.setFontSize(12);
      pdf.rect(10, 40, 92, 6)
      pdf.text("Información del Producto", 31, 44.5)
      autoTable(pdf, {
        theme: 'grid',
        styles: {fontSize: 9},
        startY: 50,
        margin: {left: 10},
        columnStyles: {0: {fillColor: 'D3D3D3', cellWidth: 42}},
        tableWidth: 92,
        body: [
          ['Hora-Pallet', (datos.find(element => {
            return (element.inspection === 1 && element.name === "Hora")
          })).value + ' - ' + (datos.find(element => {
            return (element.inspection === 1 && element.name === "Pallet")
          })).value ],
          ['Fecha de producción', ''],
          ['Presentación', ''],
          ['# de Linea', ''],
          ['Hora de arranque', '']
        ],
      })

      //Verifiacion del sistema de trasiego
      pdf.setFontSize(12);
      pdf.rect(108, 40, 92, 6)
      pdf.text("Verifiacion del sistema de trasiego", 123, 44.5)
      pdf.setFontSize(10);
      pdf.text(["Leyenda del destino:", "Manguéras:", "Bombas:", "Filtros:"], 116, 54, {lineHeightFactor: 1.7})
      pdf.text(["OK", "OK", "OK", "OK"], 165, 54, {lineHeightFactor: 1.7})
      pdf.text(["N/A", "N/A", "N/A", "N/A"], 184, 54, {lineHeightFactor: 1.7})

      const checkbox_1 = (datos.find(element => {
        return (element.inspection === 1 && element.name === "Leyenda del destino")
      })).value

      const checkbox_2 = (datos.find(element => {
        return (element.inspection === 2 && element.name === "Leyenda del destino")
      })).value

      var linea_tras = new AcroFormCheckBox()
      linea_tras.readOnly = 1
      linea_tras.maxFontSize = 10;
      if (checkbox_1 === "OK"){
        linea_tras.Rect = [172.5, 50.5, 4, 4];
        pdf.addField(linea_tras);
      }
      else if(checkbox_1 === "N/A"){
        linea_tras.Rect = [191.5, 50.5, 4, 4];
        pdf.addField(linea_tras);
      }
      pdf.rect(171.8, 50, 5, 5)
      pdf.rect(191, 50, 5, 5)

      var mangueras = new AcroFormCheckBox()
      mangueras.readOnly = 1
      mangueras.maxFontSize = 10;
      if (checkbox_2 === "OK"){
        mangueras.Rect = [172.5, 56.5, 4, 4];
        pdf.addField(mangueras);
      }
      else if (checkbox_2 === "N/A"){
        mangueras.Rect = [191.5, 56.5, 4, 4];
        pdf.addField(mangueras);
      }
      pdf.rect(171.8, 56, 5, 5)
      pdf.rect(191, 56, 5, 5)

      var bombas = new AcroFormCheckBox()
      bombas.readOnly = 1
      bombas.maxFontSize = 10;
      bombas.Rect = [172.5, 62.5, 4, 4];
      //pdf.addField(bombas);
      pdf.rect(171.8, 62, 5, 5)
      pdf.rect(191, 62, 5, 5)

      var filtros = new AcroFormCheckBox()
      filtros.readOnly = 1
      filtros.maxFontSize = 10;
      filtros.Rect = [172.5, 68.5, 4, 4];
      //pdf.addField(filtros);
      pdf.rect(171.8, 68, 5, 5)
      pdf.rect(191, 68, 5, 5)

      //Inspeccion de maquina para el arranque
      pdf.setFontSize(12);
      pdf.rect(10, 92, 92, 6)
      pdf.text("Inspeccion de maquina para el arranque", 24, 96)
      pdf.setFontSize(10);
      pdf.text(["Nivel de llenado:", "Tapado:", "Etiquetado:", "Codificado de envases:", "Codificado cajas:"], 17, 106, {lineHeightFactor: 1.7})
      pdf.text(["OK", "OK", "OK", "OK", "OK"], 73, 106, {lineHeightFactor: 1.7})

      var nivel_llenado = new AcroFormCheckBox()
      nivel_llenado.readOnly = 1
      nivel_llenado.maxFontSize = 10;
      nivel_llenado.Rect = [80.5, 102.5, 4, 4];
      pdf.addField(nivel_llenado);
      pdf.rect(79.8, 102, 5, 5)
      pdf.rect(79.8, 108, 5, 5)
      pdf.rect(79.8, 114, 5, 5)
      pdf.rect(79.8, 120, 5, 5)
      pdf.rect(79.8, 126, 5, 5)

      //Analisis fisico-quimico para el arranque
      pdf.setFontSize(12);
      pdf.rect(108, 92, 92, 6)
      pdf.text("Inspeccion de maquina para el arranque", 120, 96)
      autoTable(pdf, {
        theme: 'grid',
        styles: {fontSize: 9},
        startY: 102,
        margin: {left: 108},
        columnStyles: {0: {fillColor: 'D3D3D3', cellWidth: 42}},
        tableWidth: 92,
        body: [
          ['Grado alcohólico aparente', ''],
          ['Dentro del rango', ''],
          ['pH', ''],
          ['Prueba organoléptica', ''],
        ],
      })
      var grado_alc = new AcroFormCheckBox()
      grado_alc.readOnly = 1
      grado_alc.maxFontSize = 10;
      grado_alc.Rect = [174.1, 110.8, 4, 4];
      pdf.addField(grado_alc);
      pdf.rect(173.5, 110.3, 5, 5)
      pdf.rect(173.5, 124.6, 5, 5)

      //Información de suministro
      pdf.rect(10, 137, 190, 6)
      pdf.text("Inspeccion de maquina para el arranque", 70, 141.3)
      pdf.text("Etiquetas", 14, 179.3, null, 90)
      autoTable(pdf, {
        theme: 'grid',
        styles: {fontSize: 9},
        startY: 148,
        margin: {left: 16},
        columnStyles: {0: {fillColor: 'D3D3D3'}, 1: {cellWidth: 42}},
        body: [
          ['Hora', '', 'Inspeccion 1', 'Inspeccion 2', 'Inspeccion 3', 'Inspeccion 4', 'Inspeccion 5'],
          ['Frente', ''],
          ['Recetario', ''],
          ['Cuello', ''],
          ['Hombro', ''],
          ['Ovalo', ''],
          ['Strip', ''],
        ],
      })



      pdf.addImage(imgData, "PNG", 0, 210, imgwidth, imgheight);
      window.open(pdf.output('bloburl'), '_blank')
    })
  }
  return (
    <div>
      <button onClick={() => exportPDF()}>Print PDF</button>
      <body id="pdf">
        <h1>
            Ejemplo de tabla con QR code
        </h1>
        <table id="my-table" style={{width:"90%", margin: "100px"}}>
          <thead>
            <tr style={{height:"100px"}}>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
          </tbody>
        </table>
        <div id="qr" style={{paddingRight: "100px"}} align="right">
          <QRCode value="https://www.youtube.com" size={100} bgColor="#282c34" fgColor="#fff" level="H" />
        </div>
      </body>
    </div>
  );
}

export default App;
