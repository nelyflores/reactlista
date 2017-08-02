import React from "react";
import {Col, Panel} from 'react-bootstrap';

export default class ColorGrande extends React.Component {
  render() {

    const title = (
      <div>
    <p>{this.props.titulo}</p>
     <p>{this.props.parrafo}</p>
     </div>
    );
    return(


      <Col xs={3} md={3}>
      <Panel style={this.props.estilo} header={title} bsStyle={this.props.color} >

      </Panel>
      </Col>

    );

  }
}
