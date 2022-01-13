import AvailableMeals from "../AvailableMeals/AvailableMeals";
import styles from './Meals.module.css';
import MealsMenu from '../MealsMenu/MealsMenu'
import { Fragment, useState } from "react";
import Menu from '../../../store/menu'

let Meals = () => {
    let [currentMenu,ChangeCurrentMenu] = useState(0);
    let changeMenu=(data)=>{
        ChangeCurrentMenu(data);
    }
    return(
        <Fragment>
        <MealsMenu data = {Menu} changeMenu = {changeMenu}/>
        <div className={styles['meals-wrap']}>
        <AvailableMeals data = {Menu[currentMenu].meals}/>
        </div>
        </Fragment>
    )
}

export default Meals;