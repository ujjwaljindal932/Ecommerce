import { createContext, useReducer ,useContext, useEffect,useState} from "react";
import reducer from "../reducer/cartReducer";

const CartContext=createContext();

const getLocalCartData=()=>{
    let localCartData=localStorage.getItem("jindalCart");
    return JSON.parse(localCartData);
//     if(localCartData === []){
//         return [];
//     }
//     else{
//         return JSON.parse(localCartData);
//     }
};

const initialState = {
    cart:getLocalCartData(),
    // cart:[],
    total_item:"",
    total_price:"",
    shipping_fee:50000,
};

const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    const [showConfirm, setShowConfirm] = useState(false);

    const addToCart=(id,color,amount,product)=>{
        dispatch({type:"ADD_TO_CART",payload: {id,color,amount,product}});
    }

    const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM",payload: id});
    }

    // const clearCart=()=>{
    //     dispatch({type:"CLEAR_CART"});
    // };

    




      const handleClearCartClick = () => {
        setShowConfirm(true);
      };
    
      const handleConfirmClear = () => {
        dispatch({ type: 'CLEAR_CART' });
        setShowConfirm(false);
      };
    
      const handleCancelClear = () => {
        setShowConfirm(false);
      };





    const setDecrease=(id)=>{
        dispatch({type:"DECREASE_ITEM",payload: id});
    }

    const setIncrease=(id)=>{
        dispatch({type:"INCREASE_ITEM",payload: id});
    }

    //to add data to local storage
    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM"});
        dispatch({type:"CART_TOTAL_PRICE"});
        localStorage.setItem("jindalCart",JSON.stringify(state.cart));
    },[state.cart]);

    return <CartContext.Provider value={{...state,showConfirm,addToCart,removeItem,handleClearCartClick, handleConfirmClear,handleCancelClear,setDecrease,setIncrease}}>
        {children}
    </CartContext.Provider>;
};

const useCartContext=()=>{
    return useContext(CartContext);
}

export {CartProvider,useCartContext};