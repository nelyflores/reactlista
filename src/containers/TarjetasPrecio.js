import React from "react";
import Precio from "../components/Precio";
import {  Row} from 'react-bootstrap';
export default class TarjetasPrecio extends React.Component {
  render() {
    return(
      <Row>
      <Precio titulo="20" parrafo="New followers added this month"/>
      <Precio titulo="$1250" parrafo="Average Monthly income"/>
      <Precio titulo="$13865" parrafo="Yearly income Goal"/>
      <Precio  estilo={{background:"orange",color:"white"}}    titulo="18°" parrafo="Paris"/>
      </Row>
    );
  }
}
