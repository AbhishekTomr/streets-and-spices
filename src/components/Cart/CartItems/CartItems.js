import styles from './CartItems.module.css';
import Input from '../../UI/Input/Input'

let CartItems = (props) => {

    let removeItem=()=>{
        props.removeItem(props.item);
    }
    let addItem = ()=>{
        let currentItem = {...props.item,numOf:1};
        props.addItem(currentItem);
    }
    return (<li className={styles['cart-item']}>
           <span className={styles['item-name']}>{props.item.mealName}</span>
           <div className={styles['cost-data']}>
           <div className={styles['cost-add']} onClick={addItem}>+</div>
           <div className={styles['cost-remove']} onClick={removeItem}>-</div>
           <div className={styles['num-of']}>{props.item.numOf}</div>
           <span className={styles['item-cost']}>&nbsp;X {props.item.cost} =</span>
           <span className={styles['item-total']}>{props.item.cost*props.item.numOf}</span>
           </div>
           </li>)
}

export default CartItems;