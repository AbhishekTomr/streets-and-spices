import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Cart from './components/Cart/Cart/Cart';
import Header from './components/Layout/Hearder/Header';
import Meals from './components/Meals/Meals/Meals';
import Overlay from './components/UI/Overlay/Overlay';
import CartProvider from './store/CartProvider';
import MealsSummary from "./components/Layout/MealsSummary/MealsSummary";


function App() {
  let [cartStatus,changeCartStatus] = useState(false);
  let [initialState,changeInitial] = useState(true);
  let changeCart = () => {
      changeCartStatus(function(previousState){
        return(!previousState);
      });
  }
  let OpenMenu = ()=>{
    changeInitial(previousState=>!previousState);
  }
  return (
    <CartProvider>
    {cartStatus && ReactDOM.createPortal((<Overlay><Cart changeCart={changeCart}/></Overlay>),document.getElementById('overlay-item'))}
    <Header initialState={initialState} changeCart={changeCart}/>
    <main>
    <MealsSummary currentState = {initialState} changeInitial={OpenMenu}/>
    {!initialState && <Meals/>}
    </main>
    </CartProvider>
  );
}

export default App;
