import './App.css';
import {useState} from 'react';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Marcial");
  const greenTitle = true;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este parágrado é do App.js!</p>   
      <p style={{color:"blue", padding:"25px", borderBottom:"2px solid red"}}>Este elemento está estilizado de forma inline!</p> 
      <p style={{color:"magenta", padding:"25px", borderBottom:"2px solid brown"}}>Este elemento está estilizado de forma inline!</p>
      <p style={{color:"magenta", padding:"25px", borderBottom:"2px solid red"}}>Este elemento está estilizado de forma inline!</p>  
      <h3 style={n < 10 ? ({color:"purple"}) : ({color:"pink"})}>CSS Dinâmico</h3>
      <h3 style={n > 10 ? ({color:"purple"}) : ({color:"pink"})}>CSS Dinâmico</h3>
      <h3 style={name === "Marcial" ? {color:"green", backgroundColor:"black"} : null}>Teste Nome!</h3>
      <h3 className={greenTitle ? "green-title" : "title"}>Este Título Tem Classe Dinâmica!</h3>
      <Title />
    </div>
  );
};

export default App;