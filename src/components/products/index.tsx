import { FiShoppingCart } from 'react-icons/fi'


export function Products(){
    return (
        <section className="py-6">
            <h1 className="font-semibold text-3xl text-slate-900">Products</h1>

            <div className="py-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <article className='w-80 h-fit justify-center flex flex-col items-center text-amber-50 rounded-2xl'>
                    <figure className='w-full relative mb-1.5' >
                        <img src="https://www.wb.com.br/upload/produto/imagem/fone-de-ouvido-headphone-bluetooth-sem-fio-over-ear-wb-gyda-com-100-horas-de-bateria-case-incluso-25.webp" alt="Logo do produto" />

                        <div className='bg-gradient-to-r from-slate-900 to-slate-500  w-fit ml-auto pt-2 pb-2 pl-3 pr-3 rounded-2xl absolute top-[280px] left-[272px] '>
                            <FiShoppingCart size={23} className='text-amber-50'/>
                        </div>
                        

                    </figure>
                   
                   <div className='text-center py-5 w-full  bg-gradient-to-r from-slate-900 to-slate-600 shadow-lg rounded-2xl'>
                        <h3 className='text-lg font-semibold mb-2'>Fone de Ouvido Tico Teco</h3>
                        <p>Por até 12x de <span className='font-semibold'>R$ 200</span></p>
                        <p>ou à vista por R$ 2000</p>
                   </div>
                         
                </article>
                
            </div>
        </section>
    )
}