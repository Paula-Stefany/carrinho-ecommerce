import { CartProps, CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'
import { FiTrash2 } from 'react-icons/fi';


export function CartItemsMobile(){

    const { cart, addItemCart, total, reduceItemCart, removeItemCart } = useContext(CartContext);

    return(
        
        <div className='py-6 w-full block text-slate-900 items-center justify-between text-lg'>
            { cart.map((product: CartProps) => (
                <article className='h-30 flex  n w-full border-b-2 border-b-slate-500 mb-5' key={product.id}>
                    <div className='w-[33%] flex'>
                        <img src={product.cover} alt={product.title} className='w-30 mx-auto'/>
                    </div>
                    

                    <div className='flex flex-col justify-between py-3 w-[33%]'>
                        <div className='w-fit mx-auto'>{product.price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL"
                        })}</div>
                        <div className=' flex gap-2 items-center w-fit mx-auto'>
                            <button className='px-2.5 py-1 bg-slate-500 hover:bg-slate-600 cursor-pointer rounded font-bold text-xl' onClick={() => addItemCart(product)}>+</button>
                                    {product.amount}
                            <button className='px-2.5 py-1 bg-slate-500 hover:bg-slate-600 cursor-pointer rounded font-bold text-xl' onClick={() => reduceItemCart(product)}>-</button>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between py-3 ml-auto w-[34%]'>
                        <div className='text-end'>
                            <label className='font-semibold '>Subtotal: </label>
                            {product.total.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL"
                            })}
                        </div>
                       <FiTrash2 size={22} className='ml-auto cursor-pointer' onClick={() => removeItemCart(product)}/>
                    </div>
                </article>
            )) }
            { cart.length !== 0 && (
                <div className='mt-7 w-fit ml-auto'>
                    <p><span className='font-semibold'>Total:</span> {total}</p>
                </div>
            ) }
        </div>
    )
}