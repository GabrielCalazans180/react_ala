import React from "react";

class Botao extends React.Component<{ texto: string }> {
  render() {
    return <button>{this.props.texto}</button>;
  }
}

export default Botao;
