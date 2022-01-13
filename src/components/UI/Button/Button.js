import styles from './Button.module.css'
let Button = (props) => {
    let classes = props.className? `${styles.btn} ${props.className}`:styles.btn; 
    return(<button className={classes} {...props.data}>{props.children}</button>)

}
export default Button;