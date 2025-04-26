import { createContext, ReactNode, useState } from 'react'
import { productProps } from '../components/products'


interface CartContextData{
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (newItem: productProps) => void;
}

interface CartProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CartProviderProps{
    children: ReactNode;
}

// Qual o meu contexto ? Um carrinho de produtos
export const CartContext = createContext({} as CartContextData);


// O meu provider que vai fornecer esse meu carrinho para a minha aplicação
export function CartProvider({ children }: CartProviderProps){

    const [cart, setCart] = useState<CartProps[]>([]);


    function addItemCart(newItem: productProps){

        const indexItem = cart.findIndex(item => item.id === newItem.id);

        //caso encontre (!== -1) 
        if ( indexItem !== -1){
            const cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount + 1;

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
            setCart(cartList);
            return;
        }

        const data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data]);

    }

    return (
        <CartContext.Provider value={{cart, cartAmount: cart.length, addItemCart}}>
            {children}
        </CartContext.Provider>
    )
}
