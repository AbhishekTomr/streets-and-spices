import Button from '../../UI/Button/Button';
import styles from './MealsSummary.module.css'

let MealsSummary = (props)=>{
    let classes = `${styles.summary1} ${!props.currentState?styles.summary:''}` 
    return(
        <div className={classes}>
            <h2 className={styles.head}>Delicious Food, Delivered To You</h2>
            <p className={styles.p1}>Choose your favorite meal from broad selection of available meals and enjoy a delivious lunch or dinner at home</p>
            <p className={styles.p2}>All our meals are cooked with high quality ingredients, just in tume and of course by experienced chefs!</p>
            {props.currentState && <Button className={styles.btn1} data={{onClick:props.changeInitial}}>Order Now</Button>}
        </div>
    )
}

export default MealsSummary;