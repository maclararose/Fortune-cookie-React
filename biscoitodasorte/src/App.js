import React, {Component} from 'react';
import biscoito from './assets/biscoito.png';
import './style.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase:''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.',
                   'O bom-senso vale mais que muito conhecimento.', 
                   'O riso é a menor distância entre duas pessoas.', 
                   'Deixe de lado as preocupações e seja feliz.',
                   'Realize o óbvio, pense no improvável e conquiste o impossível.',
                   'Acredite em milagres, mas não dependa deles.',
                   'A maior barreira para o sucesso é o medo do fracasso'];
  }

  quebraBiscoito(){
    let state = this.state;
    let number = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '"'+this.frases[number]+'"';
    this.setState(state);

  }

  render(){
    return(
      <div className="container">
        <img src={biscoito} className="img"/>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="frase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;