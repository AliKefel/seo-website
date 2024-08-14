import React, { useState, useEffect } from 'react'
import logo from '../../assets/circle-logo.png'
import textLogo from '../../assets/text-logo.png'
import logo2 from '../../assets/IMG_8203.png'
import NavLinks from './NavLinks'
import { AnimatePresence, motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (

        <div className='w-full '>

            {console.log(isOpen)}
      
            <nav className="md:flex md:pr-2 justify-between left-0 font-medium items-center shadow-xl md:h-28 md:pb-2 bg-black ">

                {/* <div className=''>
                    <img src={logo2} alt="Logo" className='m-7 md:cursor-pointer h-16 md:h-32'  />
                </div> */}

                <div className='flex flex-row pt-9 ml-4 '>
                    <div className='gap-1'>
                        <img src={logo} alt="Logo" className=' md:cursor-pointer md:h-14 h-11 mb-2'  />
                    </div>

                    <div className=''>
                        <img src={textLogo} alt="Logo" className='md:cursor-pointer md:h-14 h-11 mb-2'  />
                    </div>

                </div>

                <div className=' md:hidden  ml-auto flex mt-2'> 
                    <button onClick={() => setIsOpen(!isOpen)} className='text-3xl md:hidden md:mr-4 md:mt-6 text-white ml-auto flex '>

                        {
                            isOpen ?     <ion-icon className='ml-auto' name="close-outline"></ion-icon> : <ion-icon name="grid-outline"></ion-icon> 
                        }
                        
                    </button>
                </div>

                <ul className= 'md:space-x-20 space-y-5 md:space-y-0 flex flex-col md:pr-8 md:pt-9 md:flex-row text-lg ' >
                    
                    <li className={`${isOpen ? ' rounded-md  justify-start flex ' : 'hidden'}` }>

                        <div className=' md:border-0 text-2xl font-semibold  w-1/5'> 
                            <FlyoutLink href="/" >
                            <NavLink to="/" className='text-white' exact>
                            Home
                        </NavLink>
                            </FlyoutLink>
                        </div>
                    </li>

                    <li className={`${isOpen ? ' rounded-md  justify-start flex ' : 'hidden'}`}>

                        <div className = 'md:border-0 text-white  text-2xl font-semibold w-1/5 ' >
                            <FlyoutLink href='/about' FlyoutContent={SeoContent} >
                                <ScrollLink  to="about" spy={true} smooth={true}  duration={500} > About</ScrollLink>
                            </FlyoutLink>
                        </div>

                    </li>

                    <li className={`${isOpen ? 'md:border-0  rounded-md  justify-start flex ' : 'hidden'}`}>

                        <div className = 'md:border-0 text-white  text-2xl font-semibold  w-1/5' >
                            <FlyoutLink href='/services' FlyoutContent={SeoContent} >
                                <ScrollLink  to="services" spy={true} smooth={true}  duration={500}>Services </ScrollLink>
                            </FlyoutLink>
                        </div>
                    </li>

                    <li className={`${isOpen ? 'md:border-0 rounded-md  justify-start flex ' : 'hidden'}`}>
                        <div className = 'md:border-0  text-white  text-2xl font-semibold  w-1/5   ' >
                            <FlyoutLink href='/about' FlyoutContent={ServicesContent} >
                               <ScrollLink to="contact">  Contact </ScrollLink>
                            </FlyoutLink>
                        </div>
                    </li>

                
                </ul>

               

            </nav>
        </div>
    )
}


const FlyoutLink = ({children , href, FlyoutContent}) =>{

    const [open, setOpen ] = useState(false); 

    const showFlyOut = open && FlyoutContent; 

    
     
    return (
        <div className='relative h-fit w-fit' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>

            <Link href= {href} className=' flex-row flex relative text-white transition-colors '> 
                {children} 
                <span style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }} className='z-50 bg-white absolute h-1 origin-left rounded-full transition-transform duration-300 ease-out -bottom-2 -left-2 -right-2' >
                      </span>
                      {/* <div className='absolute left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white top-8'  /> */}
            </Link>


            {/* <AnimatePresence> 
                {showFlyOut && (
                    <motion.div 
                    initial={{opacity: 0 ,y: 15}} 
                    animate={{opacity: 1 ,y: 0}} 
                    exit={{ opacity:0 , y:15}} 
                    className='fixed z-40 top-40 w-screen left-1/2 transform translate-x-1/2' 
                    style={{ width: 'calc(100vw - 2rem)', maxWidth: '100%' , translateX: "-50%"}}
                    transition={{duration: 0.3, ease: "easeOut"}}> 

                    <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent'/> 


                    <FlyoutContent/> 
                </motion.div>) }
            </AnimatePresence> */}

        </div>

    )
}

const ServicesContent = () =>{

    return (
        <div className='h-20 bg-white p-6 shadow-xl w-full'>
            <div className='  text-black'> 
                Flyout Content
            </div>
        </div>
)}


const SeoContent = () =>{

    return (
        <div className='h-96 bg-green-200 p-6 shadow-xl w-full flex items-center space-x-3 rounded-lg' style={{background: "#3D4D3D"}} >

            <div className='rounded-md text-black bg-slate-100 h-full w-1/3 flex justify-center top-2'> 
                <h1 className=' '> Organic Search </h1>

            </div>

            <div className='rounded-md text-black bg-slate-100 h-full w-1/3 flex justify-center top-2 '> 
                <h1>Digital Advertising</h1>

            </div>

            <div className='rounded-md text-black bg-slate-100 h-full w-1/3 flex justify-center top-2 '> 
                <h1>Digital Advertising</h1>

            </div>


        </div>
)}



export default Navbar
