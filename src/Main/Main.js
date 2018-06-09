import React, {Component} from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  transpose = (matrix) => matrix[0].map((column, i) => matrix.map(row => row[i]));
  spiral(matrix, prevResult) {
    if(matrix.length === 1){
      return prevResult + ' ' + matrix[0].join(' ');
    }
    return (this.spiral(this.transpose(matrix.slice(1, matrix.length)).reverse(), !prevResult ? matrix[0].join(' ') :  prevResult + ' ' + matrix[0].join(' ')));
  };

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
