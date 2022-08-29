import { useState } from 'react'
import './App.css'
import QuoteBox from './Componentes/QuoteBox'
import Buttons from "./Componentes/Buttons"
import quote from "./quote.json"


function App() {


    const randomIndex = Math.floor(Math.random() * quote.length);
    const [index, setIndex] = useState(randomIndex); 
    
    const change = () => {
    const randomIndex = Math.floor(Math.random() * quote.length);
    setIndex(randomIndex);
};

const colors = ['#845EC2','#D65DB1','#FF6F91','#FF9671','#FFC75F', '#FFC75F'];
const randomColor = Math.floor(Math.random()*colors.length);
document.body.style = `background: ${colors[randomColor]}`;

return (
  <div className="App">
      <div className="container">
        <div className="card">
          <QuoteBox quote={quote[index]} colors={colors[randomColor]}/>
          <Buttons  change={change} colors={colors[randomColor]}/>
        </div>
      </div>
  </div>
);
}

export default App;