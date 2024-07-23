const cartReducer = (state,action) => {
    if(action.type==="ADD_TO_CART"){
        let{id,color,amount,product}=action.payload;
        // console.log(product);

        let cartProduct;

        cartProduct={
            id:id+color,
            name : product.name,
            color,
            amount,
            image:product.image[0].url,
            price:product.price,
            max : product.stock,
        }

        return{
            ...state,
            cart:[...state.cart,cartProduct],
        }
    }

    if(action.type==="REMOVE_ITEM"){
        let updatedCart=state.cart.filter(
            (curItem)=>curItem.id!==action.payload
        );
        return{
            ...state,
            cart:updatedCart,
        }
    }

    if(action.type==="CLEAR_CART"){
        return{
            ...state,
            cart:[],
        }
    }

    if(action.type==="DECREASE_ITEM"){
        let updatedProduct=state.cart.map((curElem)=>{
            if(curElem.id===action.payload){
                let decAmount=curElem.amount-1;
                
                if(decAmount<=1){
                    decAmount=1;
                }

                return{
                    ...curElem,
                    amount:decAmount,
                };
            }
            else{
                return curElem;
            }
        });
        return{
            ...state,
            cart:updatedProduct,
        }
    }

    if(action.type==="INCREASE_ITEM"){
        let updatedProduct=state.cart.map((curElem)=>{
            if(curElem.id===action.payload){
                let incAmount=curElem.amount+1;
                
                if(incAmount>curElem.max){
                    incAmount=curElem.max;
                }
                return{
                    ...curElem,
                    amount:incAmount,
                };
            }
            else{
                return curElem;
            }
        });
        return{
            ...state,
            cart:updatedProduct,
        }
    }

    if(action.type==="CART_TOTAL_ITEM"){
        let updatedItemVal=state.cart.reduce((initialVal,curElem)=>{
            let {amount}=curElem;
            initialVal+=amount;
            return initialVal;
        },0);
        return{
            ...state,
            total_item:updatedItemVal,
        }
    }

    if(action.type==="CART_TOTAL_PRICE"){
        let updatedPriceVal=state.cart.reduce((initialVal,curElem)=>{
            let {price,amount}=curElem;
            initialVal+=price*amount;
            return initialVal;
        },0);
        return{
            ...state,
            total_price:updatedPriceVal,
        }   
    }

  return state;
}

export default cartReducer