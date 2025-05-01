import { FiShoppingCart } from 'react-icons/fi'
import { api } from '../../services/api'
import { useEffect, useState, useContext } from 'react'; 
import { CartContext } from '../../contexts/CartContext'
import toast from 'react-hot-toast'
import { Link } from 'react-router'


export interface productProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Products(){

    const [products, setProducts] = useState<productProps[]>([]);
    const {addItemCart} = useContext(CartContext);
    
    useEffect(() => {
    
        async function getProducts() {
            const response = await api.get("/products")
            setProducts(response.data);
              
        }
    
        getProducts();
    
    }, [])

    function handleAddCart(product: productProps){

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
        addItemCart(product);
    }


    return (
        <section className="py-6 ">
            <h1 className="font-semibold text-3xl text-slate-900 px-4">Products</h1>

            <div className="py-10 flex gap-6 overflow-x-auto hide-scrollbar px-4">
                { products.map((product) => (
                    <article className='min-w-70 
                    h-120 flex flex-col text-amber-50 rounded-2xl cursor-pointer justify-between' key={product.id}> 
                        <figure className='w-full relative h-60' >
                            <Link to={`/details/${product.id}`} >
                                <img src={product.cover} alt="Logo do produto" />
                            </Link>

                            
    
                            <button className='bg-gradient-to-r from-slate-900 to-slate-500  w-fit ml-auto pt-2 pb-2 pl-3 pr-3 rounded-2xl absolute top-[235px] left-[232px] cursor-pointer outline-none border-none' onClick={() => handleAddCart(product)}>
                                <FiShoppingCart size={23} className='text-amber-50'/>
                            </button>
                            
    
                        </figure>
                        
                        <Link to={`/details/${product.id}`}>
                            <div className='text-center w-full  bg-gradient-to-r from-slate-900 to-slate-600 shadow-lg flex flex-col rounded-2xl h-49 justify-center'>
                                <h3 className='text-lg font-medium mb-3 mx-3'>{product.title}</h3>
                                <p>Por até 12x de <span >R$ {(product.price / 12).toFixed(2)}</span></p>
                                <p>ou à vista por R$ {product.price}</p>
                            </div>
                        </Link>
                        
                    </article>
                    
                )) }
                
                
            </div>
        </section>
    )
}