import AvailableMeals from "../AvailableMeals/AvailableMeals";
import MealsSummary from "../MealsSummary/MealsSummary";
import styles from './Meals.module.css';

let Meals = () => {
    return(
        <div className={styles['meals-wrap']}>
        <MealsSummary/>
        <AvailableMeals/>
        </div>
    )
}

export default Meals;