import { Banner } from '../../components/banner' 
import { Products } from '../../components/products'
import { Banner2 } from '../../components/banner2'


export function Home(){
    return(

        <main className='w-full max-w-7xl px-4 m-auto'>
            <Banner/>
            <Products/>
            <Banner2/>
        </main>
    )
}