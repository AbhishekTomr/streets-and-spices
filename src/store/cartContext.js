import React from 'react';

let CartContext = React.createContext({
    items:[],
    totalAmt:0,
    addItem: (item)=> {},
    deleteItem: (item)=>{}
});

export default CartContext;