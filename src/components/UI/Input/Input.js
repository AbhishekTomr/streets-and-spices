import React from 'react';
import styles from './Input.module.css' 

let Input = React.forwardRef((props,ref)=>{
    let classes = styles['input-num'];
    return(
        <input {...props.data} className={classes} ref={ref}/>
    )
})
export default Input;