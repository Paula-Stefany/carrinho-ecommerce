import { Banner } from '../../components/banner' 
import { Products } from '../../components/products'
import { Banner2 } from '../../components/banner2'
import { FrequentAskedQuestions } from '../../components/frequentAskedQuestions'
import { Footer } from '../../components/footer'

export function Home(){

    return(
        <>
            <main className='w-full max-w-7xl m-auto pt-34'>
                <Banner/>
                <Products/>
                <Banner2/>
                <FrequentAskedQuestions/>
            </main>
            <Footer/>
        </>
    )
}