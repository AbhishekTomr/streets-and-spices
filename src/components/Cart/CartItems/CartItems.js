import styles from './CartItems.module.css';

let CartItems = (props) => {

    let removeItems=()=>{
        props.removeItem(props.item);
    }
    let addItems = ()=>{
        let currentItem = {...props.item,numOf:1};
        props.addItem(currentItem);
    }
    return (<li className={styles['cart-item']}>
           <span className={styles['item-name']}>{props.item.mealName}</span>
           <div className={styles['cost-data']}>
           <div className={styles['cost-add']} onClick={addItems}>+</div>
           <div className={styles['cost-remove']} onClick={removeItems}>-</div>
           <div className={styles['num-of']}>{props.item.numOf}</div>
           <span className={styles['item-cost']}>&nbsp;X {props.item.cost} =</span>
           <span className={styles['item-total']}>{props.item.cost*props.item.numOf}</span>
           </div>
           </li>)
}

export default CartItems;