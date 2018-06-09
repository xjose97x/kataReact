import React, {Component} from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <p className="App-intro">
          El ejercicio consiste en recorrer un array en espiral de izquierda a derecha, 
          se deben realizar test de lo que se crea necesario del código con JEST.
          Para poder realizar el ejercicio es necesario:
        </p>
        
        <ol>
          <li>Crear e imprimir el array original de dos dimensiones nxn</li>
          <li>Imprimir el output requerido</li>
        </ol>
        
        <img className="example" src="/assets/example.png"/>
      </div>
    );
  }
}

export default Main;
