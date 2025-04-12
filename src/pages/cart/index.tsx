import { CartItemsMobile } from '../../components/cartItemsMobile'
import { useMediaQuery } from 'react-responsive'
import { CartItemsDesktop } from '../../components/cartItemsDesktop'


export function Cart(){

    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

    return(
        <section className="w-full max-w-7xl mx-auto px-4 py-18">
            <h1 className="font-semibold text-3xl text-slate-900 mb-10">Cart</h1>
            { isSmallScreen ? <CartItemsMobile/> : <CartItemsDesktop/> }
            
        </section>
    )
}