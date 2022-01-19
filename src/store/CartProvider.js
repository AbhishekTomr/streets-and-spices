import CartContext from './cartContext.js';
import {useReducer} from 'react';

let defaultCartState = {
    item: [],
    totalAmt : 0
}
let cartReducer = (currentState,action) =>{
    if(action.type==='addItem')
    {
        let itemPresent = currentState.item.findIndex(function(item){
            if(item.id===action.item.id){
                return true;
            }
            return false;
        })
        let updatedCartItems;
        let updatedTotalAmt = parseInt(currentState.totalAmt) + (parseInt(action.item.cost)*parseInt(action.item.numOf)); 
        if(itemPresent!==-1)
        {
            let currentItem = {...currentState.item[itemPresent], numOf: currentState.item[itemPresent].numOf+action.item.numOf}
            updatedCartItems = [...currentState.item];
            updatedCartItems[itemPresent] = currentItem;
        }
        else{
            updatedCartItems = currentState.item.concat(action.item);
        }
        return({item: updatedCartItems,totalAmt: updatedTotalAmt});
    }
    if(action.type==='deleteItem')
    {
        let itemPresent = currentState.item.findIndex(function(item){
            if(item.id===action.item.id){
                return true;
            }
            return false;
        })
        let updatedCartItems;
        let updatedTotalAmt = parseInt(currentState.totalAmt) - (parseInt(action.item.cost));
        if(action.item.numOf===1 && itemPresent !== -1)
        {
            currentState.item.splice(itemPresent,1);
            updatedCartItems = [...currentState.item];        
        }
        else{
            let currentItem = {...currentState.item[itemPresent],numOf:(action.item.numOf-1)};
            updatedCartItems = [...currentState.item];
            updatedCartItems[itemPresent] = currentItem;
        }
        return({item: updatedCartItems,totalAmt: updatedTotalAmt});
    }
}

let CartProvider = (props) => {    
    let [cartStatus,updateState] = useReducer(cartReducer,defaultCartState);
    let addItemToCartHandler = (item) => {
        updateState({type:'addItem',item:item});
    };
    let deleteItemFromCartHandler = (item) => {
        updateState({type:'deleteItem',item:item});
    };
    
    let cartData = {
        item : cartStatus.item,
        totalAmt : cartStatus.totalAmt,
        addItem : addItemToCartHandler,
        deleteItem: deleteItemFromCartHandler 
    }

    return (
        <CartContext.Provider value = {cartData}>
        {props.children}
        </CartContext.Provider>)

}

export default CartProvider;