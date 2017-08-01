import React from "react";
import TarjetasPrecio from "./containers/TarjetasPrecio";
import PanelColor from "./containers/PanelColor";


export default class App extends React.Component{
  render() {
    return (
      <div>
    <TarjetasPrecio/>
    <PanelColor/>
    </div>
);
  }
}
