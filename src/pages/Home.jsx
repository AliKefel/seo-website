import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (

    <> 
    <section id='home' className='w-screen h-screen '>

        {/* <div className='flex flex-col items-center justify-center w-screeen h-screen'>
            <h1 className='text-5xl font-bold text-gray-800'> The most amazing way to get leads for your properties</h1>
        </div> */}
        <div className=' h-1/2 flex flex-col lg:flex-row md:items-start items-start pt-40 '>  
            <div className=" md:w-1/2 w-3/4 ml-6  "> 
                <div className="flex flex-col h-full gap-1 md:gap-2 " >
                    <span className="font-bold tracking-normal text-nowrap text-ellipsis text-5xl lg:text-7xl text-white" >Welcome to </span>
                    <span className="font-bold tracking-normal text-nowrap text-ellipsis text-5xl lg:text-7xl text-Black" > Generate SEO </span>
                </div>
            </div>

            <div className=" md:w-1/2 w-4/5 ml-6 mr-6 ">
                <div className=" h-full gap-1 md:gap-2 " >
                    <span className="tracking-wide leading-10 text-wrap text-ellipsis text-xl md:text-md text-white" >At Generate SEO, we specialize in elevating your online presence through expert Search Engine Optimization. Our dedicated team leverages cutting-edge strategies to enhance your visibility, drive organic traffic, and boost your business growth. Join us on a journey to achieve your digital marketing goals and stand out in the competitive online landscape.  </span>
                </div>
                <div className="w-1/2 border-b-4 border-gray-300 mt-2 rounded-md"></div>
            </div>
            

        </div>

        <div className='w-full h-1/2 flex justify-start pl-28 pt-96 md:pt-24 r-1/2 items-start md:mb-24'> 

            <div className='h-12 ml-1/2 w-fit border-4 border-slate-800 rounded-xl bg-slate-200 hover:bg-green-950 hover:text-white hover:cursor-pointer  '> 

                <span className='flex justify-center items-center text-4xl font-bold'><Link to='who-are-we'>Who Are We?</Link></span>

            </div>
        </div>


      

        
    </section>

  


    </>
  )
}

export default Home