import { useRef, useState } from 'react';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';
import styles from './AddToCartButton.module.css';

let AddToCartButton = (props) => {
    let txt = '+ Add';
    let [inpVal,changeInpVal] = useState(0);
    let changeVal = (event) => {changeInpVal(event.target.value)}
    let inRef = useRef();
    let addToCart = ()=>{
        let data = inRef.current.value;
        let numOf = +data;
        if(data.trim()===0||numOf<1)
        {
            return;
        }
        props.addItem(numOf);
    }
    return(
        <div className={styles['addtocart-wrap']}>
        <span className={styles['meal-cost']}>{props.Mitem.cost} &#8377;</span>
        <Input data = { {type:'number', min:'0', max: '5', placeholder:'0',value:inpVal,onChange :changeVal}} ref={inRef} />
        <Button data = {{type:'button', onClick: addToCart}} className={props.className}>{txt}</Button>
        </div>
        )    
}

export default AddToCartButton;