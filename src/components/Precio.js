
import React from "react";
import {Col, Panel} from 'react-bootstrap';
export default class Precio extends React.Component {
  render() {
    return(
      <Col xs={3} md={3}>
      <Panel style={this.props.estilo}>
      <p>{this.props.titulo}</p>
      <p>{this.props.parrafo}</p>
      </Panel>
      </Col>
    )

  }
}
