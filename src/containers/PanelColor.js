import React from "react";
import  ColorGrande from "../components/ColorGrande";
import  ColorPeque from "../components/ColorPeque";
import {Row}  from 'react-bootstrap';
export default class PanelColor extends React.Component {
  render() {
    return(
      <Row>
      <ColorGrande/>
      <ColorPeque/>
        <ColorPeque/>
        <Row>
          <ColorGrande/>
            <ColorPeque/>
              <ColorPeque/>

        </Row>
      </Row>
    );

  }
}
