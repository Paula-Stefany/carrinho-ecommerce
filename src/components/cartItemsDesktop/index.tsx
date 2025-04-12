import { RiDeleteBinLine } from 'react-icons/ri';


export function CartItemsDesktop(){
    return(
        <div className='flex flex-col gap-5'>
            <table className="w-full text-slate-900 flex-col">
                <thead className="flex w-full text-lg">
                    <tr className="flex w-full justify-between py-2 ">
                        <th className="w-[22.5%] flex justify-start">Product</th>
                        <th className="w-[22.5%] flex justify-start">Price</th>
                        <th className="w-[22.5%] flex justify-start">Quantity</th>
                        <th className="w-[22.5%] flex justify-start">Total </th>
                        <th className="w-[10%] flex justify-start">
            
                        </th>
                    </tr>
                </thead>
            
                <tbody className="flex w-full">
                    <tr className="flex w-full justify-between py-2 items-center border-b border-slate-600">
                        <td className="w-[22.5%] flex justify-start"><img className="w-28"  src="https://www.wb.com.br/upload/produto/imagem/fone-de-ouvido-headphone-bluetooth-sem-fio-over-ear-wb-gyda-com-100-horas-de-bateria-case-incluso-25.webp" alt="Imagem do produto" /></td>
                        <td className="w-[22.5%] flex justify-start">R$ 1200</td>
                        <td className="w-[22.5%] flex justify-start gap-3 items-center">
                            <button className="font-semibold text-lg w-8 bg-slate-500 rounded cursor-pointer hover:bg-slate-600">
                                +
                            </button>
                            2
                            <button className="font-semibold text-lg w-8 rounded bg-slate-500 cursor-pointer hover:bg-slate-600">
                                -
                            </button>
                        </td>
                        <td className="w-[22.5%] flex justify-start">R$ 2400</td>
                        <td className="w-[10%] flex justify-start">
                            <RiDeleteBinLine size={24} className='cursor-pointer'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}