import { RiDeleteBinLine } from 'react-icons/ri';


export function CartItemsMobile(){
    return(
        <div className='py-6 w-full block text-slate-900 items-center justify-between text-lg'>
            <article className='h-30 flex  justify-between w-full border-b-2 border-b-slate-500 mb-5'>
                <img src="https://www.wb.com.br/upload/produto/imagem/fone-de-ouvido-headphone-bluetooth-sem-fio-over-ear-wb-gyda-com-100-horas-de-bateria-case-incluso-25.webp" alt="Imagem do produto"/>

                <div className='flex flex-col justify-between py-3'>
                    <div>R$200</div>
                    <div className=' flex gap-2 items-center'>
                        <button className='px-2.5 py-1 bg-slate-500 hover:bg-slate-600 cursor-pointer rounded font-bold text-xl'>+</button>
                                2
                        <button className='px-2.5 py-1 bg-slate-500 hover:bg-slate-600 cursor-pointer rounded font-bold text-xl'>-</button>
                    </div>
                </div>

                <div className='flex flex-col justify-between py-3'>
                    <div>
                        <label className='font-semibold'> Total: </label>
                         R$700
                    </div>
                    <RiDeleteBinLine size={24} className='ml-auto cursor-pointer'/> 
                </div>
            </article>
        </div>
    )
}