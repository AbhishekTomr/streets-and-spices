import AddToCartButton from '../../UI/AddToCartButton/AddToCartButton';
import { useContext } from 'react';
import styles from './MealItem.module.css';
import CartContext from '../../../store/cartContext';
let MealItem = (props)=>{
    let Mitem = props.Mitem;
    let ctx = useContext(CartContext);
    let addItem = (data) => {
        let item = Mitem;
        item.numOf = data;
        ctx.addItem(item);
    }
    return(
        <div className={styles['meal-item-wrap']}>
        <li className={styles.Mitem}>
        <span className={styles['meal-name']}>{Mitem.mealName}</span>
        <span className={styles['meal-des']}>{Mitem.des}</span>
        <span className={styles['meal-cost']}>{Mitem.cost} &#8377;</span>
        </li>
        <AddToCartButton addItem = {addItem}/>
        </div>
        )
}

export default MealItem;