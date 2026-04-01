import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex-1 space-y-4'> 
                <h2 className={`${fontBangla.className} text-6xl font-bold leading-20`}>আপনার শিশুকে দিন একটি <br /> <span className='text-primary'>সুন্দর ভবিষ্যৎ</span></h2>
                <p>Buy every toy from us with up to 15% discount</p>
                <button className='btn btn-primary btn-outline'>Explore products</button>
            </div>
            <div className='flex-1'>
            <Image alt='Buy every toy from us with up to 15% discount' src={"/assets/hero.png"} width={500} height={400}></Image>
            </div>
        </div>
    );
};

export default Banner;