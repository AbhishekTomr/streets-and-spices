import styles from './MealsSummary.module.css'

let MealsSummary = ()=>{
    return(
        <div className={styles.summary}>
            <h2 className={styles.head}>Delicious Food, Delivered To You</h2>
            <p className={styles.p1}>Choose your favorite meal from broad selection of available meals and enjoy a delivious lunch or dinner at home</p>
            <p className={styles.p2}>All our meals are cooked with high quality ingredients, just in tume and of course by experienced chefs!</p>
        </div>
    )
}

export default MealsSummary;