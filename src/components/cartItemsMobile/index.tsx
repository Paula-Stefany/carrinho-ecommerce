import { RiDeleteBinLine } from 'react-icons/ri';
import { CartProps } from '../../contexts/CartContext'



interface CartItemsMobileProps{
    cart: CartProps[];
    addItemCart: (newItem: CartProps) => void;
}

export function CartItemsMobile({cart, addItemCart}: CartItemsMobileProps){

    return(
        
        <div className='py-6 w-full block text-slate-900 items-center justify-between text-lg'>
            { cart.map((product) => (
                <article className='h-30 flex  n w-full border-b-2 border-b-slate-500 mb-5' key={product.id}>
                    <img src={product.cover} alt={product.title} className='w-30 mr-5'/>

                    <div className='flex flex-col justify-between py-3 w-25'>
                        <div>{product.price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL"
                        })}</div>
                        <div className=' flex gap-2 items-center'>
                            <button className='px-2.5 py-1 bg-slate-500 hover:bg-slate-600 cursor-pointer rounded font-bold text-xl' onClick={() => addItemCart(product)}>+</button>
                                    {product.amount}
                            <button className='px-2.5 py-1 bg-slate-500 hover:bg-slate-600 cursor-pointer rounded font-bold text-xl'>-</button>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between py-3 ml-auto'>
                        <div className='text-end'>
                            <label className='font-semibold '>Subtotal: </label>
                            {product.total.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL"
                            })}
                        </div>
                        <RiDeleteBinLine size={24} className='ml-auto cursor-pointer'/> 
                    </div>
                </article>
            )) }
        </div>
    )
}