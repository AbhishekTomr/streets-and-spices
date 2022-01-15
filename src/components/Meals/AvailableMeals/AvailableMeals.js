import styles from './AvailableMeals.module.css';
import MealItem from '../Mealtem/Mealtem'

let AvailableMeals = (props) => {

    let MealsList = props.data;

    return(
        <div className={styles.available}>
        <h2 className={styles.choose}>Choose your favorite</h2>
        <ul className={styles['meals-list']}>
            {MealsList.map((Mitem)=>{
                return(
                    <MealItem key={Mitem.id} 
                    Mitem = {Mitem}/>
                )
            })}
        </ul>
        </div>
    )
}

export default AvailableMeals;