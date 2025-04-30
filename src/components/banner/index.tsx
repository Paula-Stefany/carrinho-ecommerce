import { FaArrowDown } from 'react-icons/fa';


export function Banner(){
    return(
        <section className="w-full py-7 px-4">

            <div className="max-w-7xl w-full block md:flex md:gap-12 md:m-auto ">

                <aside className="md:max-w-7/12">
                    <img className="rounded-2xl filter brightness-50" src="src/assets/bannerImg.jpg" alt="" />
                </aside>
                <article className="text-slate-900 flex flex-col pt-10 min-w-5/12 md:pt-0 md:justify-center">
                    <h3 className="text-2xl font-semibold mb-3 md:text-4xl">Best Place to Buy Your</h3>
                    <h2 className="text-4xl font-light mb-8 md:text-6xl bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">Latest Eletronic</h2>
                    <p className="text-lg font-medium mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem molestias odio a rerum</p>
                    <p className="text-lg font-medium mb-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, itaque.
                    </p>
                    <a className="flex items-center gap-2 bg-gradient-to-r from-slate-900 to-slate-500 w-fit py-2 px-4 rounded-2xl text-amber-50 shadow-xl cursor-pointer select-none ">Products below
                        <FaArrowDown/>
                    </a>
                </article>

            </div>

        </section>
    )
}