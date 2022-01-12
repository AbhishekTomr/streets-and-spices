import React,{Fragment} from "react";
import CartButton from "../../Cart/CartButton/CartButton";
import style from './Header.module.css';
import mainimage from '../../../assets/meals.jpeg';

let Header = (props) => {
    return(
        <Fragment>
        <header className={style['main-header']}>
        <h1 className={style['main-heading']}>Streets And Spices</h1>
        <CartButton changeCart = {props.changeCart}>Cart</CartButton>
        </header>
        <aside className={style['main-img']}>
        <img src={mainimage} alt='food image'/>
        </aside>
        </Fragment>
    )
}

export default Header;