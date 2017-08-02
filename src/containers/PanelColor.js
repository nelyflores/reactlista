import React from "react";
import  ColorGrande from "../components/ColorGrande";
import  ColorPeque from "../components/ColorPeque";
import {Row}  from 'react-bootstrap';
export default class PanelColor extends React.Component {
  render() {
    return(
      <Row>
      <ColorGrande/>
      <ColorPeque  estilo={{height: "130px"}} color="primary" titulo="New visitors" parrafo="1.5k"/>
        <ColorPeque   estilo={{height: "130px"}} color="warning"titulo="Bounce Rate" parrafo="50%"/>
        <Row>
          <ColorGrande/>
            <ColorPeque  estilo={{height: "130px"}} color="danger" titulo="Search" parrafo="28%"/>
              <ColorPeque estilo={{height: "130px"}} color="success" titulo="Traffic" parrafo="140.5Kb"/>

        </Row>
      </Row>
    );

  }
}
