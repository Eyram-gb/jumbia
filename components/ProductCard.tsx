import React from 'react'
import Image from 'next/image'
import { ProductCardProps } from './types'

const ProductCard = ({ setOpenProductDetailModal }:ProductCardProps) => {
    return (
        <div className='h-60 w-52 rounded-2xl overflow-hidden' onClick={() => setOpenProductDetailModal(true)}>
            <div className='relative bg-gray-200 h-1/2'>
                <Image fill src={'/product.png'} alt='' className='h-1/2 w-full object-cover hover:scale-105 transition duration-500' />
            </div>
            <div className='bg-white h-1/2 p-2 flex flex-col justify-between'>
                <p className='text-sm h-2/5'>Bright Red Male Sneakers Bright</p>
                <div className='flex gap-x-2 items-center h-1/5 text-xs'>
                    <div className='relative w-4 h-4'>
                        <Image src={'/star.png'} fill alt='star' className='object-contain' />
                    </div>
                    <p>4.8</p>
                    <p>&middot;</p>
                    <p className='text-gray-400 font-light'>13k+ sold</p>
                </div>
                <p className='h-1/5 text-lg font-bold'>&#8373; 300.00</p>

            </div>
        </div>
    )
}

export default ProductCard