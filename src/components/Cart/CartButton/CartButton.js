import { useContext } from 'react';
import CartContext from '../../../store/cartContext';
import CartIcon from '../../UI/CartIcon';
import style from './CartButton.module.css'

let CartButton = (props) =>
{
    let cartCtx = useContext(CartContext);
    let numberOfItems = cartCtx.item.reduce((currentAmt,item)=>{
        return currentAmt + item.numOf;
    },0);
    return(
        <button className={style['cart-button']} onClick={props.changeCart}>
        <span className={style['cart-icon']}>
        <CartIcon/>
        </span>
        <span className={style['cart-status']}>Your Cart</span>
        <span className={style['cart-item']}>{numberOfItems}</span>
        </button>
    );
}

export default CartButton;