import { useContext } from 'react'
import { CartContext, CartProps } from '../../contexts/CartContext'
import { FiTrash2 } from 'react-icons/fi'


export function CartItemsDesktop(){

    const { cart, total, reduceItemCart, removeItemCart, addItemCart } = useContext( CartContext )

    return(
        <div className='flex flex-col gap-5'>
            { cart.map((product: CartProps) => (
                <table className="w-full text-slate-900 flex-col" key={product.id}>
                    <thead className="flex w-full text-lg">
                        <tr className="flex w-full justify-between py-2 ">
                            <th className="w-[22.5%] flex justify-start">Product</th>
                            <th className="w-[22.5%] flex justify-start">Price</th>
                            <th className="w-[22.5%] flex justify-start">Quantity</th>
                            <th className="w-[22.5%] flex justify-start">Subtotal </th>
                            <th className="w-[10%] flex justify-start">
                
                            </th>
                        </tr>
                    </thead>
                
                    <tbody className="flex w-full">
                        <tr className="flex w-full justify-between py-2 items-center border-b border-slate-600">
                            <td className="w-[22.5%] flex justify-start"><img className="w-28"  src={product.cover} alt="Imagem do produto" /></td>
                            <td className="w-[22.5%] flex justify-start">{product.price.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL"
                            })}</td>
                            <td className="w-[22.5%] flex justify-start gap-3 items-center">
                                <button className="font-semibold text-lg w-8 bg-slate-500 rounded cursor-pointer hover:bg-slate-600" onClick={() => addItemCart(product)}>
                                    +
                                </button>
                                { product.amount }
                                <button className="font-semibold text-lg w-8 rounded bg-slate-500 cursor-pointer hover:bg-slate-600" onClick={() => reduceItemCart(product)}>
                                    -
                                </button>
                            </td>
                            <td className="w-[22.5%] flex justify-start">{product.total.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL"
                            })}</td>
                            <td className="w-[10%] flex justify-start">
                                <FiTrash2 onClick={() => removeItemCart(product)} size={24} className='cursor-pointer'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )) }
            { cart.length > 0 && (
                <div className='mt-7 w-fit ml-auto'>
                <p className='text-lg'><span className='font-semibold'>Total:</span> {total}</p>
            </div>
            ) }
        </div>
    )
}