import styles from './Overlay.module.css';

let Overlay = (props)=>{
    return(
        <div className={styles.overlay}>
        {props.children}
        </div>
    );
}

export default Overlay;