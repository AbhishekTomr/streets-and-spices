import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Cart from './components/Cart/Cart/Cart';
import Header from './components/Layout/Hearder/Header';
import Meals from './components/Meals/Meals/Meals';
import Overlay from './components/UI/Overlay/Overlay';
import CartProvider from './store/CartProvider';


function App() {
  let [cartStatus,changeCartStatus] = useState(false);
  let changeCart = () => {
      changeCartStatus(function(previousState){
        return(!previousState);
      });
  }
  return (
    <CartProvider>
    {cartStatus && ReactDOM.createPortal((<Overlay><Cart changeCart={changeCart}/></Overlay>),document.getElementById('overlay-item'))};
    <Header changeCart={changeCart}/>
    <main>
    <Meals/>
    </main>
    </CartProvider>
  );
}

export default App;
