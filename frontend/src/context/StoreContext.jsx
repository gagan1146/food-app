import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = {
                ...prev,
                [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
            };
            console.log("Updated Cart: ", updatedCart); // Debugging log
            return updatedCart;
        });
    };
    

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    
    return (<StoreContext.Provider value ={contextValue}>
            {props.children}
        </StoreContext.Provider>
        )
}
export default StoreContextProvider;