import styles from './MealsMenu.module.css'

let MealsMenu = (props) =>{
    let menu = props.data;
    let changeMenu = (event)=>{
        props.changeMenu(event.target.id);
    }
    return(
        <ul className={styles.menu}>
            {menu.map((item,index)=>{
                return(<li key = {item.id} id={index} className={styles['menu-item']} onClick = {changeMenu}>{item.title}</li>)
            })}
        </ul>
    )
}
export default MealsMenu;