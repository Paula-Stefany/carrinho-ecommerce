import { Link } from 'react-router'
import { FiShoppingCart } from 'react-icons/fi'
import { GiMicrochip } from 'react-icons/gi';



export function Header(){
    return(
        <header className='w-full border-b border-slate-300'>
            <div className='w-full flex justify-center items-center py-1.5 bg-slate-900 text-amber-50'>
                <p className='font-bold italic text-center text-xs select-none'>Compre sem burocracia aqui no Tech Shop! <span className='font-normal'>Promoções</span> todos os dias </p>
            </div>

            <nav className='w-full max-w-7xl h-22 items-center justify-between flex px-4 mx-auto' >
                <Link className='font-bold text-xl md:text-2xl text-slate-900 flex gap-2 items-center' to="/">
                <GiMicrochip size={30}/>
                Tech <span className='font-medium '>Shop</span>
                </Link>

                <Link className='relative' to="/cart">
                    <FiShoppingCart size={25} className='text-slate-900' />
                    <span className='absolute -top-3 -right-3 px-2.5 bg-slate-400 opacity-90 rounded-full w-6 h-6 flex justify-center font-semibold text-slate-900'>
                        2
                    </span>
                </Link>
            </nav>

        </header>
    )
}