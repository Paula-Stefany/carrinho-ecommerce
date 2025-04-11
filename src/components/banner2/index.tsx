export function Banner2(){
    return(
        <section className="w-full py-7">
            <div className=" w-full block md:flex md:gap-12 md:m-auto">

                <article className="text-slate-900 flex flex-col pt-2 min-w-5/12 md:pt-0 md:justify-center">
                    
                    <h3 className="text-4xl mb-3 md:text-6xl ">Quality Products</h3>
                    <h2 className="text-2xl mb-6 md:text-4xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">And The Best Prices</h2>
                    <p className="text-lg font-medium mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quae consequuntur.</p>
                    <p className="text-lg mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus! Distinctio voluptate exercitationem. </p>
                </article>

                <aside className="md:max-w-7/12">
                    <img src="src/assets/banner2.jpg" alt="Imagem de garota com notebook" className="rounded-2xl filter brightness-50" />
                </aside>

            </div>
            
        </section>
    )
}