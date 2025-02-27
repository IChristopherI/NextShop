import Categories from "@/src/components/shared/categories";
import Sort from "@/src/components/shared/sort";
import Filters from "@/src/components/shared/Filter/filters";
import ProductList from "@/src/components/shared/Item/Product-group-list";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {

  const items = await prisma.category.findMany({
    include: {
      items:true,
    },
  });

  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="flex items-center h-[50px] justify-between px-[300px] bg-slate-100">
          <Categories category={items} />
          <Sort />
        </div>
      </div>

      <div className="mt-6 mx-auto max-w-[1280px]">
        <div className="flex gap-[80px]">
          <div className="w-[150px]">
            <Filters />
          </div>
          <div>
            {items.length > 0 ? (
              items.map((category) =>
                category.items.length > 0 ? (
                  <div key={category.id}>
                    <h1 id={category.name} className="font-bold text-3xl text-center m-2">
                      {category.name}
                    </h1>
                    <ProductList items={category.items} />
                  </div>
                ) : null
              )
            ) : (
              <h1>Товары не найдены</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
