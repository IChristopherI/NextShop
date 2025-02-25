
import { Suspense } from "react";
import Categories from "@/src/components/shared/categories";
import Sort from "@/src/components/shared/sort";
import Filters from "@/src/components/shared/Filter/filters";
import ProductList from "@/src/components/shared/Item/Product-group-list";
import Pagination from "@/src/components/shared/Pagination";
import { prisma } from "@/prisma/prisma-client";

interface HomeProps {
  searchParams: { page?: string; limit?: string }; //об'єкт з якого содержить параметри з URL 'page=2&limit=4'
}
export default async function Home({ searchParams }: HomeProps) {

  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 3;
  const skip = (page - 1) * limit;

  // Загружаем категории с товарами (с учетом пагинации)
  const items = await prisma.category.findMany({
    include: {
      items: {
        take: limit,
        skip: skip,
      },
    },
  });

  const totalItems = await prisma.item.count();
  const totalPages = Math.ceil(totalItems / limit);

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

        <Suspense fallback={<div>Загрузка...</div>}>
          <Pagination currentPage={page} totalPages={totalPages} />
        </Suspense>
      </div>
    </>
  );
}
