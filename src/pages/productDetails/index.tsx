import { Link } from 'react-router'
import { FiShoppingCart } from 'react-icons/fi'
import { api } from '../../services/api'
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router';
import { productProps } from '../../components/products'
import { CartContext } from '../../contexts/CartContext'
import { toast } from 'react-hot-toast'
import { HiArrowNarrowLeft } from 'react-icons/hi';


export function ProductsDetails(){

    const { id } = useParams();
    const [product, setProduct] = useState<productProps>({
        id: 0,
        title: '',
        description: '',
        price: 0,
        cover: ''
    });
    const { addItemCart } = useContext(CartContext);

    const [productExist, setProductExist] = useState<boolean>(false);

    useEffect(() => {
        
            async function getProduct() {

                try{
                    const response = await api.get(`/products/${id}`)
                    setProduct(response.data);
                    setProductExist(true);

                } catch (error) {
                    setProductExist(false)
                    console.log(error)
                }
                
            }
        
            getProduct();
        
    }, [id])

    function addCartProduct(product: productProps){
        toast.success("Produto adicionado no carrinho", {
            style: {
                background: 'linear-gradient(to right, #0f172a, #475569)',
                color: 'white',
            },
            iconTheme: {
                    primary: 'white',
                    secondary: '#0f172a',       
            },
            duration: 2500
           
        })
        addItemCart(product)
    }
    

    return (
        <section  className="px-4 pt-38 pb-6 text-slate-900 max-w-7xl m-auto">
        { productExist ? 
            <div className='flex flex-col gap-12 md:flex-row  md:gap-0 '>
            <aside className='w-[75%] m-auto md:w-[40%] '>
                <img className='md:w-[70%] m-auto' src={product?.cover} alt={product?.title} />
            </aside>
            <article className='flex flex-col gap-4 md:w-[50%] md:px-10'>
                <h2 className='text-2xl font-medium mb-4'>{product?.title}</h2>
                <p className='text-lg'>{product?.description}</p>

                <div className='flex gap-4 items-center'>
                    <p className='text-lg font-semibold'>{(product?.price)?.toLocaleString('pt-br', {
                        style: "currency",
                        currency: 'BRL'
                    })}</p>
                    <Link className='mr-4' to="/cart">
                        <button className=' pt-2 py-2 px-3 rounded-2xl border-2 border-slate-900 bg-amber-50 outline-none cursor-pointer' onClick={() => addCartProduct(product)}>
                            <FiShoppingCart className=' cursor-pointer ' size={22}/>
                        </button>
                    </Link>
                </div>
                
            </article>
        </div>
        : 
        <div className=' w-fit m-auto'>
            <p className='mb-3'>Esse produto não existe :/</p>
            <Link className='flex items-center p-1.5 px-3 gap-2 text-amber-50 bg-slate-800 rounded-2xl' to={"/"}>
                <HiArrowNarrowLeft size={21}/>
                Voltar aos produtos
            </Link>
        </div>
        }
            
        </section>
    )
}