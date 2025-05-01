import { CartItemsMobile } from '../../components/cartItemsMobile'
import { useMediaQuery } from 'react-responsive'
import { CartItemsDesktop } from '../../components/cartItemsDesktop'
import { useContext } from 'react'; 
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router'
import { HiArrowNarrowLeft } from 'react-icons/hi';


export function Cart(){

    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
    const { cart } = useContext(CartContext);


    return(
        <section className="w-full max-w-7xl mx-auto px-4 py-18 pt-50">
            <h1 className="font-semibold text-3xl text-slate-900 mb-10">Cart</h1>
            { cart.length === 0 && (
                <div className='flex flex-col w-fit m-auto p-2  justify-center items-center'>
                    <p className='text-lg mb-2 text-slate-900 font-medium'>
                        Seu carrinho está vazio :/
                    </p>
                    <Link className='flex items-center p-1.5 px-3 gap-2 text-amber-50 bg-slate-800 rounded-2xl' to={"/"}>
                        <HiArrowNarrowLeft size={21}/>
                        Voltar aos produtos
                    </Link>
                </div>
            ) }
            { isSmallScreen ? <CartItemsMobile/> : <CartItemsDesktop/> }
            
        </section>
    )
}