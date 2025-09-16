'use-client';

import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <section className='relative h-screen flex items-center justify-center overflow-hidden'>
            {/* background img */}
            <div className='absolute inset-0 z-0'>
                <img
                src=''
                alt='Fashion Hero Item'
                className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black/30'/>
            </div>
            
            {/* content */}

            <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
                <h1 className='text-5xl md:text-7xl font-bold mb-6'>
                        Elevate Your
                    <br/>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-white 
                      to-gray-300'>
                        Style
                    </span>
                </h1>
                <p className='text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto'>
                    Discover our hand chosen collection of premium fashion pieces designed for the modern
                    person 
                </p>
                <div className=''/>
            </div>

        </section>
    )
}

export default Hero;