import React from 'react'

const Services = () => {
  return (
    <section id='services'  className='w-screen mt-10 min-h-screen flex flex-col items-center border-red-500 '>
        

        <div className=' bg-transparent rounded-xl p-6 h-full w-full'>

            <div className='  rounded-xl p-6 border-2 border-slate-300 h-full w-full flex flex-col md:flex-row gap-2 bg-transparent'>

                <div className=' bg-white h-full p-3 w-full md:w-1/3 rounded-md border-2 border-black flex flex-col  '> 

                    <div className='rounded border-2 border-black shadow-md h-1/8 md:h-1/6 flex items-center justify-center flex-col   hover:text-white hover:-translate-y-2 hover:bg-black hover:cursor-pointer'>
                        <h1 className='text-base lg:text-2xl font-bold items-center justify-center'> Starter Package </h1>  
                        <h3 className='text-base lg:text-lg font-semibold '> $999 <h3 className='hidden md:inline-block'>/Month</h3>  </h3>                 
                    </div>

                    <div className='flex flex-col lg:gap-1 md:gap-1'> 
                        <h4 className='md:text-xl lg:block font-semibold '> Keyword Research and Optimization</h4>   
                            <span className='text-sm md:font-normal'> ✅ Basic keyword research and on-page optimization. </span>

                        <h4 className=' text-sm md:text-xl lg:block font-semibold '> On-Page SEO </h4>     
                            <span className='text-sm md:font-normal'> ✅ Optimization of up to 5 pages. </span>
    
                        <h4 className='text-sm md:text-xl lg:block font-semibold'> Local SEO</h4>  
                            <span className='text-sm md:font-normal'> ✅ Google My Business setup and optimization. </span>
    
                        <h4 className='text-sm md:text-xl lg:block font-semibold '> Content Creation and Marketing </h4>
                            <span className='text-sm md:font-normal'> ✅  2 blog posts or articles per month. </span>

                        <h4 className='text-sm md:text-xl lg:block font-semibold'> Techincal SEO</h4>
                            <span className='text-sm md:font-normal'> ✅  Basic technical SEO audit and fixes.</span>

                        <h4 className='text-sm md:text-xl lg:block font-semibold'> Analytics and Reporting</h4>
                            <span className='text-sm md:font-normal'> ✅ Monthly performance reports. </span>
                    </div>
                </div>

                {/* hover:bg-transparent hover:text-white hover:cursor-pointer */}


                <div className=' bg-white h-full p-3 w-full md:w-1/3 rounded-md border-2 border-black '>

                    <div className='rounded border-2 border-black shadow-md  h-1/8 md:h-1/6 flex items-center justify-center flex-col  hover:-translate-y-2  hover:text-white hover:bg-black hover:cursor-pointer' >
                        <h1 className='text-base lg:text-2xl font-bold '> Growth Package </h1>  
                        <h3 className='text-base lg:text-xl font-semibold '> $1,999<h3 className='hidden md:inline-block'>/Month</h3></h3>                   
                    </div>        


                    <div className='flex flex-col lg:gap-1 md:gap-1'> 
                        <h4 className='text-sm md:text-lg lg:block  font-semibold '> Keyword Research and Optimization</h4>   
                            <span className='text-sm md:font-normal'> ✅ Advanced keyword research and comprehensive on-page optimization. </span>

                        <h4 className='text-sm md:text-lg lg:block  font-semibold '> On-Page SEO </h4>   
                            <span className='text-sm md:font-normal'> ✅ Optimization of up to 10 pages. </span>
    
                        <h4 className='text-sm md:text-lg lg:block  font-semibold '> Local SEO</h4>   
                            <span className='text-sm md:font-normal'> ✅ Google My Business setup, optimization, and review management. </span>

                        <h4 className='text-sm md:text-lg lg:block  font-semibold '> Content Creation and Marketing </h4>
                            <span className='text-sm md:font-normal'> ✅ 4 blog posts or articles per month.</span>

                        <h4 className='text-sm md:text-lg lg:block  font-semibold '> Techincal SEO</h4>
                            <span className='text-sm md:font-normal'> ✅ Full technical SEO audit and ongoing fixes. </span>

                        <h4 className='text-sm md:text-lg lg:block  font-semibold '>Link Building</h4>
                            <span className='text-sm md:font-normal'> ✅ Building high-quality backlinks. </span>

                        <h4 className='text-sm md:text-lg lg:block  font-semibold '>Social Media Integration</h4>
                            <span className='text-sm md:font-normal'> ✅ Integration of social media platforms to enhance SEO. </span>

                        <h4 className='text-sm md:text-lg lg:block  font-semibold '> Analytics and Reporting</h4>
                            <span className='text-sm md:font-normal'> ✅ Bi-weekly performance reports with detailed insights. </span>
                                
                    </div>

                </div>

                <div className='bg-white h-full p-3 w-full md:w-1/3 rounded-md border-2 border-black '> 
                    <div className='rounded border-2 border-black shadow-md  h-1/8 md:h-1/6 flex items-center justify-center flex-col hover:-translate-y-2  hover:text-white hover:bg-black hover:cursor-pointer '>
                        <h1 className='text-base lg:text-2xl font-bold items-center justify-center'> Premium Package </h1>  
                        <h3 className='text-bases font-semibold '> $3,499<h3 className='hidden md:inline-block'>/Month</h3></h3>                   
                    </div>

                    {/* &#x2022; */}
                    <div className='flex flex-col lg:gap-2 md:gap-1'> 
                        <h4 className='text-sm md:text-lg lg:block font-semibold '> Keyword Research and Optimization</h4>   
                            <span> ✅ Comprehensive keyword research and aggressive on-page optimization. </span>
                        <h4 className='text-sm md:text-lg lg:block font-semibold '> On-Page SEO </h4>      
                            <span className='text-sm md:font-normal'> ✅ Optimization of up to 20 pages. </span>
                        <h4 className='text-sm md:text-lg lg:block font-semibold '> Local SEO</h4>   
                            <span className='text-sm md:font-normal'> ✅ Google My Business setup, optimization, review management, and local citation building. </span>

                        <h4 className='text-sm md:text-lg lg:block font-semibold '> Content Creation and Marketing </h4>
                            <span className='text-sm md:font-normal'> ✅ 8 blog posts or articles per month, plus creation of case studies and customer testimonials.</span>
                        <h4 className='text-sm md:text-lg lg:block font-semibold '> Techincal SEO</h4>
                            <span className='text-sm md:font-normal'> ✅ Full technical SEO audit, ongoing fixes, and website speed optimization.</span>
                        <h4 className='text-sm md:text-lg lg:block font-semibold '> Link Building </h4>
                            <span className='text-sm md:font-normal'> ✅  Extensive link-building campaign with high-quality backlinks. </span>
                        <h4 className='text-sm md:text-lg lg:block font-semibold '> Social Media Integration </h4>
                            <span className='text-sm md:font-normal'> ✅ Full integration and management of social media platforms. </span>
                        <h4 className='text-sm md:text-lg lg:block font-semibold '> Analytics and Reporting</h4>
                         <span className='text-sm md:font-normal'>✅; Weekly performance reports with in-depth analysis and strategy adjustments. </span>
                        <h4 className='text-sm md:text-lg lg:block font-semibold '> Conversion Rate Optimization(CRO)</h4>
                        <span className='text-sm md:font-normal'> ✅ Comprehensive CRO services to increase conversions and enhance user experience. </span>


                    </div>

                </div>



            </div>
        </div>
    </section>
  )
}

export default Services