import jsPDF, { AcroFormCheckBox } from "jspdf";
import logo from "../imgs/Logo-VHSA.png"
import { autoTable } from "jspdf-autotable";

function addCheckBox(field, pdf, option, fontSize){
    field.readOnly = true;
    field.fontSize = fontSize;
    field.appearanceState = option;
    pdf.addField(field);
}

function ConvertToPdf(){

    let date = new Date().toLocaleDateString("es-PA");
    const pdf = new jsPDF('p', 'mm', 'letter');

    pdf.addImage(logo, 'PNG', 15, 8, 14, 14);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');

    pdf.text(["INSPECCIÓN DE PRODUCTO TERMINADO", "Varela Hermanos S.A."], 107.95, 11, {'align': 'center'});
    pdf.text(["Fecha:", "Producto:", "Tipo de Inspección:"], 15, 28, {'align': 'left'});
    pdf.text(["Presentación:", "Línea:"], 102, 28, {'align': 'right'});
    pdf.text(["Inspector:", "Material en SAP:"], 160, 28, {'align': 'right'});
    pdf.text(["INFORMACIÓN DEL PRODUCTO"], 107.95, 60, {'align': 'center'});
    
    pdf.setFontSize(7);
    pdf.text(["ASC-F-005", "REV.:", date], 202, 12, {'align': 'right'});
    
    pdf.setFont(undefined, 'normal').setFontSize(11);
    // Completar fecha y producto
    pdf.text([date, "Ron Abuelo Añejo"], 35, 28, {'align': 'left'});
    pdf.text(["70 cl", "4"], 104, 28, {'align': 'left'});
    // pdf.text(["Brenda L.", "100216", "100215"], 162, 28, {'align': 'left'});
    pdf.text("Brenda L.\n100216\n100215", 162, 28, {'align': 'left'});
    
    // Opciones de tipo de inspección
    pdf.setFontSize(9);
    pdf.text(["Producción"], 58, 37, {'align': 'left'});
    pdf.text(["Retrabajo (producto en proceso)"], 58, 42, {'align': 'left'});
    pdf.text(["Re-inspección por detención"], 58, 47, {'align': 'left'});
    pdf.text(["Transferencia de inventario"], 58, 52, {'align': 'left'});
    pdf.setFontSize(11);
    
    // Checkbox de tipo de inspección
    let produccion = new AcroFormCheckBox();
    produccion.Rect = [53, 34, 4, 4];
    addCheckBox(produccion, pdf, "Off", 11);
    
    let retrabajo = new AcroFormCheckBox();
    retrabajo.Rect = [53, 39, 4, 4];
    addCheckBox(retrabajo, pdf, "On", 11);
    
    let reinspeccion = new AcroFormCheckBox();
    reinspeccion.Rect = [53, 44, 4, 4];
    addCheckBox(reinspeccion, pdf, "Off", 11);
    
    let transferencia = new AcroFormCheckBox();
    transferencia.Rect = [53, 49, 4, 4];
    addCheckBox(transferencia, pdf, "Off", 11);
    
    let value = 'L2602213RA0817\n000016'
    pdf.autoTable({
        head: [
            ['', '1era Inspección', '2da Inspección', '3era Inspección', '4ta Inspección', '5ta Inspección'],
        ],
        body: [
            ['Hora-Pallet', '8:20   5467-1', '9:20  5468-1', '', '', ''],
            ['Código de Trazabilidad', value, value, '', '', ''],
            ['C. de Barra del Producto', '7451101216097', '7451101216097', '', '', ''],
            ['C. de Barra (cajetilla)', 'N/A', 'N/A', '', '', ''],
            ['C. de Barra (corrugado)', '7451101210165', '7451101210165', '', '', ''],
            ['Registro Sanitario', 'N/C', 'N/C', '', '', ''],
            // {content: ['Impresión en la Caja', 'Imported by:\nBarco22525\nHAMBURG\n08:21', 'Varela Europa\n17/09/21\n09:22\n004-00552900', '', '', ''], rowSpan: 2},
            [{content: ['Impresión en la Caja'], rowSpan: 2, styles: { valign: 'center' }},'Imported by:\nBarco22525', 'Varela Europa\n17/09/21', '', '', ''],
            ['HAMBURG\n08:21', '09:22\n004-00552900', '', '', ''],
            ['Destino', 'Alemania', 'Europeo', '', '', ''],
            ['Leyenda del destino', 'OK', 'N/A', '', '', ''],
            ['Apariencia del producto', 'Bueno', 'Bueno', '', '', ''],
            ['Persona Informada', 'Op. Etiquetado', '', '', '', ''],
            ['Desgarre de Papel', 'Bueno', 'Bueno', '', '', ''],
            ['Estado de Inspección', 'Aprobado', 'Aprobado', '', '', ''],
            ['Motivo del Estado de Inspección', 'Aprobado', '', '', '', ''],
        ],
        startY: 62,
        styles: {fontSize: 8, cellPadding: 1},
        columnStyles: {0: {fillColor:[221, 221, 221], textColor: [0, 0, 0]}},
        theme: 'grid',
        headStyles: {halign: 'center', fillColor: [41, 128, 186]},
    });
    
    pdf.setFontSize(9).setFont(undefined, 'bold');
    pdf.text(["Información Adicional de Suministros"], 15, 168, {'align': 'left'});
    pdf.setFontSize(7).setFont(undefined, 'normal');
    pdf.text('Fecha de Producción:', 15, 173);
    pdf.text('Forma de Pegado', 178, 178);
    pdf.text(['Autoad.', 'Autoad.', 'Autoad.', 'Autoad.', 'Autoad.', 'Autoad.'], 178, 187.5, {lineHeightFactor: 2});
    pdf.text(['Cola Fría', 'Cola Fría', 'Cola Fría', 'Cola Fría', 'Cola Fría', 'Cola Fría'], 192, 187.5, {lineHeightFactor: 2});
    pdf.text('Etiquetas', 18, 200, {angle: 90});
    pdf.text('Proveedor / Fecha de Prod.', 45, 210, {angle: 90});
    pdf.text(['HORA:', 'Frente:', 'Recetario:', 'Cuello:', 'Hombro:', 'Ovalo:', 'Strip:'], 23, 182, {lineHeightFactor: 2});
    pdf.autoTable({
        head: [
            ['Inspección 1', 'Inspección 2', 'Inspección 3', 'Inspección 4', 'Inspección 5']
        ],
        body: [ 
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
        ],
        startY: 174,
        margin: {left: 50, right: 44},
        styles: {fontSize: 7, cellPadding: 1},
        theme: 'grid',
        headStyles: {halign: 'center', fillColor: [41, 128, 186]},
    });
    
    let colafria2 = new AcroFormCheckBox();
    colafria2.Rect = [188, 184.5, 3, 3];
    addCheckBox(colafria2, pdf, "Off", 8);
    
    let colafria3 = new AcroFormCheckBox();
    colafria3.Rect = [188, 189.5, 3, 3];
    addCheckBox(colafria3, pdf, "Off", 8);
    
    let colafria4 = new AcroFormCheckBox();
    colafria4.Rect = [188, 194.5, 3, 3];
    addCheckBox(colafria4, pdf, "Off", 8);
    
    let colafria5 = new AcroFormCheckBox();
    colafria5.Rect = [188, 199.5, 3, 3];
    addCheckBox(colafria5, pdf, "Off", 8);
    
    let colafria6 = new AcroFormCheckBox();
    colafria6.Rect = [188, 204.5, 3, 3];
    addCheckBox(colafria6, pdf, "On", 8);
    
    let colafria7 = new AcroFormCheckBox();
    colafria7.Rect = [188, 209.5, 3, 3];
    addCheckBox(colafria7, pdf, "Off", 8);
    
    let autoad2 = new AcroFormCheckBox();
    autoad2.Rect = [174, 184.5, 3, 3];
    addCheckBox(autoad2, pdf, "On", 8);
    
    let autoad3 = new AcroFormCheckBox();
    autoad3.Rect = [174, 189.5, 3, 3];
    addCheckBox(autoad3, pdf, "Off", 8);
    
    let autoad4 = new AcroFormCheckBox();
    autoad4.Rect = [174, 194.5, 3, 3];
    addCheckBox(autoad4, pdf, "Off", 8);
    
    let autoad5 = new AcroFormCheckBox();
    autoad5.Rect = [174, 199.5, 3, 3];
    addCheckBox(autoad5, pdf, "Off", 8);
    
    let autoad6 = new AcroFormCheckBox();
    autoad6.Rect = [174, 204.5, 3, 3];
    addCheckBox(autoad6, pdf, "Off", 8);
    
    let autoad7 = new AcroFormCheckBox();
    autoad7.Rect = [174, 209.5, 3, 3];
    addCheckBox(autoad7, pdf, "Off", 8);
    
    pdf.text('Fecha de Producción:', 15, 222);
    pdf.text('Cajetilla Individual', 18, 255, {angle: 90});
    pdf.text(['HORA:'], 23, 232, {lineHeightFactor: 1.5});
    pdf.text('Proveedor / Fecha de Prod.', 45, 260, {angle: 90});
    pdf.autoTable({
        head: [
            ['Inspección 1', 'Inspección 2', 'Inspección 3', 'Inspección 4', 'Inspección 5']
        ],
        body: [ 
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
        ],
        startY: 224,
        margin: {left: 50},
        styles: {fontSize: 7, cellPadding: 1},
        theme: 'grid',
        headStyles: {halign: 'center', fillColor: [41, 128, 186]},
    });
    
    pdf.addPage();
    pdf.addImage(logo, 'PNG', 15, 8, 14, 14);
    pdf.setFontSize(11).setFont('helvetica', 'bold');
    pdf.text(["INSPECCIÓN DE PRODUCTO TERMINADO", "Varela Hermanos S.A."], 107.95, 11, {'align': 'center'});;
    pdf.setFontSize(10);
    pdf.text(["DEFECTOS"], 107.95, 24, {'align': 'center'});
    pdf.text(["TIPOS DE DEFECTOS"], 107.95, 110, {'align': 'center'});
    
    pdf.autoTable({
        head: [
            [
                {content: "", styles: {halign: 'center', fillColor: [41, 128, 186]}},
                {content: 'Inspección 1', colSpan: 3, styles: {halign: 'center', fillColor: [41, 128, 186]}},
                {content: 'Inspección 2', colSpan: 3, styles: {halign: 'center', fillColor: [41, 128, 186]}},
                {content: 'Inspección 3', colSpan: 3, styles: {halign: 'center', fillColor: [41, 128, 186]}},
                {content: 'Inspección 4', colSpan: 3, styles: {halign: 'center', fillColor: [41, 128, 186]}},
                {content: 'Inspección 5', colSpan: 3, styles: {halign: 'center', fillColor: [41, 128, 186]}},
            ],
            [
                {content: "", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Menor", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Mayor", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Crítico", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Menor", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Mayor", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Crítico", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Menor", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Mayor", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Crítico", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Menor", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Mayor", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Crítico", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Menor", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Mayor", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Crítico", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Menor", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Mayor", styles: {halign: 'center', fillColor: [105, 166, 207]}},
                {content: "Crítico", styles: {halign: 'center', fillColor: [105, 166, 207]}},
            ]
        ],
        body: [
            ['Envases', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['Líquido', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['Tapas', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['Cápsula', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['Corcho', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['Etiqueta Frente', 'AG 2', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['Etiqueta Recetario', 'AG 1', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['Etiqueta Strip', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['Etiqueta Hombro', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['Etiqueta Cuello', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['Etiqueta Óvalo', 'AG 2', '', '', 'AG 1', '', '', '', '', '', '', '', '', '', '', ''],
            ['Total de unidades\ndefectuosas por inspección', '5', '0', '0', '1', '0', '0', '', '', '', '', '', '', '', '', ''],
            [
                {content: 'Cantidad Inspeccionada'}, 
                {content: '12 unidades', colSpan: 3},
                {content: '12 unidades', colSpan: 3},
                {content: '', colSpan: 3},
                {content: '', colSpan: 3},
                {content: '', colSpan: 3},
            ],
        ],
        startY: 26,
        styles: {fontSize: 7, cellPadding: 1},
        columnStyles: {
            0: {fillColor: [221, 221, 221], textColor: [0, 0, 0]},
            4: {fillColor: [245, 245, 245]},
            5: {fillColor: [245, 245, 245]},
            6: {fillColor: [245, 245, 245]},
            10: {fillColor: [245, 245, 245]},
            11: {fillColor: [245, 245, 245]},
            12: {fillColor: [245, 245, 245]},
            
        },
        theme: 'grid'
    });

    pdf.autoTable({
        head: [
            [
                {content: "", styles: {halign: 'center', fillColor: [41, 128, 186]}},
                {content: 'Envases', colSpan: 2, styles: {halign: 'center', fillColor: [41, 128, 186]}},
                {content: 'Líquido', colSpan: 2, styles: {halign: 'center', fillColor: [41, 128, 186]}},
                {content: 'Tapas', colSpan: 2, styles: {halign: 'center', fillColor: [41, 128, 186]}},
                {content: 'Etiquetas', colSpan: 4, styles: {halign: 'center', fillColor: [41, 128, 186]}},
            ],
        ],
        body: [
            [
                {content: "Defecto Crítico", rowSpan: 7},
                {content: "Columpio (A)"},
                {content: "100"},
                {content: "Color no\nCaracterístico (M)", rowSpan: 4, styles: {valign: 'center'}},
                {content: "", rowSpan: 4},
                {content: "", rowSpan: 4},
                {content: "", rowSpan: 4},
                {content: "", rowSpan: 4},
                {content: "", rowSpan: 4},
                {content: "", rowSpan: 4},
                {content: "", rowSpan: 4},
            ],
            [
                {content: "Rajaduras (B)"},
            ],
            [
                {content: "Aguja (C)"},
            ],
            [
                {content: "Aristas Cortante (D)"}
            ],
            [
                {content: "Vidrio Suelto (E)"},
                {content: ""},
                {content: "Materia Extraña (N)", rowSpan: 3, styles: {valign: 'center'}},
                {content: "", rowSpan: 3},
                {content: "", rowSpan: 3},
                {content: "", rowSpan: 3},
                {content: "", rowSpan: 3},
                {content: "", rowSpan: 3},
                {content: "", rowSpan: 3},
                {content: "", rowSpan: 3},
            ],
            [
                {content: "Vidrio Adherido (F)"}
            ],
            [
                {content: "Puente Roto (G)"}
            ],

            [
                {content: "Defecto Mayor", rowSpan: 6},
                {content: "Envase Rayado (H)"},
                {content: ""},
                {content: "Nivel Alto (O)", rowSpan: 2},
                {content: "100", rowSpan: 2},
                {content: "Liqueo en Tapas (Q)"},
                {content: "100"},
                {content: "Etiqueta Torcida (X)"},
                {content: "100"},
                {content: "Defecto de Impresión (AH)"},
                {content: ""},
            ],

            [
                {content: "Falta de Codificación (I)", rowSpan: 2},
                {content: "", rowSpan: 2},
                {content: "Fecha Incorrecta (R)"},
                {content: ""},
                {content: "Etiqueta Equivocada (Y)"},
                {content: ""},
                {content: "Color Incorrecto (AI)"},
                {content: ""},
            ],
  
            [
                {content: "Nivel Bajo (P)", rowSpan: 4},
                {content: "", rowSpan: 4},
                {content: "Tapa Rota (S)"},
                {content: ""},
                {content: "Falta de Etiqueta (AA)"},
                {content: ""},
                {content: "Invertidas (AJ)"},
                {content: ""},
            ],

            [
                {content: "Envase Manchado (J)", rowSpan: 3},
                {content: "", rowSpan: 3},
                {content: "Diferencia Excesiva\nen el Tono de Color (T)"},
                {content: ""},
                {content: "Leyenda Equivocada (AB)"},
                {content: ""},
                {content: "Diferencia Excesiva\nen el Tono de Color (AK)", rowSpan: 3},
                {content: "", rowSpan: 3},
            ],
            
            [
                {content: "Puente Roto (U)"},
                {content: ""},
                {content: "Etiqueta Arrugada (AC)", rowSpan: 2},
                {content: "", rowSpan: 2},
            ],

            [
                {content: "Código Incorrecto (V)"},
                {content: ""},
            ],

            [
                {content: "Defecto Menor", rowSpan: 4},
                {content: "Disparejo (K)"},
                {content: "5"},
                {content: "", rowSpan: 4},
                {content: "", rowSpan: 4},
                {content: "Tapa Floja (W)", rowSpan: 4},
                {content: "", rowSpan: 4},
                {content: "Etiqueta Rota (AD)"},
                {content: ""},
                {content: "Sucias (AL)"},
                {content: ""},
            ],
            [
                {content: "Fracturas que no Afectan la Resistencia (L)", rowSpan: 3},
                {content: "8", rowSpan: 3},
                {content: "Exceso de Pegamento (AE)"},
                {content: ""},
                {content: "Etiqueta Pelada (AM)"},
                {content: ""},
            ],
            [
                {content: "Falta de Pegamento (AF)"},
                {content: ""},
                {content: "Etiqueta Doblada (AN)"},
                {content: "100"},
            ],
            [
                {content: "Fuera de Centro (AG)"},
                {content: "100"},
                {content: ""},
                {content: ""},
            ],
            [
                {content: ""},
                {content: "Otros (Z)"},
                {content: ""},
                {content: "Otros (Z)"},
                {content: ""},
                {content: "Otros (Z)"},
                {content: ""},
                {content: ""},
                {content: ""},
                {content: "Otros (Z)"},
                {content: ""},
            ]
        ],
        startY: 112,
        styles: {fontSize: 7, cellPadding: 1, halign: 'center', valign: 'middle'},
        columnStyles: {
            0: {fillColor: [221, 221, 221], textColor: [0, 0, 0]},
            3: {fillColor: [245, 245, 245]},
            4: {fillColor: [245, 245, 245]},
            7: {fillColor: [245, 245, 245]},
            8: {fillColor: [245, 245, 245]},
        },
        theme: 'grid'
    });

    let observacion = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    pdf.setFontSize(8);
    pdf.text(["TOTAL DE DEFECTOS", "TOTAL DE UNIDADES DEFECTUOSAS\nCRÍTICO"], 15, 230, {lineHeightFactor: 2});
    pdf.text(["TOTAL DE UNIDADES DEFECTUOSAS\nMAYOR", "TOTAL DE UNIDADES DEFECTUOSAS\nMENOR"], 120, 230, {lineHeightFactor: 2});
    pdf.text("Observaciones", 15, 242, {align: 'justify', maxWidth: 186});
    pdf.setFont(undefined, "normal");
    pdf.text(observacion, 15, 247, {align: 'justify', maxWidth: 186});

    pdf.text(["________________________________", "Aseguramiento de la Calidad"], 59, 265, {align: 'center'});
    pdf.text(["________________________________","Operaciones"], 170, 265, {align: 'center'});
    
    pdf.setFont(undefined, "bold");
    pdf.text("Informado:", 130, 265);
    pdf.text("Revisado por:", 15, 265);


    window.open(pdf.output('bloburl'), '_blank');
    // pdf.save("reporte.pdf")
}

export default ConvertToPdf;