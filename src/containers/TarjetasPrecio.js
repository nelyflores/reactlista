import React from "react";
import Precio from "../components/Precio";
import {Col, CardPanel, Row} from 'react-bootstrap';
export default class TarjetasPrecio extends React.Component {
  render() {
    return(
      <Row>
      <Precio/>
      <Precio/>
      <Precio/>
      <Precio/>
      </Row>
    );
  }
}
