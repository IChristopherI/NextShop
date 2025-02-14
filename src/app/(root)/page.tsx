import Categories from "@/components/shared/categories";
import Filters from "@/components/shared/MainComponent/Filter/filters";
import ProductList from "@/components/shared/MainComponent/Item/Product-group-list";
import Sort from "@/components/shared/sort";
import { PrismaClient } from "@prisma/client";
import React from "react";
import { ModeToggle } from "./SwitchTheme";



export default async function Home() {
  const prisma = new PrismaClient();
  
  const Items = await prisma.category.findMany({
    include: {
      items: true,
    },

  })
 
  return (
    <>
        <div className="sticky top-0   z-10   m-4   ">
          <div className=" flex items-center  justify-between mr-auto ml-auto max-w-[1480px]">
          <Categories categories={Items} />
          <Sort />
          </div>
        </div>
      <div className="mt-6 mx-auto max-w-[1380px]">
        <h1 className="font-bold text-3xl"></h1>
        <div className="flex gap-[60px]">
          <div className="w-[150px]">
            <Filters />
          </div>

          <div className="">
            {
              Items.map((category, index) => (
                category.items.length > 0 && (

                  <div key={index}>
                    <h1 id={category.name} className="font-bold text-3xl text-center m-2">{category.name}</h1>
                    <ProductList
                      // title={category.name}
                      items={category.items}
                    />
                  </div>

                ))
              )
            }


                                       
          </div>
        </div>
      </div>
    </>
  );
}



// {
//   id: 1,
//   name: 'SEGA Project Sekai',
//   price: 450,
//   imageUrl: 'https://murasaki.store/image/cache/catalog/figures/sega/sega-234-1-742x1000.jpg'

// },
// {
//   id: 2,
//   name: 'SEGA Project Sekai',
//   price: 450,
//   imageUrl: 'https://murasaki.store/image/cache/catalog/figures/sega/sega-234-1-742x1000.jpg'

// },
// {
//   id: 3,
//   name: 'SEGA Project Sekai',
//   price: 450,
//   imageUrl: 'https://murasaki.store/image/cache/catalog/figures/sega/sega-234-1-742x1000.jpg'

// },
// {
//   id: 4,
//   name: 'SEGA Project Sekai',
//   price: 450,
//   imageUrl: 'https://murasaki.store/image/cache/catalog/figures/sega/sega-234-1-742x1000.jpg'

// },
// {
//   id: 5,
//   name: 'SEGA Project Sekai',
//   price: 450,
//   imageUrl: 'https://murasaki.store/image/cache/catalog/figures/sega/sega-234-1-742x1000.jpg'

// },
// {
//   id: 6,
//   name: 'SEGA Project Sekai',
//   price: 450,
//   imageUrl: 'https://murasaki.store/image/cache/catalog/figures/sega/sega-234-1-742x1000.jpg'

// },
// {
//   id: 7,
//   name: 'SEGA Project Sekai',
//   price: 450,
//   imageUrl: 'https://murasaki.store/image/cache/catalog/figures/sega/sega-234-1-742x1000.jpg'

// },