import React from "react"
import "../styles/style.css"
import logo from "../imgs/logo.jpg"

export default function HtmlExample() {

  return (
    <div>
        <div id="grid-1">
            <div>
                <img src={logo} alt="logo varela hermanos" width="100" height="100" ></img>
            </div>
            <div>
                <h3>INSPECCIÓN DE PRODUCTO TERMINADO</h3>
                <h4>Varela Hermanos S.A.</h4>
            </div>
        </div>

        <br></br>

        <form>
            <div id="grid-2">
                <div>
                    <div>
                        <label for="fname">Fecha:</label>
                        <input type="text" id="fname" name="fname"/>
                    </div>
                    <div>
                        <label for="lname">Producto:</label>
                        <input type="text" id="lname" name="lname"/>
                    </div>
                </div>

                <div>
                    <div>
                        <label for="fname">Presentación:</label>
                        <input type="text" id="fname" name="fname"/>
                    </div>
                    <div>
                        <label for="lname">Línea:</label>
                        <input type="text" id="lname" name="lname"/>
                    </div>
                </div>

                <div>
                    <label for="lname">Inspector:</label>
                    <input type="text" id="lname" name="lname"/>
                </div>

            </div>
        </form>

        <br></br>

        <fieldset>
        <legend>Tipo de inspección:</legend>
    
        <div>
            <input type="checkbox" checked/>
            <label>Producción</label>
        </div>
    
        <div>
            <input type="checkbox"/>
            <label>Retrabajo (producto en proceso)</label>
        </div>
        
        <div>
            <input type="checkbox"/>
            <label>Re-inspección por detención</label>
        </div>
    
        <div>
            <input type="checkbox"/>
            <label>Transferencia de Inventario</label>
        </div>
        </fieldset>

        <br></br>
        
        <table>
        <tr>
            <th></th>
            <th>Primera Inspección</th>
            <th>Segunda Inspección</th>
            <th>Tercera Inspección</th>
            <th>Cuarta Inspección</th>
        </tr>
        <tr>
            <th>Hora Pallet</th>
            <td>13:50</td>
            <td>14:07</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>Código de Trazabilidad</th>
            <td>LD1253</td>
            <td>LD1255</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>C. de Barra Producto</th>
            <td>LD125354542</td>
            <td>LD125554542</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>Registro Sanitario</th>
            <td>OK</td>
            <td>OK</td>
            <td></td>
            <td></td>
        </tr>
        </table>
    </div>
    );}