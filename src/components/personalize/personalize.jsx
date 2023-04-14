import mulher_vaso from '../../assets/image 19.png'
import vaso1 from '../../assets/image 21.png'
import vaso2 from '../../assets/image 22.png'
import vaso3 from '../../assets/image 23.png'

function Personalize() {
    return (
        <div className='flex mt-10'>
            <div className='flex'>
                <div className='flex bg-white border-2 border-para-borda w-[43%] h-80'>
                    <img src={mulher_vaso} className='' />
                    <div className='p-4'>
                        <p className=' mt-3 font-encode-expanded font-bold text-[1.5rem]'>Personalize seu vaso!</p>
                        <h1 className='mt-10 text-right text-[1.2rem]'>Entre em contato conosco para realizar o orçamento!</h1>
                        <div className='text-center mt-10'>
                            <div className='border-2 h-10'>
                                <h1 className='text-[1.1rem] text-center font-gafata flex items-center justify-center h-full'>plantae.contato@plantae.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row-reverse justify-between pl-4 w-[57%] h-80'>
                    <img src={vaso1} className='' />
                    <img src={vaso2} className='' />
                    <img src={vaso3} className='' />
                </div>
            </div>
        </div>
    )
}

export default Personalize