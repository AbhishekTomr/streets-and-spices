import styles from './Button.module.css'
let Button = (props) => {
    return(<button className={styles.btn} {...props.data}>{props.children}</button>)

}
export default Button;