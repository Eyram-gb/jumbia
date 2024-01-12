import ProductCard from '@/components/ProductCard';
import { category } from '@/sanity/schemas/category';
import { getCategories } from '@/sanity/utils/category';
import { getProducts, getProductsByBrand, getProductsCategory } from '@/sanity/utils/product'
import Image from 'next/image'
import { useState } from 'react';

export default async function Home() {
  // const [openProductDetailModal, setOpenProductDetailModal] = useState(false);
  const products = await getProducts();
  const categories = await getCategories();
  // const productsByBrand = await getProductsByBrand('Fendi');
  // const productsByCat = await getProductsCategory('a3c66961-9cb4-4b92-8f93-0542b7fa58a4');
  // console.log('brand ====== ', productsByBrand);
  // console.log('category ====== ', productsByCat);
  // console.log('products=>', products);

  return (
    <main className="bg">
      <div className='w-full h-[40vh] bg-teal-100'>
        carousel
      </div>
      {/* CATEGORIES */}
      <div className='flex justify-center gap-x-4 bg-white py-10'>
        {
          categories.map((cat, index) => {
            return (
              <div key={index} className=''>
                <div className='w-14 h-14 relative bg-gray-200 rounded-full overflow-hidden'>
                  <Image fill src={cat.image.url} alt={cat.image.alt} className='object-contain p-1' />
                </div>
                <p className='text-xs text-center mt-1.5'>{cat.name}</p>
              </div>
            )
          })
        }
      </div>
      {/* PRODUCTS */}
      {/* <div>
        <ProductCard setOpenProductDetailModal={setOpenProductDetailModal} />
      </div> */}
    </main>
  )
}
