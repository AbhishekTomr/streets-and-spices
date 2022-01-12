import styles from './AvailableMeals.module.css';
import MealItem from '../Mealtem/Mealtem'
let AvailableMeals = () => {

    let MealsList = [
        {
            id: 1,
            mealName : 'daal makhni',
            numOf : 0,
            des : 'Dal makhani is a classic Indian dish made with whole urad dal, rajma, butter and spices',
            cost : 150
        },
        {
            id: 2,
            mealName : 'kadai paneer',
            numOf : 0,
            des : 'Kadai paneer is the combination of paneer, onion and colorfull bell peppers coated with spicy tomato sauce, aromatic spices and herbs',
            cost : 180
        },
        {
            id:3,
            mealName : 'chole',
            numOf : 0,
            des : 'Punjabi Chana Masala, also known as Chole Masala, is an authentic North Indian style curry made with white chickpeas, freshly powdered spices, onions, tomatoes and herbs. ',
            cost : 130
        },
        {
            id:4,
            mealName : 'rajma',
            numOf : 0,
            des : 'red kidney beans in a thick gravy with many Indian whole spices, and is usually served with rice.',
            cost : 135
        },
        {
            id:5,
            mealName : 'mix veg',
            numOf : 0,
            des : 'Mix veg curry is made by cooking a mixture of vegetables together in a traditional Indian onion-tomato gravy.',
            cost : 120
        }
    ]

    return(
        <div className={styles.available}>
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