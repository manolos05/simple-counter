import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PropTypes from 'prop-types'
import reportWebVitals from './reportWebVitals';

function Simplecounter (props){
    return (

      <div className="cronometro">
        <div className="icono">
          <i class="bi bi-stopwatch"></i>
        </div>
        <div className="five">{props.digiFive % 10}</div>
        <div className="four">{props.digiFour % 10}</div>
        <div className="three">{props.digiThree % 10}</div>
        <div className="two">{props.digiTwo % 10}</div>
        <div className="one">{props.digiOne % 10}</div>
      </div>
    )
}

Simplecounter.propTypes = {
  digiFive: PropTypes.number,
  digiFour: PropTypes.number,
  digiThree: PropTypes.number,
  digiTwo: PropTypes.number,
  digiOne: PropTypes.number

};


function Restart(){
  return (
    <div className='bt-reset pt-4 d-flex justify-content-center'>
      <button type="button" class="btn btn-dark" onClick={()=>(counter = 0)}>Restart</button>
    </div>
  )

}



let counter = 0;

const counterInterval = setInterval(function (){
  const five = Math.floor(counter/10000);
  const four = Math.floor(counter/1000);
  const three = Math.floor(counter/100);
  const two = Math.floor(counter/10);
  const one = Math.floor(counter/1);
counter++

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Simplecounter  
    digiOne={one} 
    digiTwo={two}
     digiThree={three}
      digiFour={four} 
      digiFive={five}/>
   
    <Restart />
 
  </React.StrictMode>
);
}, 1000);











// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
