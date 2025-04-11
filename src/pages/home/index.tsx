import { Banner } from '../../components/banner' 
import { Products } from '../../components/products'


export function Home(){
    return(

        <main className='w-full max-w-7xl px-4 m-auto'>
            <Banner/>
            <Products/>
        </main>
    )
}