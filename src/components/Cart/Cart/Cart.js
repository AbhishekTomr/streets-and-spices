import styles from './Cart.module.css' 
import Button from '../../UI/Button/Button'
import CartItems from '../CartItems/CartItems'
import cartContext from '../../../store/cartContext'
import {useContext,useState} from 'react'
import CheckOut from '../CheckOut/CheckOut'

let Cart = (props) => {
    let [checkout,changeCheckOut] = useState(false);
    let changeCheckOutCart = () => {
        changeCheckOut(previousState=> !previousState);
    }
    let ctx = useContext(cartContext);
    let items = ctx.item;

     if(checkout){
         return(<CheckOut total={ctx.totalAmt} onClick={changeCheckOutCart}></CheckOut>);
     }

    return(
        <div className={styles.model}>
        <h2>Cart Summary</h2>
        <div className={styles.items}>
        <ul className={styles['cart-items']}>
        {items.map((item)=>{
            return(<CartItems key = {item.id} item={item} addItem={ctx.addItem} removeItem={ctx.deleteItem}/>)
        })}
        </ul>
        </div>
        <div className={styles.total}>Total : {ctx.totalAmt} &#8377;</div>
        <div className={styles.btns}>
        <Button data = {{type:'button',onClick:props.changeCart}}>Cancel</Button>
        {Boolean(ctx.item.length) && <Button data = {{type:'button',onClick: changeCheckOutCart}}>CheckOut</Button>}
        </div>
        </div>
    );

}

export default Cart;