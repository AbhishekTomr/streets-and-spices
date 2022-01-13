import React from "react";
import CartButton from "../../Cart/CartButton/CartButton";
import style from './Header.module.css';

let Header = (props) => {
    return(
        <div className={style['header-wrap']}>
        <header className={style['main-header']}>
        <h1 className={style['main-heading']}>Streets And Spices</h1>
        {!(props.initialState) && <CartButton changeCart = {props.changeCart}>Cart</CartButton>}
        </header>
        </div>
    )
}

export default Header;