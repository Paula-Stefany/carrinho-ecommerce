import { createContext, ReactNode, useState } from 'react'
import { productProps } from '../components/products'


interface CartContextData{
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (newItem: productProps) => void;
    reduceItemCart: (product: CartProps) => void;
    removeItemCart: (product: CartProps) => void;
    total: string;
}

export interface CartProps{
    id: number;
    title: string;
    description: string;
    price: number; // Preço do produto
    cover: string;
    amount: number; // Quantidade do produto
    total: number; // Subtotal do produto
}

interface CartProviderProps{
    children: ReactNode;
}

// Qual o meu contexto ? Um carrinho de produtos
export const CartContext = createContext({} as CartContextData);


// O meu provider que vai fornecer esse meu carrinho para a minha aplicação
export function CartProvider({ children }: CartProviderProps){

    const [cart, setCart] = useState<CartProps[]>([]);
    const [total, setTotal] = useState<string>("");


    function addItemCart(newItem: productProps){

        const indexItem = cart.findIndex(item => item.id === newItem.id);

        //caso encontre (!== -1) 
        if ( indexItem !== -1 ){
            const updatedCart = [...cart];
            const updatedProduct = {...updatedCart[indexItem]};

            updatedProduct.amount += 1;

            updatedProduct.total = updatedProduct.amount * updatedProduct.price;


            updatedCart[indexItem] = updatedProduct;
            setCart(updatedCart);
            totalResultCart(updatedCart);
        
            return;
        }

        const data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data]);
        totalResultCart([...cart, data])

    }

    function removeItemCart(product: CartProps){

        const formatedCart = cart.filter(item => item.id !== product.id);
        setCart(formatedCart);
        totalResultCart(formatedCart)

    }

    function reduceItemCart(product: CartProps){

        const indexItem = cart.findIndex(item => item.id == product.id);

        // Se for maior que 1
        if (cart[indexItem]?.amount > 1){
            //remover menos 1
            const cartList = cart

            cartList[indexItem].amount -=  1;
            cartList[indexItem].total -= cartList[indexItem].price

            setCart(cartList);
            totalResultCart(cartList);
            return;

        }

        removeItemCart(product);

    }


    function totalResultCart(items: CartProps[]){
  
        const myCart = items;
        const result = myCart.reduce((acc, obj) => {
            return acc + obj.total
        }, 0)

        const formatedResult = result.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        })

        setTotal(formatedResult);

    }

    return (
        <CartContext.Provider value={{cart, cartAmount: cart.length, addItemCart, reduceItemCart, removeItemCart, total}}>
            {children}
        </CartContext.Provider>
    )
}
