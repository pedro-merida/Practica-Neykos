import NotificationTable from "./NotificationTable";
import React from "react";
import Graph from "./Graph"
import ConvertToPdf from "./ConvertToPdf";
// import HtmlExample from "./HtmlExample";

function LandingPage(){
    
    const download = async () => {
        await ConvertToPdf();
    }

    return(
        <div id="container-div">
            <button onClick={download}>Download</button> 
            <div id="divToPrint">
                <div id='neykos-logo-container'>
                    <h1>Notificaciones</h1>
                    <NotificationTable/>
                    <br></br>
                    <Graph/>
                    <br></br>
                </div>
                {/* <HtmlExample/>  */}
            </div>
            <br></br>
        </div>
    )
}

export default LandingPage;