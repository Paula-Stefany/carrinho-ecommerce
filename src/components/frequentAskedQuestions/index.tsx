import { FaCaretLeft } from 'react-icons/fa';


export function FrequentAskedQuestions(){
    return(
        <section className='flex flex-col gap-4 py-7 px-4 text-slate-900'>
            <h2 className='text-3xl font-semibold w-fit m-auto'>Frequent Questions</h2>
            <p className='w-fit m-auto text-center text-[17px]'>Lorem ipsum dolor sit amet lorem, ipsum dolor.</p>
            <div className='w-full flex justify-center flex-col m-auto text-amber-50 py-6 md:py-18 gap-1 md:w-[80%]'>
                <details className='bg-slate-600  rounded-xl'>
                    <summary className='flex justify-between text-lg outline-none px-6 py-4'>
                        Lorem ipsum dolor sit amet?
                        <FaCaretLeft size={22}
                        />
                    </summary>
                    <p className=' px-6 py-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos tempore suscipit hic omnis voluptas doloremque!
                    </p>
                </details>
                <details className='bg-slate-600  rounded-xl'>
                    <summary className='flex justify-between text-lg outline-none px-6 py-4'>
                        Lorem ipsum dolor sit amet?
                        <FaCaretLeft size={22}
                        />
                    </summary>
                    <p className=' px-6 py-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos tempore suscipit hic omnis voluptas doloremque!
                    </p>
                </details>
                <details className='bg-slate-600  rounded-xl'>
                    <summary className='flex justify-between text-lg outline-none px-6 py-4'>
                        Lorem ipsum dolor sit amet?
                        <FaCaretLeft size={22}
                        />
                    </summary>
                    <p className=' px-6 py-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos tempore suscipit hic omnis voluptas doloremque!
                    </p>
                </details>
                <details className='bg-slate-600  rounded-xl'>
                    <summary className='flex justify-between text-lg outline-none px-6 py-4'>
                        Lorem ipsum dolor sit amet?
                        <FaCaretLeft size={22}
                        />
                    </summary>
                    <p className=' px-6 py-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos tempore suscipit hic omnis voluptas doloremque!
                    </p>
                </details>
                <details className='bg-slate-600  rounded-xl'>
                    <summary className='flex justify-between text-lg outline-none px-6 py-4'>
                        Lorem ipsum dolor sit amet?
                        <FaCaretLeft size={22}
                        />
                    </summary>
                    <p className=' px-6 py-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos tempore suscipit hic omnis voluptas doloremque!
                    </p>
                </details>
               
            </div>
        </section>
    )
}