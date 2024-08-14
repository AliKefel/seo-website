import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id='about'  className='w-screen min-h-screen overflow-visible flex flex-col md:items-start items-start gap-10'>


        <div className='w-screen md:h-1/3 flex flex-col md:flex-row md:items-start items-start '> 

            <div className="  w-3/4 md:w-1/2 ml-6 "> 
                <div className="flex flex-col h-full gap-1 md:gap-2 " >
                    <span className="font-bold tracking-normal text-nowrap text-ellipsis text-5xl md:text-5xl  text-white mt-2" >Why Choose </span>
                    <span className="font-bold tracking-normal text-nowrap text-ellipsis text-5xl md:text-5xl  text-black mt-2" >Generate SEO </span>

                </div>

            </div>

            <div className=" w-3/4 md:w-5/12 ml-6 mr-6 ">
                <div className="flex flex-col h-full gap-1 md:gap-2 " >
                    <span className="tracking-wide leading-10 text-wrap text-ellipsis text-xl md:text-md text-white" >At Generate SEO, we don't Just see your business as another client - we see it as our own. Our mission is to seamlessly integrate with your marketing team, acting with the same dedication and precision as an owner would. Every dollar you invest is treated with utmost respect, ensuring it contributes significantly to your growth. </span>
                </div>
                <div className="w-1/2 border-b-4 border-gray-300 mt-2 rounded-md"></div>
            </div>
        </div>


        <div className='w-screen h-1/3  flex flex-col md:flex-row md:items-start items-start mt-2 ' > 

            <div className="md:w-1/2 ml-6 w-3/4"> 
                <div className="flex flex-col h-full gap-1 md:gap-2 " >
                    <span className="font-semibold tracking-normal text-nowrap text-ellipsis text-5xl md:text-5xl  text-white mt-2" >Our Promise: </span>
                    <span className="font-semibold tracking-normal text-wrap text-ellipsis text-5xl md:text-5xl  text-black mt-2" > 
                        <h2>Genuine Results and Tangible Growth </h2> 
                    </span>

                </div>

            </div>

            <div className=" w-3/4 md:w-5/12 ml-6 mr-6 ">
                <div className="flex flex-col h-full gap-1 md:gap-2 " >
                    <span className="tracking-wide leading-10 text-wrap text-ellipsis text-xl md:text-md text-white" > We focus on solving your unique challenges through innovative digital marketing strategies. Forget the fluff and jargon - our reports cut to the chase with clear, actionable insights on return on ad spend, lead generation, client acquisition,
                    and sales growth. </span>
                </div>
                <div className="w-1/2 border-b-4 border-gray-300 mt-2 rounded-md"></div>
            </div>

        </div>

        <div className='flex justify-center items-center w-full'> 
          <div className='hover:bg-white hover:text-black cursor-pointer border-4 border-black w-56 flex h-16 bg-black rounded-xl text-white items-center justify-center font-bold'>  <Link to='case-study'> <span className='text-2xl justify-center items-center'>CASE STUDY</span></Link></div>
        </div>



        <div className='w-screen h-1/3 flex flex-col md:items-start items-start mt-5 '> 

            <div className="md:w-1/2 ml-6 w-3/4  "> 
                <span className="font-semibold tracking-normal tex-wrap md:text-nowrap text-ellipsis text-5xl md:text-5xl max-w-full text-white mt-2" > What Sets Us Apart: </span>
            </div>

            <div className="w-11/12  ml-6 mr-6  flex flex-col gap-5 mt-10">

                <div className='gap-3'> 
                    <span className='text-4xl font-semibold text-black'> Ownership Mentality: </span>
                    
                    <span className='text-white font-normal text-xl '> We approach your business with the same passion and responsibilly as it it were our own.</span>
                </div>

                <div className='gap-3'>  
                    <span className='text-4xl font-semibold text-black'> Transparent Communication: </span>

                    <span className='text-white font-normal text-xl' >You'l recelve straightforward, meaningful updates that matter to you and your business goals.</span>
                </div>

                <div className='gap-3'> 
                    <span className='text-4xl font-semibold text-black'> Problem-Solving Focus: </span>
                    
                    <span className='text-white font-normal text-xl'> Our primary goal ls to address your challenges and drive explosive growth. </span>
                </div>

            </div>

        </div>

        




    </section>
  )
}

export default About